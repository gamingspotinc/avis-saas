"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import FeedbackList from "@/components/FeedbackList";
import { useRouter } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";

type Company = {
  id: string;
  name: string;
  slug: string;
};

export default function DashboardPage() {
  const [company, setCompany] = useState<Company | null>(null);

  const [stats, setStats] = useState({
    total: 0,
    positive: 0,
    negative: 0,
  });

  const router = useRouter();
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCompany = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("companies")
        .select("id, name, slug")
        .eq("owner_id", user.id)
        .single();

      if (error || !data) {
        console.error(error);
        return;
      }

      setCompany(data);

      const { data: feedbacks } = await supabase
        .from("feedback")
        .select("satisfaction")
        .eq("company_id", data.id);

      if (feedbacks) {
       const total = feedbacks.length;
        const positive = feedbacks.filter(
       (f) => f.satisfaction?.toLowerCase() === "yes"
     ).length;
       const negative = feedbacks.filter(
      (f) => f.satisfaction?.toLowerCase() === "no"
     ).length;

  setStats({ total, positive, negative });
}
    };

    loadCompany();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code-avis.png";
    link.click();
  };

  if (!company) return <p style={{ padding: 30 }}>Chargement...</p>;

  const shareUrl = `https://avis-saas-xi.vercel.app/avis/${company.slug}`;

  const satisfactionRate =
    stats.total > 0
      ? Math.round((stats.positive / stats.total) * 100)
      : 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 40,
        fontFamily: "sans-serif",
        background: "#111",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <h1 style={{ fontSize: "28px" }}>
          Dashboard {company.name}
        </h1>

        <button
          onClick={handleLogout}
          style={{
            background: "#000",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            border: "1px solid #444",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Déconnecter
        </button>
      </div>

      {/* ✅ SECTION HAUT : QR À GAUCHE / STATS À DROITE */}
      <div
        style={{
          display: "flex",
          gap: 30,
          marginBottom: 30,
          flexWrap: "wrap",
        }}
      >
        {/* LIEN + QR */}
        <div
          style={{
            flex: 1,
            minWidth: 300,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            padding: 25,
            borderRadius: 12,
            border: "1px solid #333",
          }}
        >
          <h2>Votre lien de partage</h2>

          <a
            href={shareUrl}
            target="_blank"
            style={{
              color: "#4da6ff",
              fontSize: 16,
              wordBreak: "break-all",
            }}
          >
            {shareUrl}
          </a>

          <div style={{ marginTop: 25, textAlign: "center" }}>
            <QRCodeCanvas value={shareUrl} size={200} level="H" />
          </div>

          <button
            onClick={downloadQR}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              borderRadius: 6,
              border: "1px solid #444",
              background: "#000",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Télécharger le QR Code
          </button>
        </div>

        {/* STATISTIQUES */}
        <div
          style={{
            flex: 1,
            minWidth: 300,
            background: "rgba(0,0,0,0.7)",
            padding: 25,
            borderRadius: 12,
            border: "1px solid #333",
          }}
        >
          <h2>Statistiques</h2>

          <div style={{ fontSize: 22, marginTop: 15 }}>
            Avis totaux : <b>{stats.total}</b>
          </div>

          <div
            style={{
              fontSize: 32,
              color: satisfactionRate >= 70 ? "#4CAF50" : "#ff4d4d",
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            {satisfactionRate}%
          </div>

          <div style={{ marginTop: 10, color: "#aaa" }}>
            👍 {stats.positive} positifs
          </div>

          <div style={{ marginTop: 5, color: "#aaa" }}>
            👎 {stats.negative} négatifs
          </div>
        </div>
      </div>

      {/* COMMENTAIRES */}
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
          padding: 25,
          borderRadius: 12,
          border: "1px solid #333",
        }}
      >
        <h2>Commentaires reçus</h2>
        <FeedbackList companyId={company.id} />
      </div>
    </div>
  );
}