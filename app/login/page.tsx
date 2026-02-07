"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMagicLink = async () => {
      const hash = window.location.hash;
      if (!hash) {
        setLoading(false);
        return; // Pas de hash → afficher formulaire
      }

      const params = new URLSearchParams(hash.replace("#", ""));
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (access_token && refresh_token) {
        // Définit la session Supabase
        const { error } = await supabase.auth.setSession({ access_token, refresh_token });
        if (error) {
          console.error("Erreur setSession:", error);
          setMessage("Impossible de se connecter, réessayez.");
          setLoading(false);
          return;
        }

        // Récupère la session complète
        const { data: { session } } = await supabase.auth.getSession();
        const emailUser = session?.user?.email ?? "";

        // Redirection selon email ou param redirect
        const redirectParam = new URLSearchParams(window.location.search).get("redirect");

        if (emailUser === "michael.venne@outlook.com") {
          window.location.href = "/dashboard/admin";
        } else if (redirectParam) {
          window.location.href = redirectParam;
        } else {
          window.location.href = "/dashboard";
        }
      } else {
        setLoading(false); // Pas de token → afficher formulaire
      }
    };

    handleMagicLink();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Envoi du lien…");

    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setMessage(`Erreur : ${error.message}`);
    } else {
      setMessage("Vérifie ton email, un lien de connexion a été envoyé !");
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Connexion en cours…</p>;
  }

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
        padding: "20px",
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
          textAlign: "center",
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
            border: "none",
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
            cursor: "pointer",
          }}
        >
          Recevoir le lien de connexion
        </button>

        {message && <p style={{ marginTop: "20px" }}>{message}</p>}
      </form>
    </div>
  );
}