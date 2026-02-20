export default function ImmobilierPage() {
  return (
    <main style={{ padding: "120px 20px", maxWidth: "1100px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "3rem", textAlign: "center", marginBottom: "60px" }}>
        Réputation pour agences immobilières
      </h1>

      <img
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80"
        alt="Agence immobilière"
        style={{ width: "100%", borderRadius: "18px", marginBottom: "60px" }}
      />

      <p style={{ lineHeight: 1.9 }}>
        Chaque transaction repose sur la confiance.
        Une réputation solide rassure vendeurs et acheteurs.
      </p>
    </main>
  );
}