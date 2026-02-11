"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";

export default function AvisPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [company, setCompany] = useState<any>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSatisfied = () => {
    // Redirige vers Google (ou autre page avis)
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      company.name
    )}`;
  };

  const handleNotSatisfied = async () => {
    if (!comment.trim()) return;

    const { error } = await supabase.from("comments").insert([
      {
        content: comment,
        company_id: company.id,
        created_at: new Date().toISOString(),
      },
    ]);

    if (!error) {
      setSubmitted(true);
      setComment("");
      alert("Merci pour votre commentaire !");
    }
  };

  if (!company) return <div>Loading...</div>;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1>Laisser un avis pour {company.name}</h1>

      {/* Boutons Satisfait / Non satisfait */}
      <div style={{ marginTop: 20, marginBottom: 20, display: "flex", gap: 20 }}>
        <button
          onClick={handleSatisfied}
          style={{
            padding: "10px 20px",
            borderRadius: 5,
            border: "none",
            backgroundColor: "green",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Satisfait
        </button>

        <button
          onClick={() => setSubmitted(false)}
          style={{
            padding: "10px 20px",
            borderRadius: 5,
            border: "none",
            backgroundColor: "red",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Non satisfait
        </button>
      </div>

      {/* Formulaire pour commentaire si Non satisfait */}
      {!submitted && (
        <div style={{ width: "50%", display: "flex", flexDirection: "column", gap: 10 }}>
          <textarea
            placeholder="Écrire votre commentaire"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            style={{ padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
          />
          <button
            onClick={handleNotSatisfied}
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#000",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Envoyer le commentaire
          </button>
        </div>
      )}

      {submitted && <p>Merci pour votre retour !</p>}
    </div>
  );
}