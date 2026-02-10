"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState("");

  const redirect = searchParams.get("redirect") || "/dashboard";

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.push(redirect);
      }
    });
  }, [redirect, router]);

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/login?redirect=${redirect}`,
      },
    });

    alert("Vérifie ton courriel pour le lien magique.");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Connexion</h1>

      <input
        type="email"
        placeholder="Ton courriel"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <br />
      <br />

      <button onClick={handleLogin} style={{ padding: 10 }}>
        Envoyer le lien magique
      </button>
    </div>
  );
}