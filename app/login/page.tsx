"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/login`,
      },
    });
    alert("Vérifie ton email pour le lien magique !");
  };

  useEffect(() => {
    // Redirige automatiquement vers dashboard si la session existe
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.push("/dashboard");
    });
  }, [router]);

  return (
    <div
      style={{
        backgroundImage: "url(/5stars.jpg)",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: 40,
          borderRadius: 10,
          textAlign: "center",
          color: "#fff",
          minWidth: 320,
        }}
      >
        <h1>Se connecter</h1>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: 10,
            width: "100%",
            borderRadius: 5,
            border: "none",
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Recevoir le lien magique
        </button>
      </div>
    </div>
  );
}