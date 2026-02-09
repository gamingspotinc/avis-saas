"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      // ⭐ LA LIGNE QUI MANQUAIT DEPUIS LE DÉBUT
      await supabase.auth.exchangeCodeForSession(window.location.href);

      router.replace("/dashboard");
    };

    handleAuth();
  }, [router]);

  return <p>Connexion en cours...</p>;
}