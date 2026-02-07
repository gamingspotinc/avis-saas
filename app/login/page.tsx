"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleMagicLink = async () => {
      const hash = window.location.hash;
      if (!hash) return;

      const params = new URLSearchParams(hash.replace("#", ""));
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (access_token && refresh_token) {
        await supabase.auth.setSession({ access_token, refresh_token });
        const { data: { session } } = await supabase.auth.getSession();
        const email = session?.user?.email ?? "";

        // Redirection selon redirect param ou email
        const redirect = new URLSearchParams(window.location.search).get("redirect");
        if (redirect) {
          window.location.href = redirect;
        } else if (email === "michael.venne@outlook.com") {
          window.location.href = "/dashboard/admin";
        } else {
          window.location.href = "/dashboard";
        }
      }
    };

    handleMagicLink();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setMessage(`Erreur : ${error.message}`);
    } else {
      setMessage("Vérifie ton email, un lien de connexion a été envoyé !");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("/5stars.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px"
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: "40px",
          borderRadius: "10px",
          color: "white",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center"
        }}
      >
        <h1>Connexion PME</h1>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "20px 0",
            borderRadius: "5px",
            border: "none"
          }}
          required
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Recevoir le lien de connexion
        </button>

        {message && <p style={{ marginTop: "20px" }}>{message}</p>}
      </form>
    </div>
  );
}