"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleMagicLink = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        router.push("/login");
        return;
      }

      // Si connecté → dashboard
      router.push("/dashboard");
    };

    handleMagicLink();
  }, [router]);

  return <p style={{ textAlign: "center", marginTop: "50px" }}>Connexion...</p>;
}