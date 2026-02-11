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
        emailRedirectTo: `${window.location.origin}/login`, // on revient sur login, implicit flow
      },
    });

    if (error) {
      alert("Erreur : " + error.message);
      return;
    }

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