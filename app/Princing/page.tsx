"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          background:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
            Protégez votre réputation. Augmentez vos revenus.
          </h1>

          <p style={{ fontSize: "1.6rem", marginBottom: "35px" }}>
            AvisPME transforme chaque client satisfait en levier de croissance,
            tout en gardant les retours négatifs privés.
          </p>

          <button
            onClick={() => router.push("/dashboard")}
            style={{
              padding: "18px 60px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              color: "#111",
              transition: "0.3s",
            }}
          >
            Protéger mon entreprise
          </button>
        </div>
      </section>

      {/* IMPACT BUSINESS */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#f8f9fb",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "50px" }}>
          Votre réputation influence directement vos revenus
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {[
            "93% des consommateurs lisent les avis avant d'acheter.",
            "1 seul avis négatif peut réduire vos conversions jusqu'à 30%.",
            "44% des clients restent fidèles si vous répondez aux critiques.",
            "Une meilleure note Google augmente votre visibilité locale.",
          ].map((text, index) => (
            <div
              key={index}
              style={{
                maxWidth: "280px",
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "14px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              <p style={{ fontSize: "1rem", lineHeight: 1.5 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT CA FONCTIONNE */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "60px" }}>
          Comment AvisPME protège votre entreprise
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          {[
            "1. Le client scanne votre QR personnalisé.",
            "2. Client satisfait → Redirection vers Google.",
            "3. Client insatisfait → Feedback privé.",
            "4. Vous améliorez votre service avant que cela nuise à votre image.",
          ].map((step, index) => (
            <div
              key={index}
              style={{
                maxWidth: "260px",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                Étape {index + 1}
              </h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALEUR PREMIUM */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#f8f9fb",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "40px" }}>
          Une solution complète de gestion de réputation
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: 1.6,
          }}
        >
          Dashboard stratégique, statistiques en temps réel, QR personnalisé,
          historique client et système intelligent de gestion des retours.
          AvisPME n'est pas un simple outil d'avis — c'est un système de
          protection et d’optimisation de réputation.
        </p>
      </section>

      {/* ROI SECTION */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "30px" }}>
          Combien vaut une meilleure réputation ?
        </h2>

        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.2rem" }}>
          Si une meilleure note Google vous apporte seulement 3 nouveaux clients
          par mois, AvisPME est déjà rentabilisé. Votre réputation est un actif.
          Protégez-la.
        </p>
      </section>

      {/* FOOTER PREMIUM */}
      <section
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>AvisPME</h2>

        <p style={{ marginBottom: "20px" }}>
          Système stratégique de protection et d’optimisation de réputation
          pour PME ambitieuses.
        </p>

        <p>Contact : Michael.venne@outlook.com</p>
      </section>
    </main>
  );
}