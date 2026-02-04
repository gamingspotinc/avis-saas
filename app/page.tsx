"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        router.push("/dashboard");
      }
    };

    check();
  }, [router]);

  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>AvisPME</h1>
      <p>Permet aux garages et PME de recevoir plus d'avis clients sans effort</p>
      <a href="/login">Commencer maintenant</a>
    </main>
  );
}