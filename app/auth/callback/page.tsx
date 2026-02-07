"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      // Supabase v2 met à jour la session automatiquement via magic link
      const {
        data: { session },
        error,
      } = await supabase.auth.getSessionFromUrl({
        storeSession: true,
      });

      if (error) {
        console.error("Erreur magic link:", error);
        router.push("/login");
        return;
      }

      const redirect = searchParams.get("redirect") || "/dashboard";
      router.push(redirect);
    };

    handleAuth();
  }, [router, searchParams]);

  return (
    <p style={{ textAlign: "center", marginTop: "40px" }}>
      Connexion en cours...
    </p>
  );
}