"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://avis-saas-xi.vercel.app/auth/confirm",
      },
    });

    if (error) {
      alert("Erreur lors de l'envoi du lien : " + error.message);
    } else {
      alert("Vérifie ton email pour le lien magique !");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/5stars.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: 40,
          borderRadius: 10,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          minWidth: 300,
        }}
      >
        <h1 style={{ textAlign: "center" }}>Connexion</h1>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 10, borderRadius: 5, border: "none" }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: 10,
            borderRadius: 5,
            border: "none",
            backgroundColor: "#fff",
            color: "#000",
            cursor: "pointer",
          }}
        >
          Recevoir le lien magique
        </button>
      </div>
    </div>
  );
}