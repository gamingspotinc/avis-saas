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

  const mainMenu = [
    { name: "Solution", href: "/solution" },
    { name: "Industries", href: "/industries" },
    { name: "Fonctionnalités", href: "/fonctionnalites" },
    { name: "À propos", href: "/a-propos" },
  ];

  const rightMenu = [
    { name: "Accueil", href: "/" },
    { name: "Tarifs", href: "/pricing" },
    { name: "Demande d’accès", href: "/start", isButton: true },
    { name: "Connexion", href: "/login", isButton: true },
  ];

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
      {/* LOGO */}
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

      {/* MENU PRINCIPAL AU CENTRE */}
      <div style={{ display: "flex", gap: "35px", alignItems: "center", justifyContent: "center", flex: 1 }}>
        {mainMenu.map((item) => {
          if (item.name === "Industries") {
            return (
              <div key={item.name} className="dropdown" style={{ position: "relative" }}>
                <span style={{ cursor: "pointer", fontWeight: 500 }}>
                  {item.name} ▾
                </span>
                <div
                  className="dropdown-menu"
                  style={{
                    position: "absolute",
                    top: "120%",
                    left: 0,
                    backgroundColor: "white",
                    borderRadius: 8,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    padding: "10px 0",
                    display: "none", // affiché via hover css
                    minWidth: 200,
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
                        gap: 10,
                        padding: "8px 15px",
                        textDecoration: "none",
                        color: "#111",
                        fontSize: "0.95rem",
                      }}
                    >
                      <Image
                        src={iconMap[subItem.name]}
                        alt={subItem.name}
                        width={20}
                        height={20}
                      />
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
              style={{ textDecoration: "none", color: "#111", fontWeight: 500 }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* MENU A DROITE */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {rightMenu.map((item) =>
          item.isButton ? (
            <Link
              key={item.name}
              href={item.href}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                backgroundColor: "#111",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "0.95rem",
              }}
            >
              {item.name}
            </Link>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#111",
                fontWeight: 500,
                fontSize: "0.95rem",
              }}
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}