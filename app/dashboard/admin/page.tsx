"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Feedback = {
  id: string;
  comment: string;
  created_at: string;
};

type Company = {
  id: string;
  name: string;
  slug: string;
  is_active: boolean;
  feedbacks?: Feedback[];
};

export default function AdminDashboard() {
  const router = useRouter();
  const ADMIN_EMAIL = "michael.venne@outlook.com"; // Mets ton email admin ici
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      const { data: authData } = await supabase.auth.getUser();

      if (!authData.user) {
        router.push("/login");
        return;
      }

      // 🔐 Sécurité ADMIN
      if (authData.user.email !== ADMIN_EMAIL) {
        router.push("/dashboard"); // redirige vers dashboard PME
        return;
      }

      // Charger toutes les companies et leurs feedbacks
      const { data, error } = await supabase
        .from("companies")
        .select(`
          id,
          name,
          slug,
          is_active,
          feedbacks:feedback(id, comment, created_at)
        `);

      if (error) {
        console.error("Erreur chargement companies:", error);
      } else {
        setCompanies(data || []);
      }

      setLoading(false);
    };

    loadDashboard();
  }, [router]);

  if (loading) return <p style={{ textAlign: "center" }}>Chargement admin...</p>;

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", position: "relative" }}>
      {/* Déconnexion en haut à droite */}
      <button
        onClick={async () => {
          await supabase.auth.signOut();
          router.push("/login");
        }}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Déconnexion
      </button>

      <h1>Admin Dashboard</h1>

      {companies.length === 0 ? (
        <p>Aucune company enregistrée.</p>
      ) : (
        <ul style={{ marginTop: "20px" }}>
          {companies.map((company) => (
            <li
              key={company.id}
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                marginBottom: "20px",
              }}
            >
              <strong>{company.name}</strong> ({company.is_active ? "Active ✅" : "Inactive ❌"})
              <br />
              <a
                href={`/avis/${company.slug}`}
                target="_blank"
                style={{ color: "blue" }}
              >
                Voir page avis
              </a>

              {company.feedbacks && company.feedbacks.length > 0 && (
                <div style={{ marginTop: "10px" }}>
                  <h4>Commentaires :</h4>
                  <ul>
                    {company.feedbacks.map((fb) => (
                      <li key={fb.id}>
                        {fb.comment} <em>({new Date(fb.created_at).toLocaleString()})</em>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}