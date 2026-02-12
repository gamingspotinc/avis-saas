"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      await supabase.auth.exchangeCodeForSession(window.location.href);
      router.replace("/dashboard");
    };

    handleAuth();
  }, [router]);

  return <p>Connexion en cours...</p>;
}