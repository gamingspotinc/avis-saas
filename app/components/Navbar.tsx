"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const iconMap: Record<string, string> = {
    "Restaurants": "/icone/icone-restaurant.jpg",
    "Salons de coiffure": "/icone/icone-salon de coiffure.jpg",
    "Clinique esthétique": "/icone/icone-cliniques esthetique.jpg",
    "Services aux entreprises": "/icone/icone-services aux entreprises.jpg",
    "Hôtellerie": "/icone/icone-Hotellerie.jpg",
    "Travailleur autonome": "/icone/icone-travailleurs autonomes.jpg",
    "Cliniques dentaires": "/icone/icone-cliniques dentaires.jpg",
    "Garages automobiles": "/icone/icone-garage automobiles.jpg",
    "Agences immobilières": "/icone/icone-agence immobiliere.jpg",
    "Autres secteurs": "/icone/icone-autres secteurs.jpg",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #eee",
        zIndex: 1000,
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#111",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        AvisPME
      </Link>

      <div
        style={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Link href="/solution" style={linkStyle}>
          Solution
        </Link>

        <div className="dropdown">
          <span className="dropdown-trigger">Industries ▾</span>

          <div className="dropdown-menu">
            {[
              { name: "Restaurants", href: "/industries/restaurants" },
              { name: "Salons de coiffure", href: "/industries/salon-coiffure" },
              { name: "Clinique esthétique", href: "/industries/clinique-esthetique" },
              { name: "Services aux entreprises", href: "/industries/services-entreprises" },
              { name: "Hôtellerie", href: "/industries/hotellerie" },
              { name: "Travailleur autonome", href: "/industries/travailleur-autonome" },
              { name: "Cliniques dentaires", href: "/industries/dentistes" },
              { name: "Garages automobiles", href: "/industries/garages" },
              { name: "Agences immobilières", href: "/industries/immobilier" },
              { name: "Autres secteurs", href: "/industries/autres-secteurs" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="dropdown-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 10px",
                }}
              >
                <Image
                  src={iconMap[item.name]}
                  alt={`Icône ${item.name}`}
                  width={20}
                  height={20}
                />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/fonctionnalites" style={linkStyle}>
          Fonctionnalités
        </Link>

        <Link href="/a-propos" style={linkStyle}>
          À propos
        </Link>

        <Link
          href="/start"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#111",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Demande d’accès
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#111",
  fontWeight: 500,
};