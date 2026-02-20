"use client";

import React from "react";

export default function HomePage() {
  const features = [
    {
      title: "Analyse automatique des retours",
      text: "Obtenez des rapports instantanés et automatiques de la satisfaction client.",
      image: "/images/analytics.png", // à remplacer si tu mets tes propres images
    },
    {
      title: "Questionnaires personnalisés",
      text: "Créez et envoyez des questionnaires adaptés à vos clients.",
      image: "/images/questionnaire.png",
    },
    {
      title: "Réponses en temps réel",
      text: "Recevez les avis et retours dès qu'ils sont soumis.",
      image: "/images/realtime.png",
    },
    {
      title: "Indicateurs de performance",
      text: "Suivez vos KPIs et adaptez votre stratégie rapidement.",
      image: "/images/kpi.png",
    },
  ];

  return (
    <main style={{ fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "90vh",
          background:
            "url('https://images.unsplash.com/photo-1521790360280-3b3e2b5e9b6f?auto=format&fit=crop&w=1950&q=80') center/cover no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700 }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Protégez et développez votre réputation
          </h1>
          <p style={{ fontSize: "1.3rem", marginBottom: "25px" }}>
            Avec notre solution, fidélisez vos clients et optimisez votre expérience client.
          </p>
          <button
            style={{
              padding: "12px 30px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#111",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Planifier ma démo gratuite
          </button>
        </div>
      </section>

      {/* 4 FEATURES CARDS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {features.map((card) => (
          <div
            key={card.title}
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "30px 20px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{ width: 80, height: 80, marginBottom: 15 }}
            />
            <h3 style={{ marginBottom: 10 }}>{card.title}</h3>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>{card.text}</p>
          </div>
        ))}
      </section>

      {/* CONTENT SECTIONS */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
        <h2>Suivi et amélioration de la satisfaction client</h2>
        <p>
          Effectuez un suivi personnalisé de vos clients et adaptez vos services
          en fonction de leurs retours pour maximiser la satisfaction et fidélisation.
        </p>
        <p>
          Envoyez des questionnaires automatisés au moment optimal pour obtenir
          des rétroactions riches et précises.
        </p>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
        <h2>Obtenez davantage d’avis positifs et augmentez votre chiffre d’affaires</h2>
        <p>
          Saviez-vous que les entreprises ayant plus d’avis en ligne génèrent en moyenne 54% plus de revenus?
          Grâce à notre logiciel de satisfaction client dans le domaine de la santé et du bien-être, augmentez votre chiffre d’affaires en attirant de nouveaux clients!
        </p>

        <h3>Améliorez votre positionnement dans les moteurs de recherche</h3>
        <p>
          Récoltez plus d’avis que vos concurrents afin d’être le meilleur choix pour Google et vos clients potentiels.
        </p>

        <h3>Sauvez du temps grâce à l’automatisation</h3>
        <p>
          Avec notre générateur intelligent de réponses aux avis basé sur IA, répondez de manière appropriée et automatisée aux avis clients.
        </p>

        <h3>Suivez l’évolution de votre réputation en ligne</h3>
        <p>
          Nos rapports mensuels permettent de surveiller vos métriques d’avis en ligne et d’optimiser votre réputation.
        </p>

        <h3>Récoltez régulièrement des avis positifs</h3>
        <p>
          Automatisez vos demandes d’avis pour chaque client satisfait répondant à un questionnaire.
        </p>

        <h3>Gérez vos avis en ligne de manière proactive</h3>
        <p>
          Voyez les avis non répondus, répondez directement sur la plateforme, et économisez des heures de gestion.
        </p>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
        <h2>Assurez le bien-être de votre personnel</h2>
        <p>
          Vos équipes se sentiront considérées et seront plus à l’aise de vous partager leur véritable opinion.
        </p>
        <p>
          Envoyez des questionnaires pour connaître l’avis de la majorité et prenez des décisions éclairées.
        </p>
        <p>
          Reconnaissez vos employés pour leur bon travail, responsabilisez-les et assurez l’amélioration continue de vos services.
        </p>
      </section>
    </main>
  );
}