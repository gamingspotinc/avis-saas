"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
      },
    });

    if (error) {
      alert("Erreur lors de l'envoi du lien magique : " + error.message);
    } else {
      alert("Vérifie ton email pour le lien magique !");
    }
  };

  // On **supprime la redirection automatique** pour éviter la boucle
  useEffect(() => {
    // Optionnel : on peut afficher un message si déjà connecté
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        console.log("Déjà connecté, tu peux aller vers /dashboard");
        // On ne fait pas router.push ici
      }
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(/5stars.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: 40,
          borderRadius: 10,
          color: "white",
        }}
      >
        <h1>Se connecter</h1>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 10, marginTop: 10, width: "100%" }}
        />
        <button
          onClick={handleLogin}
          style={{
            marginTop: 20,
            width: "100%",
            padding: 10,
            backgroundColor: "#FFD700",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Recevoir le lien magique
        </button>
      </div>
    </div>
  );
}