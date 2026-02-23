"use client";

export default function GaragesPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80')",
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
            La confiance est la clé dans le secteur automobile
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Les clients choisissent un garage en fonction des avis.
            Une excellente réputation augmente l’acceptation des réparations
            et la valeur moyenne des factures.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Les avis influencent directement les décisions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "91%", text: "des automobilistes consultent les avis avant de choisir un garage." },
              { stat: "4★+", text: "est le seuil minimum pour inspirer confiance." },
              { stat: "+27%", text: "d’augmentation d’acceptation des réparations avec une forte réputation." },
              { stat: "3x", text: "plus de chances d’être appelé avec une note élevée." },
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
            Les risques d’une réputation fragile
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Refus de réparations proposées</li>
            <li>• Perception de manque de transparence</li>
            <li>• Baisse du volume d’appels</li>
            <li>• Pression sur les prix</li>
            <li>• Perte de clients au profit de concurrents mieux notés</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution adaptée aux garages automobiles
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>📲 Collecte après service</h3>
              <p>Demandez un avis après chaque réparation ou entretien.</p>
            </div>

            <div>
              <h3>⭐ Mise en avant des clients satisfaits</h3>
              <p>Augmentez naturellement votre note Google.</p>
            </div>

            <div>
              <h3>🛡 Gestion proactive</h3>
              <p>Traitez les insatisfactions en privé avant publication publique.</p>
            </div>

            <div>
              <h3>📊 Analyse de satisfaction</h3>
              <p>Identifiez les points à améliorer : service, délais, transparence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROI ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Une meilleure réputation = plus de réparations acceptées
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Une réputation solide rassure vos clients.
            Elle augmente la confiance, la valeur moyenne des factures
            et la fidélisation à long terme.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus de confiance → Plus d’acceptation → Plus de revenus → Plus de fidélité
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les garages choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Augmentation naturelle des avis positifs</li>
            <li>✔ Protection de votre image professionnelle</li>
            <li>✔ Meilleure visibilité locale</li>
            <li>✔ Hausse du taux d’acceptation des réparations</li>
            <li>✔ Outil simple pour votre équipe</li>
            <li>✔ Croissance durable et mesurable</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME accompagne les garages automobiles au Québec,
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
          Vos avis influencent vos revenus.
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
          15 minutes pour renforcer la confiance et augmenter vos réparations.
        </p>
      </section>

    </main>
  );
}