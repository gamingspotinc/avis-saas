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

      // Récupérer la PME associée au profil
      const { data: profileData } = await supabase
        .from("profiles")
        .select("company_id, companies(name, slug)")
        .eq("id", session.user.id)
        .single();

      if (profileData?.companies?.[0]) {
        const company = profileData.companies[0];
        setCompanyName(company.name);
        setCompanySlug(company.slug);

        // Récupérer les feedbacks
        const { data: fbData } = await supabase
          .from("feedback")
          .select("*")
          .eq("company_id", profileData.company_id)
          .order("created_at", { ascending: false });

        if (fbData) setFeedbacks(fbData);
      }

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
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <strong>Voici votre lien de partage :</strong>{" "}
          <span>{`${process.env.NEXT_PUBLIC_SITE_URL}/avis/${companySlug}`}</span>
        </div>
        <button onClick={handleLogout} style={{ padding: "6px 12px", cursor: "pointer" }}>
          Déconnexion
        </button>
      </div>

      <h2>Commentaires récents pour {companyName}</h2>
      {feedbacks.length === 0 && <p>Aucun commentaire pour l'instant.</p>}
      {feedbacks.map((f) => (
        <div key={f.id} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6, marginBottom: 12 }}>
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
  );
}