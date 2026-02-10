"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        router.replace(redirect);
      }
    };

    checkSession();
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://avis-saas-xi.vercel.app/login",
      },
    });

    alert("Vérifie ton email");
  };

  return (
    <div>
      <h1>Connexion</h1>

      <input
        type="email"
        placeholder="Ton email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>
        Recevoir le lien magique
      </button>
    </div>
  );
}