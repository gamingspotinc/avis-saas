"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      await supabase.auth.getSession();
      router.replace("/dashboard");
    };

    handleAuth();
  }, [router]);

  return <p style={{ textAlign: "center", marginTop: "50px" }}>Connexion...</p>;
}