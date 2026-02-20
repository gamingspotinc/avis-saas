"use client";

import Link from "next/link";

export default function HomePage() {
  const industries = [
    { name: "Restaurants", link: "/industries/restaurants" },
    { name: "Cliniques dentaires", link: "/industries/dentistes" },
    { name: "Cliniques esthétiques", link: "/industries/clinique-esthetique" },
    { name: "Garages automobiles", link: "/industries/garages" },
    { name: "Agences immobilières", link: "/industries/immobilier" },
    { name: "Salon de coiffure", link: "/industries/salon-coiffure" },
    { name: "Hotellerie", link: "/industries/hotellerie" },
    { name: "Service aux entreprises", link: "/industries/service-entreprises" },
    { name: "Travailleurs autonomes", link: "/industries/travailleurs-autonomes" },
    { name: "Autres secteurs", link: "/industries/autres-secteurs" },
  ];

  return (
    <main style={{ fontFamily: "sans-serif", overflowX: "hidden" }}>
      {/* HERO / IMAGES CAROUSEL */}
      <section style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        <div style={{
          display: "flex",
          width: "300%",
          animation: "slide 30s infinite linear"
        }}>
          {[
            "https://images.unsplash.com/photo-1588774069410-84ae30757c8e?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
          ].map((img, idx) => (
            <div key={idx} style={{ minWidth: "100%", height: "80vh", position: "relative" }}>
              <img
                src={img}
                alt={`Hero ${idx}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65))"
              }} />
            </div>
          ))}
        </div>

        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          maxWidth: "800px"
        }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Protégez votre réputation et développez vos revenus
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            AvisPME vous aide à collecter des avis positifs, gérer les insatisfactions et
            maximiser votre visibilité locale pour tous types d’entreprises.
          </p>
          <Link href="/start" style={{
            marginTop: "30px",
            display: "inline-block",
            padding: "14px 35px",
            backgroundColor: "#00ffcc",
            color: "#111",
            fontWeight: "bold",
            borderRadius: "10px",
            textDecoration: "none",
          }}>
            Commencer maintenant
          </Link>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section style={{ padding: "100px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "60px" }}>
          Fonctionnalités clés
        </h2>

        <div style={{ display: "grid", gap: "40px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <Feature title="Collecte intelligente d’avis" text="Redirige automatiquement les clients satisfaits vers Google." />
          <Feature title="Gestion des retours négatifs" text="Intercepte les insatisfactions avant qu’elles ne deviennent publiques." />
          <Feature title="Statistiques détaillées" text="Analysez vos performances en temps réel." />
          <Feature title="Multi-emplacements" text="Gérez plusieurs succursales à partir d’un seul dashboard." />
          <Feature title="Support prioritaire" text="Nous vous accompagnons dès que vous en avez besoin." />
        </div>
      </section>

      {/* INDUSTRIES DESSERVIES */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "60px" }}>
          Industries desservies
        </h2>

        <div style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", maxWidth: "1200px", margin: "0 auto" }}>
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href={ind.link}
              style={{
                padding: "25px",
                borderRadius: "12px",
                border: "1px solid #eee",
                textDecoration: "none",
                color: "#111",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.1rem",
                backgroundColor: "white",
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
              }}
            >
              {ind.name}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA MASSIF – Accès à tous les secteurs */}
      <section style={{
        padding: "120px 20px",
        background: "linear-gradient(90deg, #00ffcc 0%, #111 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Explorez tous les secteurs
        </h2>
        <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "0 auto 40px" }}>
          Peu importe votre industrie, AvisPME protège votre réputation et vous aide à croître.
          Accédez à tous les secteurs et découvrez comment nous pouvons vous aider.
        </p>
        <Link href="/industries" style={{
          padding: "14px 40px",
          backgroundColor: "white",
          color: "#111",
          fontWeight: "bold",
          borderRadius: "12px",
          fontSize: "1rem",
          textDecoration: "none"
        }}>
          Tous les secteurs
        </Link>
      </section>
    </main>
  );
}

/* COMPONENTS */
function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div style={{
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
      backgroundColor: "white"
    }}>
      <h3>{title}</h3>
      <p style={{ marginTop: "15px", color: "#555" }}>{text}</p>
    </div>
  );
}