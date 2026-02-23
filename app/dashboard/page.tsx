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
  const [range, setRange] = useState<number | "all">(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return setLoading(false);

      const { data: profile } = await supabase
        .from("profiles")
        .select("company_id")
        .eq("id", userData.user.id)
        .single();

      if (!profile) return setLoading(false);

      const { data: company } = await supabase
        .from("companies")
        .select("slug")
        .eq("id", profile.company_id)
        .single();

      setCompanySlug(company?.slug || null);

      let query = supabase
        .from("feedback")
        .select("*")
        .eq("company_id", profile.company_id)
        .order("created_at", { ascending: true });

      if (range !== "all") {
        const now = new Date();
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - range);
        query = query.gte("created_at", pastDate.toISOString());
      }

      const { data } = await query;
      setFeedbacks(data || []);
      setLoading(false);
    };

    loadData();
  }, [range]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (loading) return <p>Chargement...</p>;

  // ===== KPI =====

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

  const grouped: { [key: string]: number } = {};
  feedbacks.forEach((f) => {
    const date = new Date(f.created_at).toLocaleDateString();
    grouped[date] = (grouped[date] || 0) + 1;
  });

  const chartData = Object.entries(grouped).map(([date, count]) => ({
    date,
    total: count,
  }));

  const satisfactionData = [
    { name: "Positif", value: positives },
    { name: "Négatif", value: negatives },
  ];

  return (
    <div style={{ paddingBottom: 80 }}>

      {/* HERO PREMIUM */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          padding: 50,
          borderRadius: 25,
          color: "white",
          marginBottom: 40,
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.7rem", marginBottom: 15 }}>
            Tableau de bord
          </h1>
          <p style={{ opacity: 0.8 }}>
            Suivez vos performances et développez votre réputation.
          </p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            background: "white",
            color: "#0f172a",
            padding: "12px 25px",
            borderRadius: 12,
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
          }}
        >
          Déconnecter
        </button>
      </div>

      {/* QR SECTION */}
      {companySlug && (
        <div
          style={{
            background: "white",
            padding: 35,
            borderRadius: 25,
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 40,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <QRCodeCanvas value={publicUrl} size={140} />
          <div>
            <h2 style={{ marginBottom: 10 }}>Lien public à partager</h2>
            <p style={{ color: "#555", wordBreak: "break-all" }}>
              {publicUrl}
            </p>
          </div>
        </div>
      )}

      {/* FILTERS */}
      <div style={{ marginBottom: 30 }}>
        {["7", "30", "90", "all"].map((r) => (
          <button
            key={r}
            onClick={() =>
              setRange(r === "all" ? "all" : parseInt(r))
            }
            style={{
              marginRight: 10,
              padding: "8px 18px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              background:
                range === (r === "all" ? "all" : parseInt(r))
                  ? "#0f172a"
                  : "#e2e8f0",
              color:
                range === (r === "all" ? "all" : parseInt(r))
                  ? "white"
                  : "#111",
            }}
          >
            {r === "all" ? "Tout" : `${r} jours`}
          </button>
        ))}
      </div>

      {/* KPI */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 25,
          marginBottom: 40,
        }}
      >
        <Card title="Avis reçus" value={total.toString()} />
        <Card title="Taux positif" value={`${positiveRate}%`} />
        <Card title="Redirections Google" value={redirected.toString()} />
        <Card title="Avis négatifs" value={negatives.toString()} />
      </div>

      {/* GRAPHS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 30,
          marginBottom: 50,
        }}
      >
        <div style={{ height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="date" hide />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={satisfactionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AVIS RÉCENTS */}
      <div
        style={{
          background: "white",
          padding: 35,
          borderRadius: 25,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ marginBottom: 20 }}>Avis récents</h2>

        {feedbacks.length === 0 && <p>Aucun avis.</p>}

        {feedbacks
          .slice()
          .reverse()
          .slice(0, 5)
          .map((avis) => (
            <div
              key={avis.id}
              style={{
                padding: "15px 0",
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

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        background: "white",
        padding: 25,
        borderRadius: 20,
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ color: "#64748b" }}>{title}</p>
      <h2 style={{ fontSize: "2rem" }}>{value}</h2>
    </div>
  );
}