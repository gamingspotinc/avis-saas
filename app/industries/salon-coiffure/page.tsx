"use client";

export default function SalonCoiffurePage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.4), rgba(0,0,0,0.75))",
          }}
        />

        <div style={{ position: "relative", maxWidth: 900, padding: 20 }}>
          <h1 style={{ fontSize: "3.2rem", marginBottom: 20 }}>
            Gérez la réputation de votre salon et attirez plus de rendez-vous
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Dans la coiffure, votre réputation est votre vitrine.  
            Chaque avis influence la décision d’un nouveau client.  
            Transformez votre satisfaction client en croissance mesurable.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Les chiffres clés en beauté et coiffure
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "88%", text: "des clients lisent les avis avant de choisir un salon." },
              { stat: "72%", text: "choisissent un établissement avec une note supérieure à 4 étoiles." },
              { stat: "+15%", text: "d’augmentation possible des rendez-vous avec une meilleure réputation." },
              { stat: "84%", text: "font autant confiance aux avis qu’à une recommandation personnelle." },
            ].map((item, index) => (
              <div key={index}>
                <h3 style={{ fontSize: "3rem", marginBottom: 15 }}>
                  {item.stat}
                </h3>
                <p style={{ color: "#555", lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROBLÈMES ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Sans gestion proactive des avis, votre salon perd en visibilité
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Les clientes satisfaites ne laissent pas toujours d’avis</li>
            <li>• Une seule mauvaise note peut faire hésiter plusieurs nouvelles clientes</li>
            <li>• Votre note moyenne stagne</li>
            <li>• Vos concurrents mieux notés captent l’attention</li>
            <li>• Vous manquez d’informations précieuses sur l’expérience client</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution adaptée aux salons de coiffure
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>📱 QR Code à la caisse</h3>
              <p>Collectez des avis immédiatement après le rendez-vous.</p>
            </div>

            <div>
              <h3>🧠 Filtrage intelligent</h3>
              <p>Les clientes satisfaites vers Google, les insatisfaites vers vous en privé.</p>
            </div>

            <div>
              <h3>📊 Analyse des tendances</h3>
              <p>Identifiez les commentaires récurrents sur le service, l’accueil ou la technique.</p>
            </div>

            <div>
              <h3>🤖 Réponses assistées par IA</h3>
              <p>Répondez rapidement et professionnellement aux avis en ligne.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT & ROI ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Une meilleure réputation augmente vos rendez-vous
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Un salon passant de 3.9 à 4.6 étoiles améliore significativement son taux de réservation,
            renforce la confiance et peut justifier des tarifs plus élevés.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus d’avis positifs → Plus de visibilité → Plus de clientes → Plus de revenus
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE AVISPME ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les salons choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Automatisation intelligente des demandes d’avis</li>
            <li>✔ Protection proactive de votre réputation en ligne</li>
            <li>✔ Augmentation naturelle de votre note moyenne</li>
            <li>✔ Fidélisation accrue de votre clientèle</li>
            <li>✔ Gain de temps pour votre équipe</li>
            <li>✔ Tableau de bord simple et mesurable</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME est une plateforme spécialisée en gestion d’avis pour entreprises locales au Québec et au Canada.
            Nous aidons les salons de coiffure à améliorer leur visibilité, renforcer la confiance des clientes
            et transformer chaque interaction en opportunité de croissance.
          </p>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#111",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
          Prenez le contrôle de votre réputation dès aujourd’hui
        </h2>

        <button
          style={{
            padding: "16px 40px",
            backgroundColor: "white",
            color: "#111",
            border: "none",
            borderRadius: "12px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Planifier une démonstration gratuite
        </button>

        <p style={{ marginTop: 20, opacity: 0.8 }}>
          15 minutes pour transformer votre visibilité locale.
        </p>
      </section>

    </main>
  );
}