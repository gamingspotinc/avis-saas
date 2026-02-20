"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 50px",
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

      <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
        <Link href="/solution" style={linkStyle}>
          Solution
        </Link>

        <div className="dropdown">
          <span className="dropdown-trigger">
            Industries ▾
          </span>

          <div className="dropdown-menu">
            <Link href="/industries/restaurants" className="dropdown-item">
              Restaurants
            </Link>

            <Link href="/industries/dentistes" className="dropdown-item">
              Cliniques dentaires
            </Link>

            <Link href="/industries/garages" className="dropdown-item">
              Garages automobiles
            </Link>

            <Link href="/industries/immobilier" className="dropdown-item">
              Agences immobilières
            </Link>
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