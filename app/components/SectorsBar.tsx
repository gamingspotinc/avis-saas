"use client";

import Link from "next/link";
import Image from "next/image";

const sectors = [
  { name: "Restaurants", href: "/industries/restaurants", icon: "/icone/icone-restaurant.jpg" },
  { name: "Cliniques dentaires", href: "/industries/dentistes", icon: "/icone/icone-cliniques dentaires.jpg" },
  { name: "Cliniques esthétiques", href: "/industries/clinique-esthetique.jpg", icon: "/icone/icone-cliniques esthetique.jpg" },
  { name: "Garages automobiles", href: "/industries/garages", icon: "/icone/icone-garage automobiles.jpg" },
  { name: "Agences immobilières", href: "/industries/immobilier", icon: "/icone/icone-agence immobiliere.jpg" },
  { name: "Salons de coiffure", href: "/industries/salon-coiffure", icon: "/icone/icone-salon de coiffure.jpg" },
  { name: "Services aux entreprises", href: "/industries/services-entreprises", icon: "/icone/icone-services aux entreprises.jpg" },
  { name: "Hôtellerie", href: "/industries/hotellerie", icon: "/icone/icone-Hotellerie.jpg" },
  { name: "Travailleurs autonomes", href: "/industries/travailleur-autonome", icon: "/icone/icone-travailleurs autonomes.jpg" },
  { name: "Autres secteurs", href: "/industries/autres-secteurs", icon: "/icone/icone-autres-secteurs.jpg" },
];

export default function SectorsBar() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 30,
        padding: "40px 20px",
        backgroundColor: "#f8f9fb",
        borderTop: "1px solid #eee",
      }}
    >
      {sectors.map((sector) => (
        <Link
          key={sector.name}
          href={sector.href}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "#111",
            minWidth: 120,
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          <Image src={sector.icon} alt={sector.name} width={50} height={50} />
          <span style={{ marginTop: 8, fontSize: "0.95rem", fontWeight: 500, textAlign: "center" }}>
            {sector.name}
          </span>
        </Link>
      ))}
    </div>
  );
}