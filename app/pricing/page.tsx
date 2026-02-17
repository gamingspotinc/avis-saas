"use client";

import Link from "next/link";

export default function PricingPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111", paddingTop: "90px" }}>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.95)",
          color: "white",
          zIndex: 1000,
        }}
      >
        <h3 style={{ margin: 0 }}>AvisPME</h3>

        <div style={{ display: "flex", gap: "25px" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Accueil
          </Link>

          <Link href="/pricing" style={{ color: "white", textDecoration: "none" }}>
            Tarifs
          </Link>

          <Link href="/start" style={{ color: "white", textDecoration: "none" }}>
            Demande d’accès
          </Link>
        </div>
      </nav>

      {/* HERO / PRICING */}
      <section
        style={{
          padding: "140px 20px 80px 20px",
          textAlign: "center",
          backgroundColor: "#f8f9fb",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "40px" }}>
          Nos Tarifs
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* PLAN BASIC */}
          <div style={planBoxStyle}>
            <h2>Basic</h2>
            <p style={{ fontSize: "2rem", margin: "10px 0" }}>$50 / mois</p>
            <ul style={{ textAlign: "left" }}>
              <li>Collecte illimitée d’avis</li>
              <li>Dashboard simple</li>
              <li>QR personnalisé</li>
            </ul>
            <button style={planBtnStyle}>Demander l’accès</button>
          </div>

          {/* PLAN PRO */}
          <div style={planBoxStyle}>
            <h2>Pro</h2>
            <p style={{ fontSize: "2rem", margin: "10px 0" }}>$100 / mois</p>
            <ul style={{ textAlign: "left" }}>
              <li>Tout le Basic</li>
              <li>Statistiques avancées</li>
              <li>Support prioritaire</li>
            </ul>
            <button style={planBtnStyle}>Demander l’accès</button>
          </div>

          {/* PLAN PREMIUM */}
          <div style={planBoxStyle}>
            <h2>Premium</h2>
            <p style={{ fontSize: "2rem", margin: "10px 0" }}>$200 / mois</p>
            <ul style={{ textAlign: "left" }}>
              <li>Tout le Pro</li>
              <li>Gestion multi-locations</li>
              <li>Email automatique & alertes</li>
            </ul>
            <button style={planBtnStyle}>Demander l’accès</button>
          </div>
        </div>
      </section>
    </main>
  );
}

const planBoxStyle = {
  backgroundColor: "white",
  padding: "35px",
  borderRadius: "18px",
  maxWidth: "250px",
  width: "100%",
  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
};

const planBtnStyle = {
  marginTop: "15px",
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#111",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};