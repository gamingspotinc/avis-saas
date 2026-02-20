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
            Transformez vos avis clients en moteur de croissance
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Chaque commentaire influence vos réservations.  
            Chaque étoile impacte votre chiffre d’affaires.  
            Prenez le contrôle de votre réputation.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Les chiffres parlent d’eux-mêmes
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
              { stat: "84%", text: "font autant confiance aux avis qu’à une recommandation personnelle." },
            ].map((item, index) => (
              <div key={index}>
                <h3 style={{ fontSize: "3rem", marginBottom: 15 }}>
                  {item.stat}
                </h3>
                <p style={{ lineHeight: 1.6, color: "#555" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROBLÈMES ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Votre réputation peut vous faire gagner… ou perdre des milliers de dollars
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Avis négatifs publics non contrôlés</li>
            <li>• Clients insatisfaits qui partent sans rien dire</li>
            <li>• Manque de rétroactions exploitables</li>
            <li>• Difficulté à fidéliser</li>
            <li>• Concurrence agressive sur Google</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Un système intelligent conçu pour la restauration
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
              <p>Permettez à vos clients de donner leur avis en 10 secondes.</p>
            </div>

            <div>
              <h3>🧠 Filtrage intelligent</h3>
              <p>Les clients satisfaits sont redirigés vers Google, les insatisfaits vers vous en privé.</p>
            </div>

            <div>
              <h3>📈 Suivi en temps réel</h3>
              <p>Recevez des alertes instantanées en cas de problème.</p>
            </div>

            <div>
              <h3>🤖 Réponses automatiques IA</h3>
              <p>Répondez professionnellement en quelques secondes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT FINANCIER ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Chaque étoile vaut de l’argent
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Passer de 3.8 à 4.4 étoiles peut augmenter votre taux de réservation,
            améliorer votre conversion et justifier des prix plus élevés.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus d’avis positifs → Plus de visibilité → Plus de réservations → Plus de revenus
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#f8f9fb",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
          Ne laissez plus votre réputation décider de votre succès
        </h2>

        <button
          style={{
            padding: "16px 40px",
            backgroundColor: "#111",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Planifier une démonstration gratuite
        </button>

        <p style={{ marginTop: 20, color: "#555" }}>
          15 minutes qui peuvent transformer votre croissance.
        </p>
      </section>
    </main>
  );
}