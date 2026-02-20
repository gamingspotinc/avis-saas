"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const industries = [
    "Restaurants",
    "Cliniques dentaires",
    "Cliniques esthétiques",
    "Garages automobiles",
    "Agences immobilières",
    "Salon de coiffure",
    "Hotellerie",
    "Service aux entreprises",
    "Travailleurs autonomes",
    "Autres secteurs",
  ];

  const services = [
    "Obtenez plus d’avis Google",
    "Gérez vos clients insatisfaits",
    "Expérience client",
  ];

  return (
    <main style={{ fontFamily: "sans-serif", overflowX: "hidden" }}>
      {/* HERO */}
      <section style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url('https://images.unsplash.com/photo-1588774069410-84ae30757c8e?auto=format&fit=crop&w=1950&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{
            background: "rgba(0,0,0,0.55)",
            padding: "30px 40px",
            borderRadius: "15px",
            textAlign: "center",
            maxWidth: "900px"
          }}>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ fontSize: "3rem", color: "white", marginBottom: "20px" }}
            >
              Protégez votre réputation et développez vos revenus
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ fontSize: "1.3rem", color: "white", lineHeight: 1.6 }}
            >
              AvisPME vous aide à collecter des avis positifs, gérer les insatisfactions et
              maximiser votre visibilité locale pour tous types d’entreprises.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "60px" }}>
          Comment nous vous aidons
        </h2>
        <motion.div
          style={{
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
          }}
        >
          {services.map((s, idx) => (
            <motion.div
              key={s}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                backgroundColor: "#f8f9fb",
                padding: "40px",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {s}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* INDUSTRIES PRINCIPALES */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f0f4f8" }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "60px" }}>
          Industries desservies
        </h2>

        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          {industries.map((ind) => (
            <Link key={ind} href={`/industries/${ind.toLowerCase().replace(/\s/g, '-')}`}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                style={{
                  backgroundColor: "white",
                  padding: "25px",
                  borderRadius: "12px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {ind}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* MEGA FOOTER INDUSTRIES (VERSION INPUTKIT) */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "50px", textAlign: "center" }}>
          Tous les secteurs et services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          {industries.map((ind) => (
            <Link key={ind} href={`/industries/${ind.toLowerCase().replace(/\s/g, '-')}`} style={{
              textDecoration: "none",
              color: "white",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#222",
              textAlign: "center",
              fontWeight: "bold",
              transition: "0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60px"
            }}>
              {ind}
            </Link>
          ))}
        </div>

        {/* CTA secondaire */}
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <Link href="/start" style={{
            padding: "14px 40px",
            backgroundColor: "#00ffcc",
            color: "#111",
            fontWeight: "bold",
            borderRadius: "12px",
            fontSize: "1rem",
            textDecoration: "none"
          }}>
            Commencer maintenant
          </Link>
        </div>
      </section>
    </main>
  );
}