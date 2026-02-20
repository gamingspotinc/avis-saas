export default function SalonCoiffurePage() {
  return (
    <main style={{ padding: "120px 20px", maxWidth: "1100px", margin: "0 auto" }}>
      
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Protection de réputation pour salons de coiffure
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
          Dans le domaine de la coiffure, votre réputation est votre vitrine.
          Chaque avis influence directement la décision d’un nouveau client.
          AvisPME vous aide à maximiser vos avis positifs et filtrer les insatisfactions.
        </p>
      </section>

      {/* IMAGE */}
      <section style={{ marginBottom: "80px" }}>
        <img
          src=""
          alt="Salon de coiffure"
          style={{
            width: "100%",
            borderRadius: "18px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
          }}
        />
      </section>

      {/* CONTENU STRATÉGIQUE */}
      <section style={{ lineHeight: 1.9, fontSize: "1.1rem" }}>
        <h2>Pourquoi c’est critique pour un salon ?</h2>
        <p>
          Les clients recherchent activement des avis avant de choisir un salon.
          Une seule mauvaise évaluation peut détourner plusieurs rendez-vous.
        </p>

        <h2 style={{ marginTop: "40px" }}>Comment AvisPME vous aide</h2>
        <ul style={{ marginTop: "20px" }}>
          <li>QR code à la caisse pour collecter des avis instantanément</li>
          <li>Filtrage intelligent des insatisfactions</li>
          <li>Redirection automatique vers Google pour les clients satisfaits</li>
          <li>Augmentation naturelle de votre note moyenne</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Résultat attendu</h2>
        <p>
          Plus de rendez-vous. Plus de confiance. Plus de visibilité locale.
          Une réputation maîtrisée devient un levier de croissance.
        </p>
      </section>

    </main>
  );
}