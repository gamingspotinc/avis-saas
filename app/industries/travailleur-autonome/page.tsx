"use client";

export default function TravailleursAutonomesPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
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
            Votre réputation est votre marque personnelle
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            En tant que travailleur autonome, chaque avis influence
            directement votre crédibilité, votre visibilité et vos revenus.
            Une note élevée inspire confiance avant même le premier contact.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            La confiance détermine vos contrats
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "88%", text: "des clients vérifient les avis avant de choisir un professionnel." },
              { stat: "4.5★", text: "est souvent le seuil minimum pour inspirer confiance." },
              { stat: "3x", text: "plus de demandes pour les profils avec plusieurs avis positifs." },
              { stat: "+32%", text: "d’augmentation de conversion grâce à une forte preuve sociale." },
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
            Les risques pour un travailleur autonome
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Perte de clients potentiels avant même le premier échange</li>
            <li>• Difficulté à justifier vos tarifs</li>
            <li>• Moins de recommandations</li>
            <li>• Visibilité réduite sur Google</li>
            <li>• Dépendance accrue à la prospection active</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution adaptée aux indépendants
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>📲 Demande automatique d’avis</h3>
              <p>Après chaque mandat ou prestation, sollicitez un retour facilement.</p>
            </div>

            <div>
              <h3>⭐ Mise en valeur des avis positifs</h3>
              <p>Augmentez votre note moyenne naturellement et renforcez votre crédibilité.</p>
            </div>

            <div>
              <h3>🛡 Protection d’image</h3>
              <p>Traitez les insatisfactions en privé avant qu’elles n’impactent votre réputation publique.</p>
            </div>

            <div>
              <h3>📊 Suivi simple</h3>
              <p>Un tableau de bord clair pour suivre votre évolution et vos performances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROI ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Une meilleure réputation = plus de clients
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Pour un travailleur autonome, la réputation est un levier direct
            de croissance. Elle permet d’augmenter vos tarifs,
            de réduire la prospection et d’obtenir plus de recommandations.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus d’avis positifs → Plus de crédibilité → Plus de contrats → Plus de liberté financière
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les travailleurs autonomes choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Outil simple et rapide à mettre en place</li>
            <li>✔ Protection proactive de votre marque personnelle</li>
            <li>✔ Augmentation naturelle des avis positifs</li>
            <li>✔ Amélioration de votre visibilité locale</li>
            <li>✔ Gain de temps sur la gestion des avis</li>
            <li>✔ Croissance durable et indépendante</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME accompagne les travailleurs autonomes au Québec,
            au Canada et à l’international dans la gestion stratégique
            de leur réputation en ligne.
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
          Votre réputation est votre actif le plus précieux.
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
          Commencer dès maintenant
        </button>

        <p style={{ marginTop: 20, opacity: 0.8 }}>
          15 minutes pour transformer votre réputation en moteur de croissance.
        </p>
      </section>

    </main>
  );
}