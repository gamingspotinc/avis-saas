"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(
        window.location.href
      );

      if (error) {
        console.error(error);
        router.replace("/login");
        return;
      }

      router.replace("/dashboard");
    };

    handleAuth();
  }, []);

  return <p>Connexion en cours...</p>;
}