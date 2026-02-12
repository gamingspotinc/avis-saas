"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // IMPORTANT : ceci lit le #access_token du magic link
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push("/dashboard");
      }
    });
  }, [router]);

  return (
    <div style={{
      height: "100vh",
      background: "url('/5stars.jpg') no-repeat center/cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center"
    }}>
      <div style={{
        background: "rgba(0,0,0,0.7)",
        padding: 50,
        borderRadius: 12
      }}>
        <h1>Bienvenue sur Avis SaaS</h1>
        <a href="/login" style={{
          marginTop: 20,
          display: "inline-block",
          padding: "10px 20px",
          background: "#ff9900",
          borderRadius: 8,
          textDecoration: "none",
          color: "black",
          fontWeight: "bold"
        }}>
          Commencer maintenant
        </a>
      </div>
    </div>
  );
}