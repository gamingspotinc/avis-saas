"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { QRCodeCanvas } from "qrcode.react";

type Feedback = {
  id: string;
  comment: string;
  satisfaction: string | null;
  google_redirect: boolean | null;
  created_at: string;
};

export default function DashboardPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [companySlug, setCompanySlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("company_id")
        .eq("id", userData.user.id)
        .single();

      if (!profile) {
        setLoading(false);
        return;
      }

      const { data: company } = await supabase
        .from("companies")
        .select("slug")
        .eq("id", profile.company_id)
        .single();

      setCompanySlug(company?.slug || null);

      const { data: feedbackData } = await supabase
        .from("feedback")
        .select("*")
        .eq("company_id", profile.company_id)
        .order("created_at", { ascending: false });

      setFeedbacks(feedbackData || []);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (loading) return <p>Chargement...</p>;

  // KPI
  const total = feedbacks.length;
  const positives = feedbacks.filter(
    (f) => f.satisfaction === "positive"
  ).length;
  const negatives = feedbacks.filter(
    (f) => f.satisfaction === "negative"
  ).length;
  const redirected = feedbacks.filter(
    (f) => f.google_redirect === true
  ).length;

  const positiveRate =
    total > 0 ? Math.round((positives / total) * 100) : 0;

  const publicUrl = companySlug
    ? `https://avis-saas-xi.vercel.app/avis/${companySlug}`
    : "";

  return (
    <div>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem" }}>Tableau de bord</h1>

        <button
          onClick={handleLogout}
          style={{
            background: "#111",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Déconnecter
        </button>
      </div>

      {/* KPI */}
      <div
        style={{
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          marginBottom: "60px",
        }}
      >
        <Card title="Avis reçus" value={total.toString()} />
        <Card title="Taux positif" value={`${positiveRate}%`} />
        <Card title="Avis redirigés Google" value={redirected.toString()} />
        <Card title="Alertes négatives" value={negatives.toString()} />
      </div>

      {/* QR SECTION */}
      {companySlug && (
        <div style={boxStyle}>
          <h2 style={{ marginBottom: "20px" }}>Votre QR Code</h2>

          <QRCodeCanvas value={publicUrl} size={150} />

          <p style={{ marginTop: "20px" }}>
            Lien public : <strong>{publicUrl}</strong>
          </p>
        </div>
      )}

      {/* AVIS RÉCENTS */}
      <div style={{ ...boxStyle, marginTop: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Avis récents</h2>

        {feedbacks.length === 0 && <p>Aucun avis pour le moment.</p>}

        {feedbacks.slice(0, 5).map((avis) => (
          <div
            key={avis.id}
            style={{
              padding: "20px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <p>{avis.comment}</p>
            <strong>
              {avis.satisfaction === "positive"
                ? "😊 Positif"
                : avis.satisfaction === "negative"
                ? "⚠️ Négatif"
                : "Neutre"}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}

/* COMPONENT */

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ color: "#555" }}>{title}</p>
      <h2 style={{ fontSize: "2rem", marginTop: "10px" }}>{value}</h2>
    </div>
  );
}

const boxStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};