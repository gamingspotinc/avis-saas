"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const hash = window.location.hash;

      if (hash) {
        const { error } = await supabase.auth.exchangeCodeForSession(
          window.location.href
        );

        if (error) {
          console.error(error.message);
          router.push("/login");
          return;
        }

        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    };

    handleAuth();
  }, [router]);

  return <p>Connexion en cours...</p>;
}