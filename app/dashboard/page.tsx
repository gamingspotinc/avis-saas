"use client";

import { useState } from "react";

export default function DashboardPage() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <div style={{ marginBottom: 50 }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 700 }}>
          Tableau de bord
        </h1>
        <p style={{ color: "#666", marginTop: 10 }}>
          Analysez vos performances et gérez votre réputation en un seul endroit.
        </p>
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

      {/* QR + LIEN */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Votre QR Code</h2>

        <div
          style={{
            width: "160px",
            height: "160px",
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
          Lien public :{" "}
          <strong>avispm e.com/entreprise/demo</strong>
        </p>
      </div>

      {/* AVIS RÉCENTS */}
      <div style={{ ...sectionStyle, marginTop: 40 }}>
        <h2 style={sectionTitle}>Avis récents</h2>

        <Avis
          name="Jean Dupont"
          comment="Service excellent, très rapide."
          rating="⭐⭐⭐⭐⭐"
        />

        <Avis
          name="Marie Tremblay"
          comment="Bonne expérience générale."
          rating="⭐⭐⭐⭐"
        />

        <Avis
          name="Client anonyme"
          comment="Déçu du service client."
          rating="⭐⭐"
        />
      </div>
    </div>
  );
}

/* ===================== */
/* COMPONENTS */
/* ===================== */

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        border: "1px solid #f0f0f0",
      }}
    >
      <p style={{ color: "#666", fontSize: "0.95rem" }}>{title}</p>
      <h2 style={{ fontSize: "2rem", marginTop: 10 }}>{value}</h2>
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

/* ===================== */
/* STYLES */
/* ===================== */

const sectionStyle = {
  backgroundColor: "white",
  padding: "35px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
  border: "1px solid #f1f1f1",
};

const sectionTitle = {
  fontSize: "1.5rem",
  marginBottom: "20px",
};