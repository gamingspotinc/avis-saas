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
            <DropdownItem href="/industries/restaurants" label="Restaurants" />
            <DropdownItem href="/industries/dentistes" label="Cliniques dentaires" />
            <DropdownItem href="/industries/garages" label="Garages automobiles" />
            <DropdownItem href="/industries/immobilier" label="Agences immobilières" />
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
          padding-bottom: 15px; /* zone tampon invisible */
        }

        .dropdown-trigger {
          cursor: pointer;
          font-weight: 500;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%; /* collé parfaitement sous Industries */
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

        .dropdown-menu a {
          display: block;
          padding: 10px 20px;
          text-decoration: none;
          color: #111;
          font-size: 0.95rem;
        }

        .dropdown-menu a:hover {
          background: #f5f5f5;
        }
      `}</style>
    </nav>
  );
}

function DropdownItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return <Link href={href}>{label}</Link>;
}

const linkStyle = {
  textDecoration: "none",
  color: "#111",
  fontWeight: 500,
};