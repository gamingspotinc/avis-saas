"use client";

export default function AutresSecteursPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80')",
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
            Une solution adaptée à tous les secteurs
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Peu importe votre industrie, votre réputation influence
            directement vos revenus, votre crédibilité et votre croissance.
            AvisPME s’adapte à votre réalité d’affaires.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            La réputation est un levier universel
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "89%", text: "des consommateurs consultent les avis avant d’acheter un service." },
              { stat: "4★+", text: "est devenu le standard minimal de confiance." },
              { stat: "+31%", text: "d’augmentation moyenne de conversion avec une forte preuve sociale." },
              { stat: "3x", text: "plus de clics pour les entreprises mieux notées." },
            ].map((item, index) => (
              <div key={index}>
                <h3 style={{ fontSize: "3rem", marginBottom: 15 }}>{item.stat}</h3>
                <p style={{ color: "#555", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENJEUX ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Les impacts d’une réputation négligée
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Perte de clients avant même le premier contact</li>
            <li>• Réduction du taux de conversion</li>
            <li>• Difficulté à justifier vos prix</li>
            <li>• Moins de visibilité sur Google</li>
            <li>• Avantage donné aux concurrents mieux notés</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution flexible et stratégique
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>📲 Collecte intelligente</h3>
              <p>Automatisation des demandes d’avis adaptée à votre modèle d’affaires.</p>
            </div>

            <div>
              <h3>⭐ Amplification positive</h3>
              <p>Valorisez vos clients satisfaits et augmentez naturellement votre note.</p>
            </div>

            <div>
              <h3>🛡 Protection d’image</h3>
              <p>Filtrage stratégique des insatisfactions pour protéger votre marque.</p>
            </div>

            <div>
              <h3>📊 Données exploitables</h3>
              <p>Analyse claire pour améliorer votre expérience client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POSITIONNEMENT GLOBAL ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Une solution locale et internationale
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            AvisPME accompagne les entreprises du Québec,
            du Canada et à l’international dans la gestion stratégique
            de leur réputation en ligne.
            Peu importe votre secteur, votre croissance commence par la confiance.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus d’avis positifs → Plus de crédibilité → Plus de clients → Plus de croissance
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi choisir AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Adaptable à tous les secteurs</li>
            <li>✔ Augmentation naturelle des avis positifs</li>
            <li>✔ Protection proactive de votre image</li>
            <li>✔ Meilleure visibilité Google</li>
            <li>✔ Outil simple et stratégique</li>
            <li>✔ Croissance mesurable et durable</li>
          </ul>
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
          Votre réputation influence vos résultats.
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
          15 minutes pour transformer votre réputation en avantage stratégique.
        </p>
      </section>

    </main>
  );
}