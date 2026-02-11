"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  // Redirection automatique si session détectée
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.replace("/dashboard");
    });
  }, [router]);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    if (error) {
      alert("Erreur : " + error.message);
      return;
    }

    alert("Vérifie ton email pour le lien magique !");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "url('/5stars.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Formulaire encadré */}
      <div
        style={{
          padding: 40,
          border: "2px solid black",
          borderRadius: 10,
          backgroundColor: "rgba(255,255,255,0.85)", // semi-transparent pour voir le background
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 300,
        }}
      >
        <h1 style={{ marginBottom: 20 }}>Login</h1>

        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: 10,
            width: "100%",
            marginBottom: 20,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            padding: 10,
            width: "100%",
            borderRadius: 5,
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Recevoir le lien magique
        </button>
      </div>
    </div>
  );
}