"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        router.push("/dashboard");
      }
    };

    checkUser();
  }, [router]);

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });

    alert("Vérifie ton email pour te connecter.");
  };

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1>Connexion PME</h1>

      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", marginTop: "20px", width: "250px" }}
      />

      <button
        onClick={handleLogin}
        style={{ marginTop: "15px", padding: "10px 20px" }}
      >
        Recevoir le lien de connexion
      </button>
    </main>
  );
}