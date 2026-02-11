"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Si le magic link met une session, on va au dashboard
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push("/dashboard");
      }
    });
  }, [router]);

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://avis-saas-xi.vercel.app/login",
      },
    });

    alert("Vérifie ton email pour le lien magique !");
  };

  return (
    <div
      style={{
        backgroundImage: "url('/5stars.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0,0,0,0.75)",
          padding: 40,
          borderRadius: 12,
          color: "white",
          width: 350,
          textAlign: "center",
          boxShadow: "0 0 25px rgba(0,0,0,0.6)",
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
            padding: 10,
            marginTop: 20,
            borderRadius: 6,
            border: "none",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            marginTop: 20,
            width: "100%",
            padding: 10,
            borderRadius: 6,
            border: "none",
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