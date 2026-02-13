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
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

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
        minHeight: "100vh",
        padding: 40,
        fontFamily: "sans-serif",
        background: "#111",
        color: "white",
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
        <h1 style={{ fontSize: "28px" }}>
          Dashboard {company.name}
        </h1>

        <button
          onClick={handleLogout}
          style={{
            background: "#000",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            border: "1px solid #444",
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
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
          padding: 25,
          borderRadius: 12,
          marginBottom: 30,
          border: "1px solid #333",
        }}
      >
        <h2>Voici votre lien de partage :</h2>
        <a
          href={`/avis/${company.slug}`}
          target="_blank"
          style={{
            color: "#4da6ff",
            fontSize: 18,
            wordBreak: "break-all",
          }}
        >
          https://avis-saas-xi.vercel.app/avis/{company.slug}
        </a>
      </div>

      {/* FEEDBACKS */}
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
          padding: 25,
          borderRadius: 12,
          border: "1px solid #333",
        }}
      >
        <h2>Commentaires reçus</h2>
        <FeedbackList companyId={company.id} />
      </div>
    </div>
  );
}