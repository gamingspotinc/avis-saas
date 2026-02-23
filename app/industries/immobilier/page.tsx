"use client";

export default function ImmobilierPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80')",
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
            La réputation influence vos mandats immobiliers
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Acheter ou vendre une propriété est une décision majeure.
            Les clients choisissent leur courtier en fonction des avis
            et de la confiance qu’il inspire.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Les avis sont décisifs en immobilier
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "93%", text: "des vendeurs consultent les avis avant de choisir un courtier." },
              { stat: "4.5★+", text: "augmente fortement la probabilité d’obtenir un mandat." },
              { stat: "2x", text: "plus de demandes avec plusieurs témoignages positifs." },
              { stat: "+35%", text: "d’augmentation de conversion avec une forte preuve sociale." },
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
            Les risques d’une réputation faible
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Perte de mandats au profit de concurrents mieux notés</li>
            <li>• Difficulté à justifier votre commission</li>
            <li>• Moins de recommandations</li>
            <li>• Baisse de visibilité locale sur Google</li>
            <li>• Cycles de décision plus longs</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution adaptée aux agences immobilières
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>📩 Collecte après transaction</h3>
              <p>Automatisation de la demande d’avis après vente ou achat.</p>
            </div>

            <div>
              <h3>⭐ Mise en valeur des témoignages</h3>
              <p>Augmentez votre crédibilité auprès de futurs clients.</p>
            </div>

            <div>
              <h3>🛡 Protection d’image</h3>
              <p>Traitez les retours sensibles en privé avant publication publique.</p>
            </div>

            <div>
              <h3>📊 Analyse stratégique</h3>
              <p>Identifiez les forces qui vous démarquent : négociation, disponibilité, accompagnement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROI ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Une meilleure réputation = plus de mandats
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Une forte réputation vous permet d’obtenir plus de mandats,
            d’augmenter votre taux de signature et de renforcer
            votre positionnement dans votre marché local.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus d’avis positifs → Plus de confiance → Plus de mandats → Plus de commissions
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les agences immobilières choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Augmentation naturelle des avis positifs</li>
            <li>✔ Renforcement de crédibilité locale</li>
            <li>✔ Protection proactive de votre image</li>
            <li>✔ Meilleure visibilité Google</li>
            <li>✔ Outil simple pour courtiers et équipes</li>
            <li>✔ Croissance durable et mesurable</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME accompagne les agences immobilières au Québec,
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
          Votre réputation influence vos commissions.
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
          15 minutes pour transformer votre réputation en avantage compétitif.
        </p>
      </section>

    </main>
  );
}