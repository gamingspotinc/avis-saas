"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import FeedbackList from "@/components/FeedbackList";

type Company = {
  id: string;
  name: string;
  slug: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifie la session
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.replace("/login");
        return;
      }

      // Récupère les entreprises de l'utilisateur
      const { data, error } = await supabase
        .from("companies")
        .select("*")
        .eq("owner_id", session.user.id);

      if (error) {
        console.error("Erreur récupération entreprises:", error.message);
        setLoading(false);
        return;
      }

      setCompanies(data as Company[]);
      setLoading(false);
    };

    checkSession();
  }, [router]);

  if (loading) {
    return (
      <div style={{ padding: 50, textAlign: "center", fontSize: 20 }}>
        Chargement...
      </div>
    );
  }

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>Dashboard PME</h1>

      {companies.length === 0 && (
        <p style={{ textAlign: "center" }}>Aucune entreprise trouvée.</p>
      )}

      {companies.map((company) => (
        <div
          key={company.id}
          style={{
            marginBottom: 40,
            padding: 20,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            borderRadius: 12,
            color: "white",
          }}
        >
          <h2 style={{ marginBottom: 10 }}>{company.name}</h2>
          <p>
            Voici votre lien de partage :
            <br />
            <a
              href={`/avis/${company.slug}`}
              target="_blank"
              style={{ color: "#4ade80", wordBreak: "break-all" }}
            >
              {`${window.location.origin}/avis/${company.slug}`}
            </a>
          </p>

          <FeedbackList companyId={company.id} />
        </div>
      ))}
    </div>
  );
}