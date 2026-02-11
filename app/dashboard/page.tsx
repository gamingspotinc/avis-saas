"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace("/login");
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Bienvenue dans le Dashboard PME 🎉</h1>
      <button
        onClick={handleLogout}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          borderRadius: 5,
          border: "none",
          backgroundColor: "#000",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Déconnexion
      </button>
    </div>
  );
}