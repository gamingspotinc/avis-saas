"use client"; // ⚠️ IMPORTANT pour pouvoir utiliser useSearchParams et supabase.auth.getSession()

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams(); // maintenant ok côté client

  useEffect(() => {
    const handleAuth = async () => {
      // Supabase lit automatiquement le token dans l'URL
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Erreur session Supabase:", error.message);
        router.push("/login");
        return;
      }

      if (!session) {
        router.push("/login");
        return;
      }

      // Redirection selon le rôle
      if (session.user.email === "michael.venne@outlook.com") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard");
      }
    };

    handleAuth();
  }, [router, searchParams]);

  return <p style={{ textAlign: "center", marginTop: "50px" }}>Connexion en cours...</p>;
}