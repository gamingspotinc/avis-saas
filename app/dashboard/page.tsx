"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type Feedback = {
  id: string;
  comment: string;
  created_at: string;
  client_name?: string;
  client_phone?: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [companyName, setCompanyName] = useState<string>("");
  const [companySlug, setCompanySlug] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      // Récupérer les infos de la PME du profil
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("company_id, companies(name, slug)")
        .eq("id", session.user.id)
        .single();

      if (profileError || !profileData || !profileData.companies) {
        alert("Erreur lors de la récupération de la PME !");
        setLoading(false);
        return;
      }

      const company = profileData.companies[0]; // <-- prend le premier élément
      setCompanyName(company.name);
      setCompanySlug(company.slug);

      // Récupérer les feedbacks pour cette PME
      const { data: fbData } = await supabase
        .from("feedback")
        .select("*")
        .eq("company_id", profileData.company_id)
        .order("created_at", { ascending: false });

      if (fbData) setFeedbacks(fbData);

      setLoading(false);
    };

    fetchData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) return <p style={{ padding: 40 }}>Chargement...</p>;

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <strong>Voici votre lien de partage :</strong>{" "}
          <span style={{ wordBreak: "break-all" }}>
            {`${process.env.NEXT_PUBLIC_SITE_URL}/avis/${companySlug}`}
          </span>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: "6px 12px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Déconnexion
        </button>
      </div>

      {/* Feedbacks */}
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2>Commentaires récents pour {companyName}</h2>
        {feedbacks.length === 0 && <p>Aucun commentaire pour l'instant.</p>}
        {feedbacks.map((f) => (
          <div
            key={f.id}
            style={{
              border: "1px solid #ddd",
              padding: 12,
              borderRadius: 6,
              marginBottom: 12,
              backgroundColor: "#f9f9f9",
            }}
          >
            <p>{f.comment}</p>
            {(f.client_name || f.client_phone) && (
              <small>
                Contact client : {f.client_name || "-"} {f.client_phone ? `(${f.client_phone})` : ""}
              </small>
            )}
            <br />
            <small style={{ color: "#666" }}>{new Date(f.created_at).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}