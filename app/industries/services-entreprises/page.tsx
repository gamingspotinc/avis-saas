"use client";

export default function ServicesEntreprisesPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80')",
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
            Réputation stratégique pour services aux entreprises
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            En B2B, la confiance est un facteur décisif.
            Avant de signer un contrat, vos prospects analysent votre réputation,
            vos avis et votre crédibilité en ligne.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            La réputation influence les décisions B2B
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "92%", text: "des acheteurs B2B consultent des avis avant de contacter un fournisseur." },
              { stat: "84%", text: "considèrent la réputation comme un facteur clé dans la sélection finale." },
              { stat: "3x", text: "plus de chances d’être contacté avec une note supérieure à 4.5 étoiles." },
              { stat: "+30%", text: "d’augmentation du taux de conversion avec une forte preuve sociale." },
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
            Les risques d’une réputation non maîtrisée
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Perte de contrats avant même la prise de contact</li>
            <li>• Négociations plus difficiles à cause d’une perception affaiblie</li>
            <li>• Réduction de crédibilité face aux concurrents</li>
            <li>• Moins de recommandations et partenariats</li>
            <li>• Impact direct sur la valeur perçue de vos services</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution pensée pour le B2B
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>📩 Collecte après mandat</h3>
              <p>Automatisation de demandes d’avis après livraison ou fin de contrat.</p>
            </div>

            <div>
              <h3>🧠 Filtrage stratégique</h3>
              <p>Les retours sensibles sont traités en privé pour protéger votre image.</p>
            </div>

            <div>
              <h3>📊 Analyse qualitative</h3>
              <p>Identifiez les points forts valorisés par vos clients corporatifs.</p>
            </div>

            <div>
              <h3>🤖 Réponses professionnelles</h3>
              <p>Maintenez une communication alignée avec votre positionnement premium.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROI ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Une réputation forte accélère vos ventes
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            En services aux entreprises, la décision repose sur la confiance.
            Une preuve sociale solide réduit les objections, accélère les cycles
            de vente et augmente la valeur moyenne des contrats.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus de crédibilité → Cycles de vente plus courts → Plus de contrats → Croissance durable
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les entreprises choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Renforcement de crédibilité corporative</li>
            <li>✔ Protection proactive de votre image de marque</li>
            <li>✔ Augmentation naturelle des avis positifs</li>
            <li>✔ Avantage concurrentiel mesurable</li>
            <li>✔ Outil simple pour équipes et gestionnaires</li>
            <li>✔ Tableau de bord stratégique et analytique</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME accompagne les entreprises du Québec, du Canada et à l’international
            dans la gestion stratégique de leur réputation en ligne.
            Transformez votre crédibilité en levier de croissance.
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
          Votre réputation influence vos contrats.
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
          Planifier une démonstration stratégique
        </button>

        <p style={{ marginTop: 20, opacity: 0.8 }}>
          15 minutes pour transformer votre réputation en avantage compétitif.
        </p>
      </section>

    </main>
  );
}