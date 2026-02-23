"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  satisfaction: string | null;
  created_at: string;
};

export default function DashboardPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const { data: sessionData } = await supabase.auth.getUser();

      const user = sessionData?.user;
      if (!user) return;

      // 1️⃣ Récupérer company_id du user
      const { data: profile } = await supabase
        .from("profiles")
        .select("company_id")
        .eq("id", user.id)
        .single();

      if (!profile) return;

      // 2️⃣ Charger feedback uniquement de cette company
      const { data: feedbackData } = await supabase
        .from("feedback")
        .select("*")
        .eq("company_id", profile.company_id)
        .order("created_at", { ascending: false });

      if (feedbackData) {
        setFeedbacks(feedbackData);
      }

      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) return <p>Chargement...</p>;

  /* ================= KPI CALCULS ================= */

  const totalAvis = feedbacks.length;

  const avisPositifs = feedbacks.filter(
    (f) => f.satisfaction === "yes"
  ).length;

  const tauxPositif =
    totalAvis > 0
      ? Math.round((avisPositifs / totalAvis) * 100)
      : 0;

  const avisRediriges = avisPositifs; // logique actuelle
  const alertesNegatives = feedbacks.filter(
    (f) => f.satisfaction === "no"
  ).length;

  /* ================= UI ================= */

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 40 }}>
        Tableau de bord
      </h1>

      {/* KPI */}
      <div
        style={{
          display: "grid",
          gap: 25,
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          marginBottom: 50,
        }}
      >
        <Card title="Avis reçus" value={totalAvis.toString()} />
        <Card title="Taux positif" value={`${tauxPositif}%`} />
        <Card title="Avis redirigés Google" value={avisRediriges.toString()} />
        <Card title="Alertes négatives" value={alertesNegatives.toString()} />
      </div>

      {/* LISTE AVIS */}
      <div style={sectionStyle}>
        <h2 style={{ marginBottom: 20 }}>Avis récents</h2>

        {feedbacks.length === 0 ? (
          <p>Aucun avis pour le moment.</p>
        ) : (
          feedbacks.map((f) => (
            <div
              key={f.id}
              style={{
                padding: "15px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <p>{f.comment}</p>
              <small style={{ color: "#666" }}>
                {new Date(f.created_at).toLocaleString()}
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ================= COMPONENT ================= */

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 25,
        borderRadius: 16,
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        border: "1px solid #f1f1f1",
      }}
    >
      <p style={{ color: "#666" }}>{title}</p>
      <h2 style={{ fontSize: "2rem", marginTop: 10 }}>{value}</h2>
    </div>
  );
}

const sectionStyle = {
  backgroundColor: "white",
  padding: 35,
  borderRadius: 18,
  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
  border: "1px solid #f1f1f1",
};