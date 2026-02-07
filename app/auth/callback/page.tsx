"use client"; // ⚠️ important pour forcer Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic"; // ⚠️ empêche le prerendering

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      // Lit automatiquement le token dans l'URL magic link
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        console.error("Erreur session Supabase:", error?.message);
        router.push("/login");
        return;
      }

      // Redirection selon rôle
      if (session.user.email === "michael.venne@outlook.com") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard");
      }
    };

    handleAuth();
  }, [router]);

  return (
    <p style={{ textAlign: "center", marginTop: "50px" }}>
      Connexion en cours...
    </p>
  );
}