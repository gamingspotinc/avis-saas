"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/dashboard");
  };

  return (
    <main style={{ fontFamily: "sans-serif" }}>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1590608897129-79f12774d1d4?auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.85)",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "700px",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>AvisPME</h1>
          <p style={{ fontSize: "1.5rem", maxWidth: "600px", margin: "0 auto 30px auto" }}>
            Permet aux petites et moyennes entreprises de recevoir plus d'avis clients sans effort.
          </p>
          <button
            onClick={handleStart}
            style={{
              padding: "12px 30px",
              fontSize: "1.2rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#111",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Commencer maintenant
          </button>
        </div>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Pourquoi utiliser AvisPME ?</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "1.2rem" }}>
          Augmentez la visibilité de votre entreprise, collectez facilement les retours clients et améliorez votre réputation en ligne.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div style={{ maxWidth: "250px", textAlign: "center" }}>
            <Image src="/avis.jpg" alt="Avis clients" width={250} height={150} style={{ borderRadius: "10px" }} />
            <h3>Collecte facile</h3>
            <p>Les clients laissent un avis directement sur votre page.</p>
          </div>

          <div style={{ maxWidth: "250px", textAlign: "center" }}>
            <Image src="/dashboard.jpg" alt="Dashboard" width={250} height={150} style={{ borderRadius: "10px" }} />
            <h3>Dashboard simple</h3>
            <p>Visualisez tous vos commentaires et avis en un seul endroit.</p>
          </div>

          <div style={{ maxWidth: "250px", textAlign: "center" }}>
            <Image src="/reputation.jpg" alt="Réputation" width={250} height={150} style={{ borderRadius: "10px" }} />
            <h3>Améliorez votre réputation</h3>
            <p>Transformez les retours clients en arguments de confiance pour votre entreprise.</p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f5f5f5", padding: "60px 20px", textAlign: "center" }}>
        <h2>À propos</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "1.2rem" }}>
          Pour plus d'informations ou pour mettre en place votre espace AvisPME, contactez-moi :
        </p>
        <p style={{ fontSize: "1.1rem", margin: "10px 0" }}>
          Téléphone : <strong>1 (450) 204-8334</strong>
        </p>
        <p style={{ fontSize: "1.1rem", margin: "10px 0" }}>
          Email : <strong>Michael.venne@outlook.com</strong>
        </p>
      </section>
    </main>
  );
}