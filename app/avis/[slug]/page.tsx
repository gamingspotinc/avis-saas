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
        width: 420,
        textAlign: "center",
      }}
    >
      <h2>
        Avez-vous été satisfait du service reçu de la part de <br />
        <strong>« {company.name} »</strong> ?
      </h2>

      {!showForm && (
        <div style={{ marginTop: 30, display: "flex", justifyContent: "center", gap: 30 }}>
          <button
            onClick={() => (window.location.href = company.google_review_url)}
            style={{
              fontSize: 40,
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            👍
          </button>

          <button
            onClick={() => setShowForm(true)}
            style={{
              fontSize: 40,
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            👎
          </button>
        </div>
      )}

      {showForm && (
        <div style={{ marginTop: 25 }}>
          <textarea
            placeholder="Expliquez-nous ce qui n'a pas bien été..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{
              width: "100%",
              height: 100,
              padding: 10,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={sendFeedback}
            style={{
              marginTop: 15,
              padding: 10,
              cursor: "pointer",
              width: "100%",
              borderRadius: 6,
              border: "none",
              background: "#222",
              color: "white",
              fontWeight: "bold",
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