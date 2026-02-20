"use client";

export default function RestaurantsPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')",
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
            Logiciel de gestion d’avis pour restaurants
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Chaque étoile influence vos réservations.  
            Chaque avis impacte votre chiffre d’affaires.  
            Transformez votre réputation en moteur de croissance.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Les chiffres clés en restauration
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "79%", text: "des clients choisissent un restaurant qui comprend réellement leurs besoins." },
              { stat: "93%", text: "lisent les avis en ligne avant de réserver." },
              { stat: "+9%", text: "de revenus pour chaque étoile supplémentaire." },
              { stat: "68%", text: "ne reviennent jamais après une mauvaise expérience non traitée." },
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
            Sans stratégie d’avis, vous laissez de l’argent sur la table
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Vos clients satisfaits restent silencieux</li>
            <li>• Vos clients insatisfaits publient publiquement</li>
            <li>• Votre note stagne ou diminue</li>
            <li>• Votre visibilité locale baisse</li>
            <li>• Vos concurrents prennent votre place</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution pensée pour les restaurateurs
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>📱 QR Code sur table</h3>
              <p>Collecte d’avis rapide en moins de 10 secondes.</p>
            </div>

            <div>
              <h3>🧠 Filtrage intelligent</h3>
              <p>Les avis positifs vers Google, les insatisfactions en privé.</p>
            </div>

            <div>
              <h3>📈 Alertes instantanées</h3>
              <p>Intervenez avant qu’un problème devienne public.</p>
            </div>

            <div>
              <h3>🤖 Réponses IA</h3>
              <p>Répondez professionnellement en quelques clics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROI ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Chaque étoile supplémentaire augmente vos revenus
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Passer de 3.8 à 4.4 étoiles peut augmenter votre taux de réservation,
            améliorer votre conversion et justifier des prix plus élevés.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus d’avis → Plus de visibilité → Plus de réservations → Plus de revenus
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE AVISPME ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les restaurants choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Automatisation intelligente des demandes d’avis</li>
            <li>✔ Protection proactive de votre réputation</li>
            <li>✔ Augmentation naturelle de votre note moyenne</li>
            <li>✔ Analyse des tendances (service, cuisine, ambiance)</li>
            <li>✔ Gain de temps pour votre équipe</li>
            <li>✔ Tableau de bord clair et mesurable</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME est une plateforme spécialisée en gestion d’avis pour restaurants au Québec et au Canada.
            Notre solution permet aux établissements d’améliorer leur réputation en ligne, d’augmenter leur visibilité
            locale et de générer davantage de réservations grâce à une stratégie automatisée et intelligente.
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
          Ne laissez plus votre réputation décider de votre succès
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
          15 minutes qui peuvent transformer votre croissance.
        </p>
      </section>

    </main>
  );
}