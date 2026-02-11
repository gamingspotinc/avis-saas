"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/login");
      }
    });
  }, [router]);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Bienvenue dans le Dashboard PME</h1>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  );
}