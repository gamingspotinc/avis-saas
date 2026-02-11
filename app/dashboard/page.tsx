"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type Feedback = {
  id: string;
  comment: string;
  created_at: string;
};

export default function Dashboard() {
  const router = useRouter();

  const [shareLink, setShareLink] = useState("");
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      // 1️⃣ Trouver le profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("company_id")
        .eq("id", session.user.id)
        .single();

      if (!profile) return;

      // 2️⃣ Trouver le slug de la company
      const { data: company } = await supabase
        .from("companies")
        .select("slug")
        .eq("id", profile.company_id)
        .single();

      if (company?.slug) {
        setShareLink(
          `https://avis-saas-xi.vercel.app/avis/${company.slug}`
        );
      }

      // 3️⃣ Charger feedbacks
      const { data: fb } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });

      if (fb) setFeedbacks(fb);
    };

    init();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 40,
        background: "#f4f4f4",
        fontFamily: "Arial",
      }}
    >
      {/* Logout */}
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 15px",
          borderRadius: 6,
          border: "none",
          cursor: "pointer",
          background: "#222",
          color: "white",
        }}
      >
        Déconnexion
      </button>

      {/* Bloc lien */}
      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          marginBottom: 40,
          maxWidth: 700,
        }}
      >
        <h3>📦 Voici votre lien de partage :</h3>
        <p style={{ wordBreak: "break-all", fontWeight: "bold" }}>
          {shareLink}
        </p>
      </div>

      {/* Feedback */}
      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <h2>Commentaires reçus</h2>

        {feedbacks.length === 0 && (
          <p>Aucun commentaire pour le moment.</p>
        )}

        {feedbacks.map((f) => (
          <div
            key={f.id}
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px 0",
            }}
          >
            <p>{f.comment}</p>
            <small>
              {new Date(f.created_at).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}