"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          padding: "160px 20px 140px 20px",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "3.8rem", marginBottom: "30px", lineHeight: 1.2 }}>
          Transformez votre réputation
          <br /> en avantage concurrentiel.
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            color: "#555",
            maxWidth: "750px",
            margin: "0 auto 50px auto",
          }}
        >
          AvisPME protège les entreprises locales contre les avis publics
          dommageables et maximise les avis positifs sur Google.
        </p>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <Link
            href="/start"
            style={primaryButton}
          >
            Demande d’accès stratégique
          </Link>

          <Link
            href="/solution"
            style={secondaryButton}
          >
            Découvrir la solution
          </Link>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section
        style={{
          padding: "40px 20px",
          backgroundColor: "#f8f9fb",
          textAlign: "center",
          fontWeight: 500,
          color: "#444",
        }}
      >
        Conçu pour les entreprises locales ambitieuses.
        Protection proactive • Croissance durable • Image maîtrisée
      </section>

      {/* PROBLÈME → SOLUTION */}
      <section
        style={{
          padding: "120px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "60px" }}>
          Un seul avis négatif peut vous coûter des dizaines de clients.
        </h2>

        <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "750px", margin: "0 auto" }}>
          AvisPME intercepte les insatisfactions avant qu’elles ne deviennent publiques
          et transforme les expériences positives en visibilité stratégique.
        </p>
      </section>

      {/* INDUSTRIES */}
      <section
      id="industries"
      style={{
          padding: "120px 20px",
          backgroundColor: "#f8f9fb",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "70px" }}>
          Industries desservies
        </h2>

        <div
          style={{
            display: "grid",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {[
            "Restaurants",
            "Cliniques dentaires",
            "Garages automobiles",
            "Agences immobilières",
            "Salons de coiffure",
            "Centres de fitness",
          ].map((industry) => (
            <div key={industry} style={industryCard}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA FONCTIONNE */}
      <section
        style={{
          padding: "140px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "90px" }}>
          Comment ça fonctionne
        </h2>

        <div
          style={{
            display: "grid",
            gap: "50px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <Step
            number="1"
            title="Scan du QR"
            text="Le client partage son expérience en quelques secondes."
          />
          <Step
            number="2"
            title="Analyse intelligente"
            text="Les avis négatifs sont gérés en interne."
          />
          <Step
            number="3"
            title="Visibilité optimisée"
            text="Les avis positifs renforcent votre présence Google."
          />
        </div>
      </section>

      {/* STATISTICS BLOCK */}
      <section
        style={{
          padding: "120px 20px",
          backgroundColor: "#111",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "60px" }}>
          Les chiffres parlent d’eux-mêmes
        </h2>

        <div
          style={{
            display: "grid",
            gap: "40px",
            maxWidth: "900px",
            margin: "0 auto",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <Stat number="94%" text="des clients évitent une entreprise après un avis négatif." />
          <Stat number="44%" text="continuent d’interagir si l’entreprise répond." />
          <Stat number="83%" text="évitent une entreprise soupçonnée de faux avis." />
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          padding: "140px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>
          Votre réputation mérite un système stratégique.
        </h2>

        <Link href="/start" style={primaryButton}>
          Demander un accès
        </Link>
      </section>

    </main>
  );
}

/* COMPONENTS */

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div>
      <div style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
        {number}
      </div>
      <h3>{title}</h3>
      <p style={{ marginTop: "15px", color: "#555" }}>{text}</p>
    </div>
  );
}

function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <div style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
        {number}
      </div>
      <p style={{ opacity: 0.8 }}>{text}</p>
    </div>
  );
}

/* STYLES */

const primaryButton = {
  padding: "14px 35px",
  borderRadius: "8px",
  backgroundColor: "#111",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryButton = {
  padding: "14px 35px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  textDecoration: "none",
  color: "#111",
};

const industryCard = {
  padding: "35px",
  borderRadius: "16px",
  backgroundColor: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
};