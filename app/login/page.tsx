"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Si un magic link met une session → dashboard
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.push("/dashboard");
    });
  }, [router]);

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
    <div
      style={{
        height: "100vh",
        background: "url('/5stars.jpg') no-repeat center/cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)",
          padding: 40,
          borderRadius: 12,
          color: "white",
          textAlign: "center",
          width: 350,
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
            padding: 10,
            width: "100%",
            borderRadius: 6,
            border: "none",
            background: "#ffffff",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Recevoir le lien magique
        </button>
      </div>
    </div>
  );
}