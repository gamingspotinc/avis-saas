"use client";

import { useState } from "react";

export default function StartPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main style={{ padding: "100px 20px", textAlign: "center", fontFamily: "sans-serif" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Demande reçue ✅
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          Merci pour votre intérêt envers AvisPME.
          Nous analysons votre demande et vous contacterons dans les 24 heures
          pour configurer votre système de protection de réputation.
        </p>
      </main>
    );
  }

  return (
    <main style={{ padding: "80px 20px", fontFamily: "sans-serif" }}>
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Demande d’accès stratégique
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
          Chaque entreprise est validée afin d’assurer un service premium.
          Complétez les informations ci-dessous et nous vous contacterons
          personnellement.
        </p>
      </section>

      <section
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#f8f9fb",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <input
            type="text"
            placeholder="Nom de l’entreprise"
            required
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Nom du responsable"
            required
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Adresse courriel"
            required
            style={inputStyle}
          />

          <input
            type="tel"
            placeholder="Téléphone"
            required
            style={inputStyle}
          />

          <select required style={inputStyle}>
            <option value="">Choisissez votre plan</option>
            <option>Essentiel – 49$/mois</option>
            <option>Pro – 99$/mois</option>
            <option>Elite – 149$/mois</option>
          </select>

          <textarea
            placeholder="Parlez-nous brièvement de votre entreprise (optionnel)"
            rows={4}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              padding: "14px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#111",
              color: "white",
            }}
          >
            Soumettre ma demande
          </button>
        </form>
      </section>
    </main>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};