"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    alert("Connexion simulée (auth à connecter plus tard)");
  };

  return (
    <main style={{ fontFamily: "sans-serif", paddingTop: "90px" }}>
      
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.95)",
          color: "white",
          zIndex: 1000,
        }}
      >
        <h3 style={{ margin: 0 }}>AvisPME</h3>

        <div style={{ display: "flex", gap: "25px" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Accueil
          </Link>

          <Link href="/pricing" style={{ color: "white", textDecoration: "none" }}>
            Tarifs
          </Link>

          <Link href="/start" style={{ color: "white", textDecoration: "none" }}>
            Demande d’accès
          </Link>
        </div>
      </nav>

      {/* LOGIN SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8f9fb",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "50px",
            borderRadius: "18px",
            maxWidth: "400px",
            width: "100%",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
            Connexion
          </h1>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "10px",
                backgroundColor: "#111",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Se connecter
            </button>
          </form>

          {/* SECTION CONTACT */}
          <div style={{ marginTop: "35px", textAlign: "center", fontSize: "0.9rem", color: "#555" }}>
            <p style={{ fontWeight: "bold" }}>
              Vous n'avez pas encore d'accès ?
            </p>
            <p>
              Faites une <Link href="/start">demande d’accès</Link> ou contactez-nous.
            </p>
            <p>📧 Michael.venne@outlook.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "1rem",
};