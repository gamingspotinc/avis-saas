"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleMagicLink = async () => {
      const hash = window.location.hash;

      if (hash.includes("access_token")) {
        const { error } = await supabase.auth.setSession({
          access_token: new URLSearchParams(hash.substring(1)).get("access_token")!,
          refresh_token: new URLSearchParams(hash.substring(1)).get("refresh_token")!,
        });

        if (!error) {
          router.replace("/dashboard");
        }
      }
    };

    handleMagicLink();
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://avis-saas-xi.vercel.app/login",
      },
    });
  };

  return (
    <div style={{ padding: 40 }}>
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