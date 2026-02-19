"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showIndustries, setShowIndustries] = useState(false);

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

      {/* Menu */}
      <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
        <Link href="/solution" style={linkStyle}>
          Solution
        </Link>

        {/* INDUSTRIES DROPDOWN */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowIndustries(true)}
          onMouseLeave={() => setShowIndustries(false)}
        >
          <span style={{ ...linkStyle, cursor: "pointer" }}>
            Industries ▾
          </span>

          {showIndustries && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: 0,
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                padding: "15px 0",
                minWidth: "220px",
                border: "1px solid #eee",
              }}
            >
              <DropdownItem
                href="/industries/restaurants"
                label="Restaurants"
              />
              <DropdownItem
                href="/industries/dentistes"
                label="Cliniques dentaires"
              />
              <DropdownItem
                href="/industries/garages"
                label="Garages automobiles"
              />
              <DropdownItem
                href="/industries/immobilier"
                label="Agences immobilières"
              />
            </div>
          )}
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

function DropdownItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: "10px 20px",
        textDecoration: "none",
        color: "#111",
        fontSize: "0.95rem",
      }}
    >
      {label}
    </Link>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#111",
  fontWeight: 500,
};