"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.8rem", fontWeight: 700 }}>
            Tableau de bord
          </h1>
          <p style={{ color: "#666", marginTop: 10 }}>
            Analysez vos performances et gérez votre réputation.
          </p>
        </div>

        {/* BOUTON DECONNEXION */}
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 18px",
            borderRadius: 8,
            border: "1px solid #ddd",
            backgroundColor: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Déconnexion
        </button>
      </div>

      {/* KPI CARDS */}
      <div
        style={{
          display: "grid",
          gap: "25px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          marginBottom: "60px",
        }}
      >
        <Card title="Avis reçus" value="124" />
        <Card title="Taux positif" value="92%" />
        <Card title="Avis redirigés Google" value="87" />
        <Card title="Alertes négatives" value="6" />
      </div>

      {/* QR SECTION */}
      <Section title="Votre QR Code">
        <div
          style={{
            width: 160,
            height: 160,
            backgroundColor: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            marginBottom: 20,
          }}
        >
          QR Code
        </div>

        <p style={{ color: "#555" }}>
          Lien public : <strong>avispm e.com/entreprise/demo</strong>
        </p>
      </Section>

      {/* AVIS */}
      <Section title="Avis récents">
        <Avis
          name="Jean Dupont"
          comment="Service excellent."
          rating="⭐⭐⭐⭐⭐"
        />
        <Avis
          name="Marie Tremblay"
          comment="Bonne expérience."
          rating="⭐⭐⭐⭐"
        />
      </Section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        border: "1px solid #f1f1f1",
      }}
    >
      <p style={{ color: "#666", fontSize: "0.95rem" }}>{title}</p>
      <h2 style={{ fontSize: "2rem", marginTop: 10 }}>{value}</h2>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
        border: "1px solid #f1f1f1",
        marginBottom: 40,
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: 20 }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function Avis({
  name,
  comment,
  rating,
}: {
  name: string;
  comment: string;
  rating: string;
}) {
  return (
    <div
      style={{
        padding: "18px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <strong>{name}</strong>
      <p style={{ margin: "8px 0", color: "#555" }}>{comment}</p>
      <div>{rating}</div>
    </div>
  );
}