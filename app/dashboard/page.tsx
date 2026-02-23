"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  satisfaction: string | null;
  google_redirect: boolean | null;
  created_at: string;
};

export default function DashboardPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
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

  if (loading) return <p>Chargement...</p>;

  // ===== CALCULS KPI =====

  const total = feedbacks.length;

  const positives = feedbacks.filter(
    (f) => f.satisfaction === "positive"
  ).length;

  const positiveRate =
    total > 0 ? Math.round((positives / total) * 100) : 0;

  const redirected = feedbacks.filter(
    (f) => f.google_redirect === true
  ).length;

  const negatives = feedbacks.filter(
    (f) => f.satisfaction === "negative"
  ).length;

  return (
    <div>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>
        Tableau de bord
      </h1>

      {/* KPI CARDS */}
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

      {/* AVIS RÉCENTS */}
      <div style={boxStyle}>
        <h2 style={{ marginBottom: "20px" }}>Avis récents</h2>

        {feedbacks.length === 0 && <p>Aucun avis pour le moment.</p>}

        {feedbacks.slice(0, 5).map((avis) => (
          <Avis
            key={avis.id}
            comment={avis.comment}
            satisfaction={avis.satisfaction}
          />
        ))}
      </div>
    </div>
  );
}

/* COMPONENTS */

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

function Avis({
  comment,
  satisfaction,
}: {
  comment: string;
  satisfaction: string | null;
}) {
  return (
    <div
      style={{
        padding: "20px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <p style={{ marginBottom: "10px" }}>{comment}</p>
      <strong>
        {satisfaction === "positive"
          ? "😊 Positif"
          : satisfaction === "negative"
          ? "⚠️ Négatif"
          : "Neutre"}
      </strong>
    </div>
  );
}

const boxStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};