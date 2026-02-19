import Link from "next/link";

export default function IndustriesPage() {
  return (
    <main style={{ padding: "100px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "40px" }}>
        Industries desservies
      </h1>

      <div style={{ display: "grid", gap: "20px" }}>
        <Industry name="Restaurants" link="/industries/restaurants" />
        <Industry name="Cliniques dentaires" link="/industries/dentistes" />
        <Industry name="Garages automobiles" link="/industries/garages" />
        <Industry name="Agences immobilières" link="/industries/immobilier" />
      </div>
    </main>
  );
}

function Industry({ name, link }: { name: string; link: string }) {
  return (
    <Link href={link} style={{
      padding: "25px",
      borderRadius: "12px",
      border: "1px solid #eee",
      textDecoration: "none",
      color: "#111"
    }}>
      {name}
    </Link>
  );
}