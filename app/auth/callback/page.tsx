"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      // Récupérer la session actuelle après le redirect
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Erreur session :", error.message);
        router.push("/login");
        return;
      }

      if (session) {
        // Redirection après connexion
        const redirect = searchParams.get("redirect") || "/dashboard";
        router.push(redirect);
      } else {
        router.push("/login");
      }
    };

    handleAuth();
  }, [router, searchParams]);

  return <p>Connexion en cours...</p>;
}