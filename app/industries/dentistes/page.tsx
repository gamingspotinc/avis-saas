export default function DentistesPage() {
  return (
    <main style={{ padding: "120px 20px", maxWidth: "1100px", margin: "0 auto" }}>
      
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem" }}>
          Gestion d’avis pour cliniques dentaires
        </h1>
      </section>

      <img
        src="https://images.unsplash.com/photo-1588774069410-84ae30757c8e?auto=format&fit=crop&w=1400&q=80"
        alt="Clinique dentaire"
        style={{ width: "100%", borderRadius: "18px", marginBottom: "60px" }}
      />

      <section style={{ lineHeight: 1.9 }}>
        <p>
          Les patients choisissent leur dentiste en fonction des avis et de la réputation.
          Une stratégie proactive améliore la perception et la confiance.
        </p>
      </section>
    </main>
  );
}