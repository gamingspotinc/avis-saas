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

  const menuItems = [
    { name: "Solution", href: "/solution" },
    { name: "Industries", href: "/industries", dropdown: true },
    { name: "Fonctionnalités", href: "/fonctionnalites" },
    { name: "À propos", href: "/a-propos" },
  ];

  const rightItems = [
    { name: "Accueil", href: "/" },
    { name: "Tarif", href: "/pricing" },
    { name: "Demande d’accès", href: "/start" },
    { name: "Connexion", href: "/login" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #eee",
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <div style={{ flex: "0 0 auto" }}>
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
      </div>

      {/* MENU CENTRE */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: "35px" }}>
        {menuItems.map((item) => {
          if (item.dropdown) {
            return (
              <div key={item.name} className="dropdown" style={{ position: "relative" }}>
                <span
                  style={{ cursor: "pointer", fontWeight: 500, fontSize: "1rem" }}
                >
                  {item.name} ▾
                </span>
                <div
                  className="dropdown-menu"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "white",
                    minWidth: "250px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    borderRadius: 8,
                    padding: "10px 0",
                    display: "none",
                  }}
                >
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
                  ].map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 15px",
                        color: "#111",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Image src={iconMap[subItem.name]} alt="" width={24} height={24} />
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <Link
              key={item.name}
              href={item.href}
              style={{ textDecoration: "none", color: "#111", fontWeight: 500, fontSize: "1rem" }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* MENU DROITE */}
      <div style={{ flex: "0 0 auto", display: "flex", gap: "15px", alignItems: "center" }}>
        {rightItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            style={{
              textDecoration: "none",
              fontWeight: item.name === "Demande d’accès" || item.name === "Connexion" ? "bold" : 500,
              padding: "8px 15px",
              backgroundColor: item.name === "Demande d’accès" ? "#111" : "transparent",
              color: item.name === "Demande d’accès" || item.name === "Connexion" ? "white" : "#111",
              borderRadius: 8,
              whiteSpace: "nowrap",
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}