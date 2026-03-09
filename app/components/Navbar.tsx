"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    "Autres secteurs": "/icone/icone-autres-secteurs.jpg",
  };

  const menuItems = [
    { name: "Solution", href: "/solution" },
    { name: "Industries", href: "#" },
    { name: "Fonctionnalités", href: "/fonctionnalites" },
    { name: "À propos", href: "/a-propos" },
  ];

  const rightItems = [
    { name: "Accueil", href: "/" },
    { name: "Tarifs", href: "/pricing" },
    { name: "Demande d’accès", href: "/start" },
    { name: "Se Connecter", href: "/login" }, // <-- texte changé ici
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "10px 30px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #eee",
        zIndex: 1000,
        fontFamily: "sans-serif",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#111",
          fontWeight: "bold",
          fontSize: "1.3rem",
          flexShrink: 0,
        }}
      >
        AvisPME
      </Link>

      {/* Menu central */}
      <div style={{ display: "flex", gap: "25px", alignItems: "center", flexShrink: 1, overflow: "visible" }}>
        {menuItems.map((item) => {
          if (item.name === "Industries") {
            return (
              <div
                key={item.name}
                style={{ position: "relative" }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span style={{ fontSize: "1rem", fontWeight: 500, cursor: "pointer", userSelect: "none" }}>
                  {item.name} ▾
                </span>
                {dropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "white",
                      padding: "15px 20px",
                      borderRadius: 10,
                      boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      minWidth: 380,
                      zIndex: 2000,
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
                          padding: "8px 12px",
                          textDecoration: "none",
                          color: "#111",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Image
                          src={iconMap[subItem.name]}
                          alt={`Icône ${subItem.name}`}
                          width={24}
                          height={24}
                        />
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={item.name}
              href={item.href}
              style={{ textDecoration: "none", color: "#111", fontWeight: 500, fontSize: "1rem", whiteSpace: "nowrap" }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Menu droite */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center", flexShrink: 0, paddingRight: "30px" }}>
        {rightItems.map((item, idx) => (
          <Link
            key={item.name}
            href={item.href}
            style={{
              textDecoration: "none",
              fontWeight: item.name === "Demande d’accès" || item.name === "Se Connecter" ? "bold" : 500,
              padding: "8px 12px",
              backgroundColor: item.name === "Demande d’accès" ? "#111" : "transparent",
              color: item.name === "Se Connecter" ? "#111" : item.name === "Demande d’accès" ? "white" : "#111", // <-- texte noir pour Se Connecter
              borderRadius: "8px",
              fontSize: "1rem",
              whiteSpace: "nowrap",
              marginRight: idx === rightItems.length - 1 ? "10px" : "0",
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}