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

      <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
        <Link href="/solution" style={linkStyle}>
          Solution
        </Link>

        {/* DROPDOWN */}
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

      <style jsx>{`
        .dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }

        .dropdown-trigger {
          cursor: pointer;
          font-weight: 500;
          display: inline-block;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          padding: 10px 0;
          min-width: 220px;
          border: 1px solid #eee;
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
          transition: all 0.2s ease;
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .dropdown-item {
          display: block;
          padding: 10px 20px;
          text-decoration: none;
          color: #111;
          font-size: 0.95rem;
          white-space: nowrap;
        }

        .dropdown-item:hover {
          background: #f5f5f5;
        }
      `}</style>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#111",
  fontWeight: 500,
};