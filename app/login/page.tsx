"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {

  useEffect(() => {
    const handleMagicLink = async () => {
      const hash = window.location.hash; // récupère #access_token...
      if (!hash) return;

      const params = new URLSearchParams(hash.replace("#", ""));
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (access_token && refresh_token) {
        const { error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (error) {
          alert("Erreur connexion : " + error.message);
          console.error(error);
          return;
        }

        const { data: { session } } = await supabase.auth.getSession();
        const email = session?.user?.email ?? "";

        if (email === "michael.venne@outlook.com") {
          window.location.href = "/dashboard/admin";
        } else {
          window.location.href = "/dashboard";
        }
      }
    };

    handleMagicLink();
  }, []);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Connexion PME</h1>
      <p>Vérifie ton email pour te connecter.</p>
    </div>
  );
}