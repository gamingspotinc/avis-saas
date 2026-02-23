"use client";

export default function HotelleriePage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')",
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
            La réputation est le moteur de réservation en hôtellerie
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Avant de réserver, les voyageurs consultent les avis.
            Votre note influence directement votre taux d’occupation
            et votre prix moyen par chambre.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Les avis déterminent les réservations
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "95%", text: "des voyageurs lisent les avis avant de réserver un hôtel." },
              { stat: "+1★", text: "peut augmenter le revenu par chambre jusqu’à 11%." },
              { stat: "76%", text: "ne réservent pas un établissement noté sous 4 étoiles." },
              { stat: "3x", text: "plus de clics pour les hôtels ayant une note élevée." },
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
            Une mauvaise gestion des avis impacte directement vos revenus
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Baisse du taux d’occupation</li>
            <li>• Pression à réduire les prix pour compenser une note faible</li>
            <li>• Perte de visibilité sur Google et plateformes de réservation</li>
            <li>• Moins de réservations directes</li>
            <li>• Dégradation de l’image de marque</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution adaptée au secteur hôtelier
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>🏨 Collecte après séjour</h3>
              <p>Demande automatique d’avis après le départ du client.</p>
            </div>

            <div>
              <h3>⭐ Redirection stratégique</h3>
              <p>Les clients satisfaits sont dirigés vers Google et plateformes clés.</p>
            </div>

            <div>
              <h3>🧠 Gestion proactive</h3>
              <p>Les insatisfactions sont traitées en interne avant publication publique.</p>
            </div>

            <div>
              <h3>📊 Analyse d’expérience</h3>
              <p>Identifiez les points à améliorer : propreté, service, confort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROI ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Une meilleure réputation = plus de réservations
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Une note élevée permet d’augmenter vos tarifs,
            d’améliorer votre positionnement sur Google
            et d’accroître vos réservations directes.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus d’avis positifs → Meilleure visibilité → Taux d’occupation plus élevé → Revenus optimisés
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les établissements hôteliers choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Augmentation naturelle de la note moyenne</li>
            <li>✔ Protection de l’image de marque</li>
            <li>✔ Meilleure visibilité sur Google</li>
            <li>✔ Hausse du taux d’occupation</li>
            <li>✔ Automatisation simple et rapide</li>
            <li>✔ Tableau de bord stratégique</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME accompagne les hôtels, auberges et établissements touristiques
            au Québec, au Canada et à l’international
            dans la gestion stratégique de leur réputation.
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
          Votre note influence vos réservations.
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
          15 minutes pour optimiser votre réputation et vos revenus.
        </p>
      </section>

    </main>
  );
}