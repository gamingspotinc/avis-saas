"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [company, setCompany] = useState<any>(null);
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);

      const { data: company } = await supabase
        .from("companies")
        .select("*")
        .eq("user_id", user.id)
        .single();

      setCompany(company);

      const { data: feedbacks } = await supabase
        .from("feedback")
        .select("*")
        .eq("company_id", company.id)
        .order("created_at", { ascending: false });

      setFeedbacks(feedbacks || []);
    };

    load();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!company) return <p>Chargement...</p>;

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong>Voici votre lien de partage :</strong>
          <div style={{ marginTop: 5 }}>
            <a
              href={`${window.location.origin}/avis/${company.slug}`}
              target="_blank"
            >
              {window.location.origin}/avis/{company.slug}
            </a>
          </div>
        </div>

        <button onClick={logout}>Déconnexion</button>
      </div>

      {/* Feedbacks */}
      <h2 style={{ textAlign: "center", marginTop: 50 }}>
        Commentaires reçus
      </h2>

      <div style={{ maxWidth: 700, margin: "40px auto" }}>
        {feedbacks.length === 0 && <p>Aucun commentaire pour le moment.</p>}

        {feedbacks.map((f) => (
          <div
            key={f.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 15,
              marginBottom: 20,
              background: "#fafafa",
            }}
          >
            <p><strong>Commentaire :</strong> {f.comment}</p>

            {(f.customer_name || f.customer_email || f.customer_phone) && (
              <div style={{ marginTop: 10, fontSize: 14 }}>
                <strong>Coordonnées laissées par le client :</strong>
                <p>Nom : {f.customer_name || "-"}</p>
                <p>Email : {f.customer_email || "-"}</p>
                <p>Téléphone : {f.customer_phone || "-"}</p>
              </div>
            )}

            <small>
              {new Date(f.created_at).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}