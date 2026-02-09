"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      // ⚠️ IMPORTANT : on attend que Supabase termine de charger la session
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.replace("/login");
        return;
      }

      setReady(true);
    };

    init();
  }, []);

  if (!ready) return <p>Chargement du dashboard...</p>;

  return <h1>Bienvenue dans le Dashboard PME</h1>;
}