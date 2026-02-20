export default function CliniqueEsthetiquePage() {
  return (
    <main style={{ padding: "120px 20px", maxWidth: "1100px", margin: "0 auto" }}>
      
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem" }}>
          Réputation pour cliniques esthétiques
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
          La confiance est au cœur de votre activité. 
          Votre réputation en ligne influence chaque prise de rendez-vous.
        </p>
      </section>

      <section style={{ marginBottom: "80px" }}>
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80"
          alt="Clinique esthétique"
          style={{ width: "100%", borderRadius: "18px" }}
        />
      </section>

      <section style={{ lineHeight: 1.9 }}>
        <h2>Enjeux du secteur</h2>
        <p>
          Les patients recherchent des preuves sociales avant toute intervention.
          Une mauvaise note peut réduire drastiquement la confiance.
        </p>

        <h2 style={{ marginTop: "40px" }}>Ce que nous faisons</h2>
        <ul>
          <li>Collecte proactive d’avis satisfaits</li>
          <li>Réduction des avis publics négatifs</li>
          <li>Augmentation de crédibilité locale</li>
        </ul>
      </section>
    </main>
  );
}