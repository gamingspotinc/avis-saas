"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Erreur lors de la déconnexion :", error.message);
    } else {
      router.push("/login"); // redirige vers login après déconnexion
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenue dans le Dashboard PME</h1>
      <button
        onClick={handleSignOut}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Déconnexion
      </button>
    </div>
  );
}