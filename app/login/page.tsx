"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://avis-saas-xi.vercel.app/auth/confirm",
      },
    });

    alert("Vérifie ton email pour le lien magique !");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Recevoir le lien magique</button>
    </div>
  );
}