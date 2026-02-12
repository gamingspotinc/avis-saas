"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://avis-saas-xi.vercel.app/",
      },
    });

    alert("Vérifie ton email pour le lien magique !");
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "url('/5stars.jpg') no-repeat center/cover",
      color: "#fff"
    }}>
      <div style={{
        padding: 40,
        background: "rgba(0,0,0,0.7)",
        borderRadius: 12,
        textAlign: "center"
      }}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 8, marginBottom: 12, width: "100%" }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: "8px 16px",
            background: "#ff9900",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Recevoir le lien magique
        </button>
      </div>
    </div>
  );
}