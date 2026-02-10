"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/dashboard`,
      },
    });

    alert("Vérifie ton email pour le lien magique");
  };

  return (
    <div>
      <h1>Connexion</h1>
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