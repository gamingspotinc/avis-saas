"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

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
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/5stars.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Overlay noir avec blur */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
        }}
      ></div>

      {/* Formulaire centré */}
      <div
        style={{
          position: "relative",
          padding: 40,
          border: "2px solid black",
          borderRadius: 10,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 300,
          color: "white",
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