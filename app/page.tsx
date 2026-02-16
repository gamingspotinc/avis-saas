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
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "520px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1590608897129-79f12774d1d4?auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.85)",
            padding: "40px 60px",
            borderRadius: "16px",
            maxWidth: "900px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <h1 style={{ fontSize: "3.2rem", marginBottom: "20px" }}>
            AvisPME
          </h1>
          <p
            style={{
              fontSize: "1.6rem",
              marginBottom: "30px",
              lineHeight: 1.4,
            }}
          >
            Transformez chaque client satisfait en levier de croissance.
          </p>
          <button
            onClick={handleStart}
            style={{
              padding: "16px 50px",
              fontSize: "1.3rem",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#111",
              color: "white",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Commencer maintenant
          </button>
        </div>
      </section>

      {/* FONCTIONNALITÉS CLÉS */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#f8f9fb",
        }}
      >
        <h2 style={{ marginBottom: "50px", fontSize: "2rem" }}>
          Fonctionnalités clés
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              img: "/avis.jpg",
              title: "Collecte intelligente",
              text: "Capturez les avis positifs et gérez les retours négatifs avant qu'ils n'affectent Google.",
            },
            {
              img: "/dashboard.jpg",
              title: "Dashboard stratégique",
              text: "Analysez vos statistiques et améliorez votre service en temps réel.",
            },
            {
              img: "/reputation.jpg",
              title: "Réputation optimisée",
              text: "Augmentez votre crédibilité et inspirez confiance à vos futurs clients.",
            },
          ].map((card, index) => (
            <div
              key={index}
              style={{
                maxWidth: "280px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 30px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.12)";
              }}
            >
              <Image
                src={card.img}
                alt={card.title}
                width={260}
                height={150}
                style={{ borderRadius: "12px" }}
              />
              <h3 style={{ marginTop: "15px" }}>{card.title}</h3>
              <p style={{ marginTop: "10px", fontSize: "0.95rem" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SAVIEZ-VOUS + POURQUOI */}
      <section
        style={{
          padding: "70px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            flex: "1 1 320px",
            backgroundColor: "#f0f2f5",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Saviez-vous ?</h2>
          <ul style={{ lineHeight: 1.9 }}>
            <li>Un seul avis négatif peut dissuader <strong>94%</strong> des clients.</li>
            <li><strong>50%</strong> des clients pensent avoir vu de faux avis.</li>
            <li><strong>44,6%</strong> restent fidèles si l'entreprise répond.</li>
            <li>Entre <strong>62% et 83%</strong> évitent une entreprise suspecte.</li>
          </ul>
        </div>

        <div
          style={{
            flex: "1 1 320px",
            backgroundColor: "#f0f2f5",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Pourquoi AvisPME ?</h2>
          <p style={{ lineHeight: 1.6 }}>
            AvisPME agit comme un filtre intelligent : maximisez vos avis
            positifs, améliorez votre service grâce aux retours privés et
            protégez votre réputation en ligne.
          </p>
        </div>
      </section>

      {/* À PROPOS - GRAND RECTANGLE BAS DE PAGE */}
      <section
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>À propos</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto 20px auto" }}>
          Pour plus d'informations ou pour mettre en place votre espace AvisPME,
          contactez-moi :
        </p>
        <p>
          Téléphone : <strong>1 (450) 204-8334</strong>
        </p>
        <p>
          Email : <strong>Michael.venne@outlook.com</strong>
        </p>
      </section>
    </main>
  );
}