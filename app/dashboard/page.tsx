"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/login");
      }
    });
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        Déconnexion
      </button>

      <h1 style={{ textAlign: "center" }}>
        Bienvenue dans le Dashboard PME 🎉
      </h1>
    </div>
  );
}