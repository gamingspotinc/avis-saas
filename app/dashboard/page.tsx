"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { QRCodeCanvas } from "qrcode.react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

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
  const [range, setRange] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

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

      const now = new Date();
      const pastDate = new Date();
      pastDate.setDate(now.getDate() - range);

      const { data: feedbackData } = await supabase
        .from("feedback")
        .select("*")
        .eq("company_id", profile.company_id)
        .gte("created_at", pastDate.toISOString())
        .order("created_at", { ascending: true });

      setFeedbacks(feedbackData || []);
      setLoading(false);
    };

    loadData();
  }, [range]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (loading) return <p>Chargement...</p>;

  // ===== KPI CALCULS =====

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

  // ===== GRAPH DATA =====

  const groupedByDate: { [key: string]: number } = {};

  feedbacks.forEach((f) => {
    const date = new Date(f.created_at).toLocaleDateString();
    groupedByDate[date] = (groupedByDate[date] || 0) + 1;
  });

  const chartData = Object.entries(groupedByDate).map(
    ([date, count]) => ({
      date,
      total: count,
    })
  );

  const satisfactionData = [
    { name: "Positif", value: positives },
    { name: "Négatif", value: negatives },
  ];

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

      {/* FILTERS */}
      <div style={{ marginBottom: "30px" }}>
        <button onClick={() => setRange(7)}>7 jours</button>{" "}
        <button onClick={() => setRange(30)}>30 jours</button>{" "}
        <button onClick={() => setRange(90)}>90 jours</button>
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

      {/* GRAPH EVOLUTION */}
      <div style={{ height: 300, marginBottom: 60 }}>
        <h2>Évolution des avis</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* GRAPH SATISFACTION */}
      <div style={{ height: 300, marginBottom: 60 }}>
        <h2>Répartition satisfaction</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={satisfactionData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
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