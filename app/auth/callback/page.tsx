"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      // Écoute l'état de connexion
      supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
          const redirect = searchParams.get("redirect") || "/dashboard";
          router.push(redirect);
        } else {
          router.push("/login");
        }
      });
    };

    handleAuth();
  }, [router, searchParams]);

  return (
    <p style={{ textAlign: "center", marginTop: "40px" }}>
      Connexion en cours...
    </p>
  );
}