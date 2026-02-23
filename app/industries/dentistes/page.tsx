"use client";

export default function DentistesPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588774069410-84ae30757c8e?auto=format&fit=crop&w=1600&q=80')", // Image clinique dentaire
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
            Renforcez la confiance et la réputation de votre clinique dentaire
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Les patients choisissent leur dentiste en fonction de la réputation et des avis. 
            Une image professionnelle en ligne augmente la fidélité et les prises de rendez-vous.
          </p>
        </div>
      </section>

      {/* ================= STATISTIQUES ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            L’importance des avis pour les cliniques dentaires
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "87%", text: "des patients lisent les avis avant de choisir un dentiste." },
              { stat: "72%", text: "ne prennent rendez-vous qu’avec une clinique ayant une note ≥ 4 étoiles." },
              { stat: "+25%", text: "d’augmentation possible des consultations grâce à une excellente réputation." },
              { stat: "90%", text: "assimilent une bonne note à un haut niveau de compétence et d’hygiène." },
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
            Une mauvaise réputation peut réduire vos consultations
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>• Les patients hésitent à prendre rendez-vous avec une clinique mal notée</li>
            <li>• Les avis négatifs peuvent entraîner la perte de nouveaux patients</li>
            <li>• Impact direct sur la confiance et la fidélisation</li>
            <li>• Réduction de la visibilité en ligne et sur Google Maps</li>
            <li>• Perception négative de compétence et d’hygiène</li>
          </ul>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#111", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 60 }}>
            Une solution pensée pour les cliniques dentaires
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
              <p>Obtenez un avis immédiatement après la consultation pour mesurer la satisfaction.</p>
            </div>

            <div>
              <h3>🧠 Filtrage intelligent</h3>
              <p>Les patients satisfaits sont dirigés vers Google, les avis négatifs restent privés pour traitement.</p>
            </div>

            <div>
              <h3>📊 Analyse qualitative</h3>
              <p>Identifiez les retours sur la compétence, le personnel et l’expérience globale.</p>
            </div>

            <div>
              <h3>🤖 Réponses professionnelles assistées</h3>
              <p>Maintenez une image haut de gamme avec des réponses adaptées à chaque avis.</p>
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
            Les patients recherchent la compétence, l’hygiène et la confiance.
            Une excellente réputation transforme les recherches en rendez-vous concrets.
          </p>

          <p style={{ marginTop: 30, fontWeight: "bold" }}>
            Plus de confiance → Plus de consultations → Plus de fidélisation → Plus de revenus
          </p>
        </div>
      </section>

      {/* ================= BLOC SIGNATURE ================= */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 40 }}>
            Pourquoi les cliniques dentaires choisissent AvisPME
          </h2>

          <ul style={{ lineHeight: 2, fontSize: "1.1rem" }}>
            <li>✔ Protection proactive de votre image professionnelle</li>
            <li>✔ Augmentation naturelle des avis positifs</li>
            <li>✔ Meilleure visibilité locale</li>
            <li>✔ Fidélisation des patients</li>
            <li>✔ Gain de temps pour l’équipe</li>
            <li>✔ Tableau de bord simple et stratégique</li>
          </ul>

          <p style={{ marginTop: 30, lineHeight: 1.8 }}>
            AvisPME accompagne les cliniques dentaires au Québec et au Canada
            dans l’optimisation de leur réputation en ligne. Transformez chaque avis en levier de croissance.
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