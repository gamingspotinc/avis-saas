"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackClient() {
  const router = useRouter();

  useEffect(() => {
    async function handleCallback() {
      // v2: utiliser supabase.auth.getSession() après que le Magic Link soit cliqué
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Erreur session Magic Link:", error.message);
        router.push("/login");
        return;
      }

      if (data.session) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    }

    handleCallback();
  }, [router]);

  return <p>Connexion en cours...</p>;
}