"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Protégez et développez votre réputation
          </h1>
          <p style={{ fontSize: "1.3rem", maxWidth: "600px", margin: "0 auto" }}>
            Collectez facilement les avis de vos clients, transformez les retours
            négatifs en opportunités et augmentez vos revenus grâce à notre
            solution intelligente.
          </p>
          <Link
            href="/start"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "14px 30px",
              borderRadius: "8px",
              backgroundColor: "#00ffcc",
              color: "#111",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Commencer maintenant
          </Link>
        </motion.div>
      </section>

      {/* SATISFACTION CLIENT */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "50px", textAlign: "center" }}>
          Suivi et amélioration de la satisfaction client
        </h2>

        <FeatureGrid />
      </section>

      {/* CTA DEMO */}
      <section
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Offrez dès aujourd’hui une expérience client et employé à la hauteur de vos ambitions
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 30px", fontSize: "1.1rem" }}>
          Découvrez tout ce qu’AvisPME peut apporter à votre entreprise lors d’une brève
          démonstration de 15 minutes, au moment de votre choix!
        </p>
        <Link
          href="/start"
          style={{
            display: "inline-block",
            padding: "14px 30px",
            borderRadius: "8px",
            backgroundColor: "#00ffcc",
            color: "#111",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Planifier ma démo gratuite
        </Link>
      </section>

      {/* INDUSTRIES EN BAS */}
      <section
        style={{
          backgroundColor: "#f8f9fb",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "50px" }}>
          Secteurs que nous desservons
        </h2>

        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "25px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            "Restaurants",
            "Cliniques dentaires",
            "Clinique esthétique",
            "Garage automobiles",
            "Agences immobilières",
            "Salon de coiffure",
            "Hotellerie",
            "Service aux entreprises",
            "Travailleur autonome",
            "Autres secteurs",
          ].map((sector) => (
            <Link
              key={sector}
              href={`/industries/${sector.toLowerCase().replace(/ /g, "")}`}
              style={{
                padding: "15px 20px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                backgroundColor: "white",
                textDecoration: "none",
                color: "#111",
                fontWeight: "bold",
                transition: "0.3s",
              }}
            >
              {sector}
            </Link>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

/* FEATURE GRID AVEC ANIMATION AU SCROLL */
function FeatureGrid() {
  const features = [
    {
      title: "Analyse automatique des retours",
      text: "Notre solution suit la satisfaction de vos clients et vous aide à adapter vos services rapidement.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4431d8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Questionnaires personnalisés",
      text: "Envoyez des questionnaires par SMS ou email au moment idéal pour obtenir des retours précis et exploitables.",
      image: "https://images.unsplash.com/photo-1603570413476-1e5c8f1547f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Réponses en temps réel",
      text: "Recevez des notifications immédiates lorsque des clients laissent des avis négatifs et intervenez rapidement.",
      image: "https://images.unsplash.com/photo-1611599532643-f756d7b612f0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Indicateurs de performance",
      text: "Suivez vos KPIs essentiels comme NPS, CSAT et CES pour prendre des décisions éclairées et améliorer l’expérience client.",
      image: "https://images.unsplash.com/photo-1604079621317-08c0b1cf5c1d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div style={{ display: "grid", gap: "40px" }}>
      {features.map((feature, idx) => (
        <AnimatedFeature
          key={idx}
          title={feature.title}
          text={feature.text}
          image={feature.image}
        />
      ))}
    </div>
  );
}

function AnimatedFeature({ title, text, image }: { title: string; text: string; image: string }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "200px", height: "150px", borderRadius: "12px", objectFit: "cover" }}
      />
      <div>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{title}</h3>
        <p style={{ color: "#555" }}>{text}</p>
      </div>
    </motion.div>
  );
}