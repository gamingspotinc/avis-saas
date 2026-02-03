import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Collectez des avis clients automatiquement
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          AvisPME permet aux garages et PME de recevoir plus d'avis clients
          sans effort.
        </p>

        <Link href="/login">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              background: "black",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Commencer maintenant
          </button>
        </Link>

        <div style={{ marginTop: "50px" }}>
          <Image
            src="/hero.jpg"
            alt="Garage"
            width={900}
            height={500}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        style={{
          padding: "60px 20px",
          background: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
          Comment ça fonctionne ?
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          <div style={{ maxWidth: "300px" }}>
            <Image src="/phone.png" alt="Phone" width={200} height={400} />
            <h3>1. Le client laisse un avis</h3>
            <p>Une page simple pour récolter les commentaires.</p>
          </div>

          <div style={{ maxWidth: "300px" }}>
            <Image src="/reviews.png" alt="Reviews" width={300} height={200} />
            <h3>2. Vous recevez tout dans votre dashboard</h3>
            <p>Tous les avis centralisés pour votre entreprise.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Prêt à recevoir plus d'avis ?
        </h2>

        <Link href="/login">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              background: "black",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Se connecter
          </button>
        </Link>
      </section>
    </main>
  );
}