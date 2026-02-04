"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          backgroundImage: 'url("https://images.unsplash.com/photo-1590608897129-79f12774d1d4?auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            AvisPME
          </h1>
          <p style={{ fontSize: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
            Permet aux petites et moyennes entreprises de recevoir plus d'avis clients sans effort.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Pourquoi utiliser AvisPME ?</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "1.2rem" }}>
          Augmentez la visibilité de votre entreprise, collectez facilement les retours clients et améliorez votre réputation en ligne. Tout cela sans effort supplémentaire !
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "40px"
          }}
        >
          <div style={{ maxWidth: "250px", textAlign: "center" }}>
            <Image
              src="https://images.unsplash.com/photo-1590608897129-79f12774d1d4?auto=format&fit=crop&w=800&q=80"
              alt="Avis clients"
              width={250}
              height={150}
              style={{ borderRadius: "10px" }}
            />
            <h3>Collecte facile</h3>
            <p>Les clients laissent un avis directement sur votre page.</p>
          </div>

          <div style={{ maxWidth: "250px", textAlign: "center" }}>
            <Image
              src="https://images.unsplash.com/photo-1581091012184-42ff5483e243?auto=format&fit=crop&w=800&q=80"
              alt="Dashboard"
              width={250}
              height={150}
              style={{ borderRadius: "10px" }}
            />
            <h3>Dashboard simple</h3>
            <p>Visualisez tous vos commentaires et avis en un seul endroit.</p>
          </div>

          <div style={{ maxWidth: "250px", textAlign: "center" }}>
            <Image
              src="https://images.unsplash.com/photo-1581091870629-f16dfd5d7d45?auto=format&fit=crop&w=800&q=80"
              alt="Reputation"
              width={250}
              height={150}
              style={{ borderRadius: "10px" }}
            />
            <h3>Améliorez votre réputation</h3>
            <p>Transformez les retours clients en arguments de confiance pour votre entreprise.</p>
          </div>
        </div>
      </section>
    </main>
  );
}