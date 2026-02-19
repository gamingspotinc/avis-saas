export default function FonctionnalitesPage() {
  return (
    <main style={{ padding: "100px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "60px" }}>
        Fonctionnalités avancées
      </h1>

      <div style={{ display: "grid", gap: "40px" }}>
        <Feature
          title="Collecte intelligente d’avis"
          text="Redirige automatiquement les clients satisfaits vers Google."
        />
        <Feature
          title="Gestion des retours négatifs"
          text="Intercepte les insatisfactions avant qu’elles ne deviennent publiques."
        />
        <Feature
          title="Statistiques détaillées"
          text="Analysez vos performances en temps réel."
        />
        <Feature
          title="Multi-emplacements"
          text="Gérez plusieurs succursales à partir d’un seul dashboard."
        />
      </div>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div style={{
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.05)"
    }}>
      <h2>{title}</h2>
      <p style={{ marginTop: "15px", color: "#555" }}>{text}</p>
    </div>
  );
}