"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  const cardData = [
    {
      title: "Analyse automatique des retours",
      image: "/analyse automatique.jpg",
      description: "Obtenez des rapports instantanés et automatiques de la satisfaction client.",
    },
    {
      title: "Questionnaires personnalisés",
      image: "/questionnaires personnalisés.jpg",
      description: "Créez et envoyez des questionnaires adaptés à vos clients.",
    },
    {
      title: "Réponses en temps réel",
      image: "/reponses en temps reel.jpg",
      description: "Recevez les avis et retours dès qu'ils sont soumis.",
    },
    {
      title: "Indicateurs de performance",
      image: "/indicateurs de performance.jpg",
      description: "Suivez vos KPIs et adaptez votre stratégie rapidement.",
    },
  ];

  const industries = [
    "Restaurants",
    "Cliniques dentaires",
    "Cliniques esthétiques",
    "Garages automobiles",
    "Agences immobilières",
    "Salons de coiffure",
    "Services aux entreprises",
    "Hotellerie",
    "Travailleurs autonomes",
    "Autres secteurs",
  ];

  const iconMap: Record<string, string> = {
    "Restaurants": "/icone/icone-restaurant.jpg",
    "Cliniques dentaires": "/icone/icone-cliniques dentaires.jpg",
    "Cliniques esthétiques": "/icone/icone-cliniques esthetique.jpg",
    "Garages automobiles": "/icone/icone-garage automobiles.jpg",
    "Agences immobilières": "/icone/icone-agence immobiliere.jpg",
    "Salons de coiffure": "/icone/icone-salon de coiffure.jpg",
    "Services aux entreprises": "/icone/icone-services aux entreprises.jpg",
    "Hotellerie": "/icone/icone-Hotellerie.jpg",
    "Travailleurs autonomes": "/icone/icone-travailleurs autonomes.jpg",
    "Autres secteurs": "/icone/icone-autres secteurs.jpg",
  };

  return (
    <main style={{ fontFamily: "sans-serif" }}>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "90vh",
          backgroundImage: "url('/principale.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "50px",
            borderRadius: "16px",
            maxWidth: "700px",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Protégez et développez votre réputation
          </h1>
          <p style={{ fontSize: "1.3rem" }}>
            Optimisez vos avis clients et transformez-les en croissance durable pour votre entreprise.
          </p>
        </div>
      </section>

      {/* 4 CARDS */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          marginTop: 80,
        }}
      >
        {cardData.map((card) => (
          <motion.div
            key={card.title}
            whileHover={{ scale: 1.05 }}
            style={{
              width: 250,
              padding: 20,
              backgroundColor: "#f8f9fb",
              borderRadius: 12,
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={80}
              height={80}
              style={{ marginBottom: 15 }}
            />
            <h3 style={{ fontSize: "1.2rem", marginBottom: 10 }}>{card.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>{card.description}</p>
          </motion.div>
        ))}
      </section>

      {/* SUIVI & SATISFACTION */}
      <section style={{ maxWidth: 1000, margin: "80px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 30 }}>
          Suivi et amélioration de la satisfaction client
        </h2>

        <ul style={{ marginLeft: 20, lineHeight: 1.5 }}>
          <li>Effectuez un suivi personnalisé de vos clients et adaptez vos services en fonction de leurs retours pour maximiser la satisfaction et fidélisation.</li>
          <li>Envoyez des questionnaires automatisés au moment optimal pour obtenir des rétroactions riches et précises.</li>
          <li>Programmez vos envois par courriel ou par SMS et recevez des notifications instantanées pour agir rapidement sur les retours insatisfaits.</li>
          <li>Suivez vos indicateurs clés comme NPS, CSAT, CES et prenez des décisions éclairées pour vos équipes et votre entreprise.</li>
          <li>Augmentez votre chiffre d’affaires en récoltant régulièrement des avis positifs et en optimisant votre réputation en ligne.</li>
          <li>Grâce à nos outils d’intelligence artificielle, automatisez vos réponses aux avis et gagnez du temps précieux.</li>
        </ul>
      </section>

      {/* AUTRES SECTIONS RESTENT INCHANGÉES */}
      {/* AUGMENTEZ VOS REVENUS */}
      <section style={{ backgroundColor: "#f0f4f8", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 30 }}>
          Obtenez davantage d’avis positifs et augmentez votre chiffre d’affaires
        </h2>
        <ul style={{ lineHeight: 1.8, marginLeft: 20 }}>
          <li>Les entreprises avec plus d’avis en ligne génèrent en moyenne 54% plus de revenus.</li>
          <li>Améliorez votre positionnement sur Google et soyez le premier choix pour vos clients.</li>
          <li>Répondez automatiquement aux avis grâce à notre IA pour économiser du temps et augmenter votre efficacité.</li>
          <li>Suivez l’évolution de votre réputation en ligne et mettez en place des stratégies de croissance.</li>
          <li>Automatisez l’envoi des demandes d’avis à vos clients satisfaits.</li>
          <li>Gérez vos avis de manière proactive pour ne jamais manquer une opportunité d’amélioration.</li>
        </ul>
      </section>

      {/* EXPÉRIENCE EMPLOYÉ */}
      <section style={{ maxWidth: 1000, margin: "80px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 30 }}>
          Des rétroactions pertinentes pour mieux évaluer vos équipes
        </h2>
        <ul style={{ lineHeight: 1.8, marginLeft: 20 }}>
          <li>Assurez le bien-être de vos équipes grâce à des questionnaires personnalisés.</li>
          <li>Prenez des décisions éclairées basées sur les réponses de votre personnel.</li>
          <li>Suivez la performance de chaque employé et ajustez vos stratégies en conséquence.</li>
          <li>Partagez les commentaires clients avec votre personnel pour motiver et responsabiliser.</li>
          <li>Reconnaissez vos employés pour leur bon travail et augmentez leur fidélité.</li>
        </ul>
      </section>

      {/* DEMO CTA */}
      <section style={{ backgroundColor: "#111", color: "white", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 30 }}>
          Offrez dès aujourd’hui une expérience client et employé à la hauteur de vos ambitions
        </h2>
        <p style={{ maxWidth: 600, margin: "0 auto 30px" }}>
          Découvrez tout ce qu’AvisPME peut apporter à votre entreprise lors d’une brève démonstration de 15 minutes, au moment de votre choix!
        </p>
        <button
          style={{
            backgroundColor: "#00ffcc",
            color: "#111",
            fontWeight: "bold",
            padding: "14px 30px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
          }}
        >
          Planifier ma démo gratuite
        </button>
      </section>

      {/* FOOTER INDUSTRIES AVEC ICONES */}
      <section style={{ backgroundColor: "#f8f9fb", padding: "60px 20px" }}>
        <h3 style={{ fontSize: "1.8rem", marginBottom: 30 }}>Découvrez tous nos secteurs</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          {industries.map((i) => (
            <a
              key={i}
              href={`/industries/${i.toLowerCase().replace(/ /g, "")}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 20px",
                backgroundColor: "white",
                borderRadius: 8,
                textDecoration: "none",
                color: "#111",
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
              }}
            >
              <Image
                src={iconMap[i]}
                alt={`Icône ${i}`}
                width={24}
                height={24}
                style={{ borderRadius: 4 }}
              />
              {i}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}