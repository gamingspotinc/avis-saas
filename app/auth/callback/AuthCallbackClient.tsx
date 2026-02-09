"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Erreur session:", error.message);
          router.push("/login");
          return;
        }

        if (session) {
          const redirect = searchParams.get("redirect") || "/dashboard";
          router.push(redirect);
        } else {
          router.push("/login");
        }
      } catch (err) {
        console.error("Erreur callback Supabase:", err);
        router.push("/login");
      }
    };

    handleAuth();
  }, [router, searchParams]);

  return <p>Connexion en cours...</p>;
}