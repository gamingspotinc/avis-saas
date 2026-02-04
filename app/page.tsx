"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      {/* Hero */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 20px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          AvisPME permet aux petites et moyennes entreprises de recevoir plus d'avis clients sans effort
        </h1>

        <p style={{ marginBottom: "30px", fontSize: "1.2rem", color: "#555" }}>
          Gérez facilement vos avis clients et améliorez votre réputation en ligne.
        </p>

        <Link href="/login">
          <button
            style={{
              padding: "12px 30px",
              fontSize: "1rem",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Commencer maintenant
          </button>
        </Link>

        <div style={{ marginTop: "40px" }}>
          <Image
            src="/hero.jpg"
            alt="Hero image"
            width={900}
            height={500}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </section>

      {/* Comment ça marche */}
      <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Comment ça marche</h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 250px", margin: "20px", textAlign: "center" }}>
            <h3>1. Créez votre compte PME</h3>
            <p>Je crée votre compte et vous envoie un lien de connexion sécurisé.</p>
          </div>
          <div style={{ flex: "1 1 250px", margin: "20px", textAlign: "center" }}>
            <h3>2. Envoyez le lien à vos clients</h3>
            <p>Vos clients peuvent laisser un avis facilement, sans compte supplémentaire.</p>
          </div>
          <div style={{ flex: "1 1 250px", margin: "20px", textAlign: "center" }}>
            <h3>3. Consultez vos avis</h3>
            <p>Les avis de vos clients sont visibles uniquement par vous et l’admin.</p>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section style={{ backgroundColor: "#f4f4f4", padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Témoignages</h2>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", fontStyle: "italic" }}>
          <p>"Grâce à AvisPME, nous avons augmenté nos avis clients de 50% en 1 mois !" – PME A</p>
          <p>"Super simple et efficace, nos clients adorent !" – PME B</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "30px 20px", color: "#777" }}>
        © 2026 AvisPME. Tous droits réservés.
      </footer>
    </main>
  );
}