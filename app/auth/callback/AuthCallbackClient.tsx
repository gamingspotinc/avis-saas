"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackClient() {
  const router = useRouter();

  useEffect(() => {
    const handleMagicLink = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Erreur Magic Link:", error.message);
        router.push("/login");
        return;
      }

      if (session) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    };

    handleMagicLink();
  }, [router]);

  return <p>Connexion en cours...</p>;
}