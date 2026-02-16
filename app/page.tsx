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
      {/* SECTION HERO */}
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
            padding: "30px 40px",
            borderRadius: "12px",
            maxWidth: "800px",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>AvisPME</h1>
          <p style={{ fontSize: "1.5rem", maxWidth: "700px", margin: "0 auto 30px auto" }}>
            Permet aux petites et moyennes entreprises de recevoir plus d'avis clients sans effort.
          </p>
          <button
            onClick={handleStart}
            style={{
              padding: "15px 40px",
              fontSize: "1.3rem",
              borderRadius: "8px",
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

      {/* SECTION FONCTIONNALITES CLES */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#f7f7f7" }}>
        <h2 style={{ marginBottom: "40px" }}>Fonctionnalités clés</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              maxWidth: "250px",
              textAlign: "center",
              backgroundColor: "#ffffff",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <Image src="/avis.jpg" alt="Avis clients" width={250} height={150} style={{ borderRadius: "10px" }} />
            <h3>Collecte facile</h3>
            <p>Les clients laissent un avis directement sur votre page.</p>
          </div>

          <div
            style={{
              maxWidth: "250px",
              textAlign: "center",
              backgroundColor: "#ffffff",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <Image src="/dashboard.jpg" alt="Dashboard" width={250} height={150} style={{ borderRadius: "10px" }} />
            <h3>Dashboard simple</h3>
            <p>Visualisez tous vos commentaires et avis en un seul endroit.</p>
          </div>

          <div
            style={{
              maxWidth: "250px",
              textAlign: "center",
              backgroundColor: "#ffffff",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <Image src="/reputation.jpg" alt="Réputation" width={250} height={150} style={{ borderRadius: "10px" }} />
            <h3>Améliorez votre réputation</h3>
            <p>Transformez les retours clients en arguments de confiance pour votre entreprise.</p>
          </div>
        </div>
      </section>

      {/* SECTION STATISTIQUES ET POURQUOI AVISPME */}
      <section
        style={{
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* STATISTIQUES */}
        <div
          style={{
            flex: "1 1 300px",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: "12px",
            padding: "25px",
            minWidth: 280,
          }}
        >
          <h2>Saviez-vous ?</h2>
          <ul style={{ lineHeight: 1.8, paddingLeft: "20px" }}>
            <li>
              <strong>Impact majeur :</strong> Un seul avis négatif peut dissuader <strong>94 %</strong> des clients potentiels.
            </li>
            <li>
              <strong>Risque de faux avis :</strong> Environ <strong>50%</strong> des clients pensent avoir déjà vu de faux avis sur Google.
            </li>
            <li>
              <strong>Réponse aux négatifs :</strong> Seulement <strong>44,6%</strong> des clients continuent d'interagir avec une entreprise si elle répond aux avis négatifs.
            </li>
            <li>
              <strong>Conséquences des faux avis :</strong> Plus de <strong>62% à 83%</strong> des utilisateurs éviteraient une entreprise soupçonnée de publier de faux avis.
            </li>
          </ul>
        </div>

        {/* POURQUOI AVISPME */}
        <div
          style={{
            flex: "1 1 300px",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: "12px",
            padding: "25px",
            minWidth: 280,
          }}
        >
          <h2>Pourquoi AvisPME ?</h2>
          <p style={{ lineHeight: 1.6 }}>
            Peu ou pas de chance d'avis négatif grâce à une collecte rapide et facile. Améliorez votre réputation, transformez les retours clients en arguments de confiance et prenez de l'avance sur vos concurrents.
          </p>
        </div>
      </section>

      {/* SECTION CONTACT / À PROPOS */}
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