"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import FeedbackList from "@/components/FeedbackList";
import { useRouter } from "next/navigation";

type Company = {
  id: string;
  name: string;
  slug: string;
};

export default function DashboardPage() {
  const [company, setCompany] = useState<Company | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadCompany = async () => {
      // 1️⃣ On récupère l'utilisateur connecté
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      // 2️⃣ On récupère sa compagnie
      const { data, error } = await supabase
        .from("companies")
        .select("id, name, slug")
        .eq("owner_id", user.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setCompany(data);
    };

    loadCompany();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!company) return <p style={{ padding: 30 }}>Chargement...</p>;

  return (
    <div
      style={{
        padding: 30,
        minHeight: "100vh",
        background: "url('/dashboard.jpg') no-repeat center/cover",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <h1>Dashboard {company.name}</h1>

        <button
          onClick={handleLogout}
          style={{
            background: "#111",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Déconnecter
        </button>
      </div>

      {/* LIEN DE PARTAGE */}
      <div
        style={{
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)",
          padding: 20,
          borderRadius: 10,
          marginBottom: 40,
        }}
      >
        <h2>Voici votre lien de partage :</h2>
        <a
          href={`/avis/${company.slug}`}
          target="_blank"
          style={{ color: "#4da6ff", fontSize: 18 }}
        >
          https://avis-saas-xi.vercel.app/avis/{company.slug}
        </a>
      </div>

      {/* FEEDBACKS */}
      <div
        style={{
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <h2>Commentaires reçus</h2>
        <FeedbackList companyId={company.id} />
      </div>
    </div>
  );
}