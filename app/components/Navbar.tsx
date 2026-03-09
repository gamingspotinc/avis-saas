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
    { name: "Industries", href: "/industries" },
    { name: "Fonctionnalités", href: "/fonctionnalites" },
    { name: "À propos", href: "/a-propos" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
          fontSize: "1.3rem",
          whiteSpace: "nowrap",
        }}
      >
        AvisPME
      </Link>

      {/* MENU CENTRE */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {menuItems.map((item) => {
          if (item.name === "Industries") {
            return (
              <div
                key={item.name}
                className="dropdown"
                style={{ fontSize: "1rem", fontWeight: 500 }}
              >
                <span className="dropdown-trigger">
                  {item.name} ▾
                </span>

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
                  ].map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="dropdown-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 12px",
                        fontSize: "1rem",
                        textDecoration: "none",
                        color: "#111",
                      }}
                    >
                      <Image
                        src={iconMap[subItem.name]}
                        alt={`Icône ${subItem.name}`}
                        width={22}
                        height={22}
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
              style={{
                textDecoration: "none",
                color: "#111",
                fontWeight: 500,
                fontSize: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* ACTIONS DROITE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          href="/login"
          style={{
            textDecoration: "none",
            color: "#111",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          Connexion
        </Link>

        <Link
          href="/start"
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            backgroundColor: "#111",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          Demande d’accès
        </Link>
      </div>
    </nav>
  );
}