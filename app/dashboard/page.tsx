"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type Comment = {
  id: string;
  content: string;
  created_at: string;
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const router = useRouter();

  const shareLink = `${window.location.origin}/review/pm?companyId=123`; // changer avec id réel PME

  // Vérifie la session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.replace("/login");
      else setLoading(false);
    });

    fetchComments();
  }, [router]);

  // Fetch des commentaires depuis Supabase
  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments") // table comments
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setComments(data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    const { error } = await supabase.from("comments").insert([
      {
        content: newComment,
        created_at: new Date().toISOString(),
      },
    ]);
    if (!error) {
      setNewComment("");
      fetchComments();
    }
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <div style={{ padding: 20, minHeight: "100vh", position: "relative" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <div style={{ backgroundColor: "#eee", padding: 10, borderRadius: 5 }}>
          <strong>Voici votre lien de partage :</strong>{" "}
          <span style={{ wordBreak: "break-all" }}>{shareLink}</span>
        </div>

        <button
          onClick={handleLogout}
          style={{
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

      {/* Zone commentaires */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Commentaires clients</h2>

        <div style={{ marginBottom: 20, width: "50%" }}>
          <input
            type="text"
            placeholder="Écrire un commentaire"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{
              padding: 10,
              width: "100%",
              borderRadius: 5,
              border: "1px solid #ccc",
              marginBottom: 10,
            }}
          />
          <button
            onClick={handleAddComment}
            style={{
              padding: 10,
              width: "100%",
              borderRadius: 5,
              backgroundColor: "#000",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Ajouter commentaire
          </button>
        </div>

        <div style={{ width: "50%" }}>
          {comments.map((c) => (
            <div
              key={c.id}
              style={{
                padding: 10,
                marginBottom: 10,
                border: "1px solid #ccc",
                borderRadius: 5,
                backgroundColor: "#f9f9f9",
              }}
            >
              {c.content} <small>({new Date(c.created_at).toLocaleString()})</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}