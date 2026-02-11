"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";

type Company = {
  id: string;
  name: string;
  slug: string;
};

export default function AvisPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [satisfaction, setSatisfaction] = useState<"yes" | "no" | null>(null);
  const [comment, setComment] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchCompany = async () => {
      const { data } = await supabase
        .from("companies")
        .select("*")
        .eq("slug", slug)
        .single();

      setCompany(data);
      setLoading(false);
    };

    fetchCompany();
  }, [slug]);

  const handleSubmit = async () => {
    if (!company) return;

    await supabase.from("feedback").insert({
      company_id: company.id,
      comment: comment || (satisfaction === "yes" ? "Satisfait" : "Non satisfait"),
      client_name: clientName || null,
      client_email: clientEmail || null,
      client_phone: clientPhone || null,
    });

    setSubmitted(true);
  };

  if (loading) return <p>Chargement...</p>;
  if (!company) return <p>Entreprise introuvable.</p>;

  if (submitted)
    return <p>Merci pour votre avis !</p>;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", maxWidth: 600, margin: "0 auto" }}>
      <h1>Avez-vous été satisfait du service reçu de la part de «{company.name}» ?</h1>

      {!satisfaction && (
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <button
            style={{ fontSize: 24, cursor: "pointer" }}
            onClick={() => {
              setSatisfaction("yes");
              setComment("Satisfait");
            }}
          >
            👍
          </button>
          <button
            style={{ fontSize: 24, cursor: "pointer" }}
            onClick={() => setSatisfaction("no")}
          >
            👎
          </button>
        </div>
      )}

      {satisfaction === "no" && (
        <div style={{ marginTop: 20 }}>
          <textarea
            placeholder="Laissez un commentaire..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: "100%", height: 100, marginBottom: 10 }}
          />

          <h4>Vos informations pour un éventuel retour d'appel (optionnel)</h4>
          <input
            type="text"
            placeholder="Nom"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            style={{ width: "100%", marginBottom: 10 }}
          />
          <input
            type="email"
            placeholder="Email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            style={{ width: "100%", marginBottom: 10 }}
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            style={{ width: "100%", marginBottom: 10 }}
          />

          <button onClick={handleSubmit} style={{ padding: "10px 20px", cursor: "pointer" }}>
            Envoyer
          </button>
        </div>
      )}

      {satisfaction === "yes" && (
        <div style={{ marginTop: 20 }}>
          <button onClick={handleSubmit} style={{ padding: "10px 20px", cursor: "pointer" }}>
            Confirmer
          </button>
        </div>
      )}
    </div>
  );
}
