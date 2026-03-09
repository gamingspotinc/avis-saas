"use client";

import { useState } from "react";

export default function StartPage() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Nous vous contacterons sous peu.");
    setFormData({
      company: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <main style={{ fontFamily: "sans-serif", paddingTop: "90px" }}>
      {/* HERO / FORM SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1521790360280-3b3e2b5e9b6f?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "50px",
            borderRadius: "18px",
            maxWidth: "500px",
            width: "100%",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "15px" }}>
            Protégez votre entreprise
          </h1>

          <p
            style={{
              textAlign: "center",
              marginBottom: "35px",
              color: "#555",
            }}
          >
            Remplissez ce formulaire et nous vous contacterons pour activer
            votre accès AvisPME.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="company"
              placeholder="Nom de l'entreprise"
              value={formData.company}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "15px",
                backgroundColor: "#111",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Être contacté
            </button>
          </form>
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