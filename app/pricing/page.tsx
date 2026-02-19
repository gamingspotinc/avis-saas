"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function PricingPage() {
  const router = useRouter();

  return (
    <main style={{ fontFamily: "sans-serif", padding: "80px 20px" }}>
      
      {/* HEADER */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Plans stratégiques
        </h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "0 auto" }}>
          Chaque entreprise est unique. Nos plans sont conçus pour accompagner
          votre croissance et protéger votre réputation à long terme.
        </p>
      </section>

      {/* PLANS */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* ESSENTIEL */}
        <div style={cardStyle}>
          <h2>Essentiel</h2>
          <p style={subtitleStyle}>Pour démarrer stratégiquement</p>

          <ul style={listStyle}>
            <li>QR personnalisé</li>
            <li>Collecte d’avis illimitée</li>
            <li>Redirection intelligente vers Google</li>
            <li>Dashboard simplifié</li>
          </ul>

          <button
            onClick={() => router.push("/start")}
            style={buttonStyle}
          >
            Demande d’accès
          </button>
        </div>

        {/* PRO */}
        <div style={{...cardStyle, backgroundColor: "#111", color: "white", transform: "scale(1.05)" as React.CSSProperties["transform"],}}>
          <h2>Pro</h2>
          <p style={{ ...subtitleStyle, color: "#00ffcc" }}>
            ⭐ Le plus populaire
          </p>

          <ul style={listStyle}>
            <li>Toutes les fonctionnalités Essentiel</li>
            <li>Statistiques avancées</li>
            <li>Historique client complet</li>
            <li>Réévaluation après 7 jours</li>
            <li>Support prioritaire</li>
          </ul>

          <button
            onClick={() => router.push("/start")}
            style={{
              ...buttonStyle,
              backgroundColor: "#00ffcc",
              color: "#111",
            }}
          >
            Protéger mon entreprise
          </button>
        </div>

        {/* ELITE */}
        <div style={cardStyle}>
          <h2>Elite</h2>
          <p style={subtitleStyle}>Pour entreprises ambitieuses</p>

          <ul style={listStyle}>
            <li>Toutes les fonctionnalités Pro</li>
            <li>Analyse stratégique avancée</li>
            <li>Rapports mensuels personnalisés</li>
            <li>Consultation stratégique dédiée</li>
          </ul>

          <button
            onClick={() => router.push("/start")}
            style={buttonStyle}
          >
            Demande d’accès
          </button>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          marginTop: "100px",
          textAlign: "center",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>Accès sur validation</h2>
        <p style={{ fontSize: "1.1rem", marginTop: "20px" }}>
          Nous travaillons uniquement avec des entreprises engagées
          à améliorer leur réputation et leur croissance.
        </p>
      </section>

    </main>
  );
}

const cardStyle: React.CSSProperties = {
  backgroundColor: "#f8f9fb",
  padding: "50px",
  borderRadius: "16px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const subtitleStyle = {
  marginTop: "10px",
  marginBottom: "25px",
  fontWeight: 500,
  color: "#555",
};

const listStyle = {
  textAlign: "left" as const,
  lineHeight: 1.8,
  marginBottom: "30px",
};

const buttonStyle = {
  padding: "12px 30px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#111",
  color: "white",
  fontWeight: "bold",
};