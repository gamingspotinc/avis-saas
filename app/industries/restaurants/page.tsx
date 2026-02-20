export default function RestaurantsPage() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      {/* HERO IMAGE FULL SCREEN */}
      <section
        style={{
          position: "relative",
          height: "90vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* DEGRADE FONDU */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
            zIndex: 1,
          }}
        ></div>

        {/* TEXTE SUR L'IMAGE */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "800px",
            padding: "0 20px",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}>
            Gestion d’avis pour restaurants
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
            Dans la restauration, une note Google peut déterminer votre taux de réservation.<br/>
            Chaque avis influence directement le choix des clients.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <section style={{ lineHeight: 1.9, marginBottom: "60px" }}>
          <h2>Pourquoi c’est critique ?</h2>
          <p>
            90% des clients consultent les avis avant de réserver.
            Une mauvaise gestion peut impacter directement vos revenus.
          </p>

          <h2 style={{ marginTop: "40px" }}>Notre solution</h2>
          <ul style={{ marginTop: "20px", paddingLeft: "20px", lineHeight: 1.7 }}>
            <li>QR code sur les tables</li>
            <li>Filtrage intelligent des insatisfactions</li>
            <li>Augmentation naturelle de votre note moyenne</li>
            <li>Amélioration de votre visibilité locale</li>
          </ul>
        </section>
      </section>
    </main>
  );
}