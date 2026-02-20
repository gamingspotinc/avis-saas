"use client";

export default function CliniqueEsthetiquePage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600185364908-80a53a63f1b1?auto=format&fit=crop&w=1600&q=80')", // image adaptée aux soins de beauté
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
            Renforcez la confiance et la réputation de votre clinique beauté
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Les soins esthétiques sont une question de confiance et d’expérience.
            Votre réputation en ligne influence directement la prise de rendez-vous et la fidélité de vos clients.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            L’importance des avis dans les cliniques beauté
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "79%", text: "des clients choisiront un salon ou clinique qui comprend leurs besoins." },
              { stat: "85%", text: "consultent les avis avant de réserver un soin esthétique." },
              { stat: "+20%", text: "d’augmentation possible des réservations grâce à une excellente réputation." },
              { stat: "92%", text: "associent une note élevée à un service de qualité et un environnement soigné." },
            ].map((item, index) => (
              <div key={index}>
                <h3 style={{ fontSize: "3rem", marginBottom: 15 }}>{item.stat}</h3>
                <p style={{ color: "#555", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RISQUES ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Une mauvaise réputation peut coûter très cher
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Les clients hésitent à réserver un soin sans avis positif</li>
            <li>• Les avis négatifs peuvent dissuader plusieurs rendez-vous</li>
            <li>• Impact direct sur la fidélisation et la croissance du salon</li>
            <li>• Réduction de la perception de qualité et de confiance</li>
            <li>• Baisse de la visibilité sur les plateformes comme Google Maps ou Instagram</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution pensée pour les cliniques beauté
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>📲 Collecte post-soin</h3>
              <p>Envoyez un questionnaire immédiatement après le soin pour obtenir un avis pertinent.</p>
            </div>

            <div>
              <h3>🧠 Filtrage intelligent</h3>
              <p>Les clients satisfaits sont dirigés vers les plateformes publiques, les insatisfaits restent privés.</p>
            </div>

            <div>
              <h3>📊 Analyse qualitative</h3>
              <p>Évaluez les retours sur la qualité des soins, l’accueil et l’environnement.</p>
            </div>

            <div>
              <h3>🤖 Réponses professionnelles assistées</h3>
              <p>Maintenez une image premium avec des réponses adaptées et rapides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROI ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Une réputation forte augmente vos réservations
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Les clients recherchent la qualité, l’hygiène et la compétence.
            Une meilleure note moyenne transforme ces recherches en rendez-vous concrets.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus de confiance → Plus de réservations → Plus de fidélisation → Plus de revenus
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les cliniques beauté choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Protection proactive de votre image professionnelle</li>
            <li>✔ Augmentation naturelle des avis positifs</li>
            <li>✔ Meilleure visibilité locale</li>
            <li>✔ Fidélisation de votre clientèle</li>
            <li>✔ Gain de temps pour votre équipe</li>
            <li>✔ Tableau de bord simple et stratégique</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME accompagne les cliniques beauté au Québec et au Canada
            dans l’optimisation de leur réputation en ligne. Transformez chaque avis en levier de croissance pour votre activité.
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
          Protégez votre image. Augmentez vos réservations.
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
          15 minutes pour renforcer votre réputation.
        </p>
      </section>

    </main>
  );
}