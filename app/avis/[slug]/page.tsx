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

  if (loading) return <p style={{ color: "white" }}>Chargement...</p>;
  if (!company) return <p style={{ color: "white" }}>Entreprise introuvable.</p>;

  if (submitted)
    return (
      <div
        style={{
          backgroundImage: `url(/5stars.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow: "1px 1px 2px black",
        }}
      >
        <h2>Merci pour votre avis !</h2>
      </div>
    );

  return (
    <div
      style={{
        backgroundImage: `url(/5stars.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(5px)",
          padding: 30,
          borderRadius: 12,
          width: "90%",
          maxWidth: 500,
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: 20 }}>
          Avez-vous été satisfait du service reçu de la part de «{company.name}» ?
        </h1>

        {!satisfaction && (
          <div style={{ display: "flex", justifyContent: "center", gap: 30, marginTop: 20 }}>
            <button
              style={{ fontSize: 32, cursor: "pointer" }}
              onClick={() => {
                setSatisfaction("yes");
                setComment("Satisfait");
              }}
            >
              👍
            </button>
            <button
              style={{ fontSize: 32, cursor: "pointer" }}
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
              style={{ width: "100%", height: 100, marginBottom: 10, borderRadius: 6 }}
            />

            <h4>Vos informations pour un éventuel retour d'appel (optionnel)</h4>
            <input
              type="text"
              placeholder="Nom"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              style={{ width: "100%", marginBottom: 10, borderRadius: 6 }}
            />
            <input
              type="email"
              placeholder="Email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              style={{ width: "100%", marginBottom: 10, borderRadius: 6 }}
            />
            <input
              type="tel"
              placeholder="Téléphone"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              style={{ width: "100%", marginBottom: 10, borderRadius: 6 }}
            />

            <button
              onClick={handleSubmit}
              style={{ padding: "10px 20px", cursor: "pointer", marginTop: 10 }}
            >
              Envoyer
            </button>
          </div>
        )}

        {satisfaction === "yes" && (
          <div style={{ marginTop: 20 }}>
            <button
              onClick={handleSubmit}
              style={{ padding: "10px 20px", cursor: "pointer" }}
            >
              Confirmer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}