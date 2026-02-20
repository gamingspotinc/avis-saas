export default function RestaurantsPage() {
  return (
    <main style={{ padding: "120px 20px", maxWidth: "1100px", margin: "0 auto" }}>
      
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Gestion d’avis pour restaurants
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
          Dans la restauration, une note Google peut déterminer votre taux de réservation.
          Chaque avis influence directement le choix des clients.
        </p>
      </section>

      <section style={{ marginBottom: "80px" }}>
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
          alt="Restaurant"
          style={{ width: "100%", borderRadius: "18px" }}
        />
      </section>

      <section style={{ lineHeight: 1.9 }}>
        <h2>Pourquoi c’est critique ?</h2>
        <p>
          90% des clients consultent les avis avant de réserver.
          Une mauvaise gestion peut impacter directement vos revenus.
        </p>

        <h2 style={{ marginTop: "40px" }}>Notre solution</h2>
        <ul>
          <li>QR code sur les tables</li>
          <li>Filtrage intelligent des insatisfactions</li>
          <li>Augmentation naturelle de votre note moyenne</li>
          <li>Amélioration de votre visibilité locale</li>
        </ul>
      </section>
    </main>
  );
}