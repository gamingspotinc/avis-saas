"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleMagicLink = async () => {
      const hash = window.location.hash; // #access_token=...
      if (!hash) return router.push("/login");

      const urlParams = new URLSearchParams(hash.replace("#", "?"));
      const access_token = urlParams.get("access_token");
      const refresh_token = urlParams.get("refresh_token");

      if (!access_token || !refresh_token) return router.push("/login");

      // Crée la session
      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (error) return router.push("/login");

      // Récupère l'utilisateur
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return router.push("/login");

      // Redirige Admin / PME
      if (userData.user.email === "michael.venne@outlook.com") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard");
      }
    };

    handleMagicLink();
  }, [router]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <p>Connexion en cours...</p>
    </div>
  );
}