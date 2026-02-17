"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PricingPage() {
  const router = useRouter();

  return (
    <main style={{ fontFamily: "sans-serif", paddingTop: "90px" }}>
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

      {/* PAGE CONTENT */}
      <div style={{ padding: "80px 20px" }}>
        {/* HEADER */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Tarification simple et stratégique
          </h1>
          <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "0 auto" }}>
            Investissez dans votre réputation. Choisissez le plan adapté à la
            croissance de votre entreprise.
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
          <div
            style={{
              backgroundColor: "#f8f9fb",
              padding: "40px",
              borderRadius: "16px",
              width: "300px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2>Essentiel</h2>
            <h3 style={{ fontSize: "2rem", margin: "20px 0" }}>49$/mois</h3>
            <p>Idéal pour démarrer.</p>

            <ul style={{ textAlign: "left", marginTop: "20px", lineHeight: 1.8 }}>
              <li>QR personnalisé</li>
              <li>Collecte d’avis illimitée</li>
              <li>Redirection Google</li>
              <li>Dashboard de base</li>
            </ul>

            <button
              onClick={() => router.push("/dashboard")}
              style={{
                marginTop: "30px",
                padding: "12px 30px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#111",
                color: "white",
              }}
            >
              Commencer
            </button>
          </div>

          {/* PRO (POPULAIRE) */}
          <div
            style={{
              backgroundColor: "#111",
              color: "white",
              padding: "50px",
              borderRadius: "16px",
              width: "320px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transform: "scale(1.05)",
            }}
          >
            <h2>Pro</h2>
            <p style={{ color: "#00ffcc", fontWeight: "bold" }}>
              ⭐ Le plus populaire
            </p>
            <h3 style={{ fontSize: "2.5rem", margin: "20px 0" }}>99$/mois</h3>

            <ul style={{ textAlign: "left", marginTop: "20px", lineHeight: 1.8 }}>
              <li>Toutes les fonctionnalités Essentiel</li>
              <li>Statistiques avancées</li>
              <li>Historique complet des clients</li>
              <li>Réévaluation après 7 jours</li>
              <li>Support prioritaire</li>
            </ul>

            <button
              onClick={() => router.push("/dashboard")}
              style={{
                marginTop: "30px",
                padding: "14px 35px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#00ffcc",
                color: "#111",
                fontWeight: "bold",
              }}
            >
              Protéger mon entreprise
            </button>
          </div>

          {/* ELITE */}
          <div
            style={{
              backgroundColor: "#f8f9fb",
              padding: "40px",
              borderRadius: "16px",
              width: "300px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2>Elite</h2>
            <h3 style={{ fontSize: "2rem", margin: "20px 0" }}>149$/mois</h3>
            <p>Pour entreprises ambitieuses.</p>

            <ul style={{ textAlign: "left", marginTop: "20px", lineHeight: 1.8 }}>
              <li>Toutes les fonctionnalités Pro</li>
              <li>Analyse stratégique avancée</li>
              <li>Rapports mensuels PDF</li>
              <li>Consultation stratégique</li>
            </ul>

            <button
              onClick={() => router.push("/dashboard")}
              style={{
                marginTop: "30px",
                padding: "12px 30px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#111",
                color: "white",
              }}
            >
              Commencer
            </button>
          </div>
        </section>

        {/* GARANTIE */}
        <section
          style={{
            marginTop: "80px",
            textAlign: "center",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2>Investissement sans risque</h2>
          <p style={{ fontSize: "1.1rem", marginTop: "20px" }}>
            Annulez à tout moment. Aucun engagement à long terme.
            Votre réputation mérite un système stratégique.
          </p>
        </section>
      </div>
    </main>
  );
}