"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    try {
      await supabase.auth.signInWithOtp({
        email,
        options: {
          // Lien redirige sur le route server-side confirm
          emailRedirectTo: "https://avis-saas-xi.vercel.app/auth/confirm",
        },
      });

      alert("Vérifie ton email pour le lien magique !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi du lien magique.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url(/5stars.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: 40,
          borderRadius: 8,
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Se connecter</h1>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 10, marginTop: 20, width: "100%", borderRadius: 4 }}
        />
        <button
          onClick={handleLogin}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            borderRadius: 4,
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Recevoir le lien magique
        </button>
      </div>
    </div>
  );
}