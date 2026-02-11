"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";

export default function AvisPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [company, setCompany] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const fetchCompany = async () => {
      const { data } = await supabase
        .from("companies")
        .select("*")
        .eq("slug", slug)
        .single();

      setCompany(data);
    };

    fetchCompany();
  }, [slug]);

  const sendFeedback = async () => {
    await supabase.from("feedback").insert({
      company_id: company.id,
      comment,
    });

    setSent(true);
  };

  if (!company) return <div>Chargement...</div>;

  if (sent) {
    return (
      <div style={{ textAlign: "center", padding: 50 }}>
        <h2>Merci pour votre retour 🙏</h2>
        <p>Votre commentaire a été envoyé à l'entreprise.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 40,
          borderRadius: 10,
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          width: 400,
          textAlign: "center",
        }}
      >
        <h1>{company.name}</h1>
        <p>Êtes-vous satisfait de notre service ?</p>

        {!showForm && (
          <div style={{ marginTop: 20 }}>
            <button
              onClick={() =>
                window.location.href = company.google_review_url
              }
              style={{
                padding: 10,
                marginRight: 10,
                cursor: "pointer",
              }}
            >
              ✅ Oui
            </button>

            <button
              onClick={() => setShowForm(true)}
              style={{
                padding: 10,
                cursor: "pointer",
              }}
            >
              ❌ Non
            </button>
          </div>
        )}

        {showForm && (
          <div style={{ marginTop: 20 }}>
            <textarea
              placeholder="Expliquez-nous ce qui n'a pas bien été..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                width: "100%",
                height: 100,
                padding: 10,
              }}
            />
            <button
              onClick={sendFeedback}
              style={{
                marginTop: 10,
                padding: 10,
                cursor: "pointer",
                width: "100%",
              }}
            >
              Envoyer le commentaire
            </button>
          </div>
        )}
      </div>
    </div>
  );
}