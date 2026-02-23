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

  // Graph data
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
    <div style={{ paddingBottom: 60 }}>
      {/* HEADER PREMIUM */}
      <div
        style={{
          background: "linear-gradient(135deg, #111, #333)",
          color: "white",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: 10 }}>
            Tableau de bord
          </h1>
          <p style={{ opacity: 0.8 }}>
            Analysez et développez votre réputation en ligne.
          </p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            background: "white",
            color: "#111",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Déconnecter
        </button>
      </div>

      {/* QR + LINK EN HAUT */}
      {companySlug && (
        <div
          style={{
            background: "white",
            padding: 30,
            borderRadius: 20,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <QRCodeCanvas value={publicUrl} size={130} />
          <div>
            <h2 style={{ marginBottom: 10 }}>Lien public</h2>
            <p style={{ wordBreak: "break-all" }}>{publicUrl}</p>
          </div>
        </div>
      )}

      {/* FILTERS */}
      <div style={{ marginBottom: 30 }}>
        <FilterButton label="7 jours" onClick={() => setRange(7)} />
        <FilterButton label="30 jours" onClick={() => setRange(30)} />
        <FilterButton label="90 jours" onClick={() => setRange(90)} />
        <FilterButton label="Tout" onClick={() => setRange("all")} />
      </div>

      {/* KPI */}
      <div
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          marginBottom: 40,
        }}
      >
        <Card title="Avis reçus" value={total.toString()} />
        <Card title="Taux positif" value={`${positiveRate}%`} />
        <Card title="Redirections Google" value={redirected.toString()} />
        <Card title="Avis négatifs" value={negatives.toString()} />
      </div>

      {/* GRAPHS COMPACT */}
      <div
        style={{
          display: "grid",
          gap: 30,
          gridTemplateColumns: "1fr 1fr",
          marginBottom: 50,
        }}
      >
        <div style={{ height: 250 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="date" hide />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ height: 250 }}>
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

      {/* AVIS EN BAS */}
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 20,
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

/* COMPONENTS */

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 15,
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ color: "#777" }}>{title}</p>
      <h2 style={{ fontSize: "1.8rem" }}>{value}</h2>
    </div>
  );
}

function FilterButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        marginRight: 10,
        padding: "8px 15px",
        borderRadius: 8,
        background: "#111",
        color: "white",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}