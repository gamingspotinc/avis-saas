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

      // 1️⃣ Trouver la company du user
      const { data: profile } = await supabase
  .from("profiles")
  .select("company_id, companies(slug)")
  .eq("id", session.user.id)
  .single();

const slug = profile?.companies?.[0]?.slug;

if (slug) {
  setShareLink(`https://avis-saas-xi.vercel.app/avis/${slug}`);
}

      // 2️⃣ Charger les feedbacks (RLS protège déjà)
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
    <div style={{ padding: 40 }}>
      {/* Bouton logout */}
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

      {/* Lien de partage */}
      <div style={{ marginBottom: 40 }}>
        <h3>📦 Voici votre lien de partage :</h3>
        <a href={shareLink} target="_blank">
          {shareLink}
        </a>
      </div>

      {/* Feedback au centre */}
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2>Commentaires reçus</h2>

        {feedbacks.length === 0 && <p>Aucun commentaire pour le moment.</p>}

        {feedbacks.map((f) => (
          <div
            key={f.id}
            style={{
              border: "1px solid #ccc",
              padding: 15,
              borderRadius: 8,
              marginTop: 15,
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