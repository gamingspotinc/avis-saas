"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AvisPage({ params }: { params: { slug: string } }) {
  const [company, setCompany] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchCompany = async () => {
      const { data } = await supabase
        .from("companies")
        .select("*")
        .eq("slug", params.slug)
        .single();

      setCompany(data);
    };

    fetchCompany();
  }, [params.slug]);

  const sendFeedback = async () => {
    if (!comment) return;

    await supabase.from("feedback").insert({
      company_id: company.id,
      comment,
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
    });

    setSent(true);
  };

  if (!company) return <p>Chargement...</p>;

  if (sent)
    return (
      <div style={{ textAlign: "center", marginTop: 80 }}>
        <h2>Merci pour votre retour 🙏</h2>
        <p>La PME pourra vous recontacter si vous avez laissé vos coordonnées.</p>
      </div>
    );

  return (
    <div style={{ textAlign: "center", marginTop: 80, padding: 20 }}>
      <h1>
        Avez-vous été satisfait du service reçu de la part de « {company.name} »
        ?
      </h1>

      <div style={{ marginTop: 40 }}>
        <button
          onClick={() => window.location.href = company.google_review_url}
          style={{
            fontSize: 60,
            marginRight: 40,
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
            fontSize: 60,
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        >
          👎
        </button>
      </div>

      {showForm && (
        <div style={{ marginTop: 30, maxWidth: 500, marginInline: "auto" }}>
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

          <p style={{ marginTop: 15, fontWeight: "bold" }}>
            Laissez vos coordonnées (optionnel) pour un retour d'appel :
          </p>

          <input
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 8 }}
          />

          <input
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 8 }}
          />

          <input
            placeholder="Votre téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 8 }}
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
  );
}