"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

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
    { name: "Industries", href: "/industries", hasDropdown: true },
    { name: "Fonctionnalités", href: "/fonctionnalites" },
    { name: "À propos", href: "/a-propos" },
  ];

  const rightItems = [
    { name: "Accueil", href: "/" },
    { name: "Tarifs", href: "/pricing" },
    { name: "Demande d’accès", href: "/start" },
    { name: "Connexion", href: "/login" },
  ];

  const industriesSub = [
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
      {/* Logo */}
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

      {/* Menu central */}
      <div style={{ display: "flex", gap: "35px", justifyContent: "center", flex: 1 }}>
        {menuItems.map((item) => (
          <div key={item.name} style={{ position: "relative" }}>
            {item.hasDropdown ? (
              <>
                <span
                  style={{ cursor: "pointer", fontWeight: 500 }}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {item.name} ▾
                </span>

                {showDropdown && (
                  <div
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "white",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      borderRadius: 8,
                      marginTop: 10,
                      zIndex: 1000,
                      minWidth: 220,
                      padding: 10,
                    }}
                  >
                    {industriesSub.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "8px 10px",
                          textDecoration: "none",
                          color: "#111",
                          borderRadius: 6,
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "#f2f2f2")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <Image
                          src={iconMap[sub.name]}
                          alt={sub.name}
                          width={24}
                          height={24}
                        />
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Menu droit */}
      <div style={{ display: "flex", gap: "25px", justifyContent: "flex-end" }}>
  {rightItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      style={{
        textDecoration: "none",
        fontWeight:
          item.name === "Demande d’accès" || item.name === "Connexion"
            ? "bold"
            : 500,
        padding: item.name === "Demande d’accès" ? "8px 15px" : undefined,
        backgroundColor: item.name === "Demande d’accès" ? "#111" : undefined,
        color: item.name === "Demande d’accès" ? "white" : "#111", // <- seule propriété color
        borderRadius: item.name === "Demande d’accès" ? "8px" : undefined,
      }}
    >
      {item.name}
    </Link>
  ))}
</div>
    </nav>
  );
}