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
            "url('https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1600&q=80')",
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
            Renforcez la confiance et la réputation de votre clinique esthétique
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Dans le domaine esthétique, la confiance est essentielle.  
            Votre réputation en ligne influence directement chaque consultation et intervention.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            La réputation est déterminante en médecine esthétique
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "91%", text: "des patients consultent les avis avant de choisir une clinique." },
              { stat: "76%", text: "refusent une consultation si la note est inférieure à 4 étoiles." },
              { stat: "+18%", text: "d’augmentation possible des prises de rendez-vous avec une meilleure réputation." },
              { stat: "88%", text: "associent une forte note à un haut niveau d’expertise." },
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

      {/* ================= RISQUES ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Une mauvaise réputation peut coûter très cher
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Perte de crédibilité face aux concurrents</li>
            <li>• Hésitation des patients à réserver</li>
            <li>• Impact direct sur des traitements à forte valeur</li>
            <li>• Réduction du taux de conversion consultation → intervention</li>
            <li>• Diminution de la perception d’expertise</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution adaptée aux cliniques esthétiques
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 40,
            }}
          >
            <div>
              <h3>📲 Collecte post-consultation</h3>
              <p>Demandez un avis immédiatement après l’intervention ou la consultation.</p>
            </div>

            <div>
              <h3>🧠 Filtrage intelligent</h3>
              <p>Les patients satisfaits vers Google, les insatisfaits en discussion privée.</p>
            </div>

            <div>
              <h3>📊 Analyse qualitative</h3>
              <p>Identifiez les commentaires sur le personnel, l’expertise ou l’environnement.</p>
            </div>

            <div>
              <h3>🤖 Réponses professionnelles assistées</h3>
              <p>Maintenez une image haut de gamme avec des réponses adaptées.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROI ================= */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 30 }}>
            Une réputation forte augmente vos consultations
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Dans un secteur où les traitements peuvent représenter plusieurs milliers de dollars,
            une amélioration de votre note moyenne peut significativement augmenter votre taux de conversion.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus de confiance → Plus de consultations → Plus d’interventions → Plus de revenus
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les cliniques choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Protection proactive de votre image professionnelle</li>
            <li>✔ Augmentation naturelle des avis positifs</li>
            <li>✔ Meilleure visibilité locale</li>
            <li>✔ Fidélisation de votre patientèle</li>
            <li>✔ Gain de temps pour votre équipe administrative</li>
            <li>✔ Tableau de bord simple et stratégique</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME accompagne les cliniques esthétiques au Québec et au Canada
            dans l’optimisation de leur réputation en ligne. Notre solution permet
            d’augmenter la confiance des patients, d’améliorer la crédibilité locale
            et de transformer chaque expérience en levier de croissance.
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
          Protégez votre image. Augmentez vos consultations.
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