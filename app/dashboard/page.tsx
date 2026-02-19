"use client";

export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>
        Tableau de bord
      </h1>

      {/* KPI CARDS */}
      <div
        style={{
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          marginBottom: "60px",
        }}
      >
        <Card title="Avis reçus" value="124" />
        <Card title="Taux positif" value="92%" />
        <Card title="Avis redirigés Google" value="87" />
        <Card title="Alertes négatives" value="6" />
      </div>

      {/* QR SECTION */}
      <div style={boxStyle}>
        <h2 style={{ marginBottom: "20px" }}>Votre QR Code</h2>

        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            border: "1px solid #ddd",
          }}
        >
          QR
        </div>

        <p>
          Lien public :{" "}
          <strong>avispm e.com/entreprise/demo</strong>
        </p>
      </div>

      {/* AVIS RÉCENTS */}
      <div style={{ ...boxStyle, marginTop: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Avis récents</h2>

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

/* COMPONENTS */

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
        padding: "20px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <strong>{name}</strong>
      <p style={{ margin: "10px 0", color: "#555" }}>{comment}</p>
      <div>{rating}</div>
    </div>
  );
}

/* STYLE */

const boxStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};