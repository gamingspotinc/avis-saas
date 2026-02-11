import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Dashboard() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options) {
          cookieStore.set(name, value, options);
        },
        remove(name: string, options) {
          cookieStore.delete(name);
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  // Récupérer la PME de l'utilisateur connecté
  const { data: profile } = await supabase
    .from("profiles")
    .select("company_id")
    .eq("id", session.user.id)
    .single();

  const { data: company } = await supabase
    .from("companies")
    .select("id, name, slug")
    .eq("id", profile?.company_id)
    .single();

  if (!company) {
    return <div>Erreur : PME non trouvée</div>;
  }

  const shareLink = `${process.env.NEXT_PUBLIC_SITE_URL}/avis/${company.slug}`;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <strong>Voici votre lien de partage :</strong>{" "}
          <Link href={shareLink} target="_blank" style={{ color: "blue" }}>
            {shareLink}
          </Link>
        </div>
        <form
          action="/api/logout"
          method="POST"
        >
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              backgroundColor: "#ff4d4f",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Déconnexion
          </button>
        </form>
      </div>

      <h1>Bienvenue sur le Dashboard PME {company.name} 🎉</h1>

      <div style={{ marginTop: 40 }}>
        <h2>Commentaires reçus</h2>
        <FeedbackList companyId={company.id} />
      </div>
    </div>
  );
}

// Composant client pour afficher les commentaires
"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  client_name?: string;
  client_phone?: string;
  created_at: string;
};

function FeedbackList({ companyId }: { companyId: string }) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data } = await supabase
        .from("feedback")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });

      if (data) setFeedbacks(data as Feedback[]);
    };

    fetchFeedback();
  }, [companyId]);

  if (feedbacks.length === 0) return <p>Aucun commentaire pour le moment.</p>;

  return (
    <div>
      {feedbacks.map((f) => (
        <div
          key={f.id}
          style={{
            padding: 12,
            marginBottom: 10,
            border: "1px solid #ccc",
            borderRadius: 6,
            backgroundColor: "#f9f9f9",
          }}
        >
          <p>{f.comment}</p>
          {f.client_name && (
            <small>
              Nom: {f.client_name} {f.client_phone && `| Téléphone: ${f.client_phone}`}
            </small>
          )}
          <br />
          <small>Le {new Date(f.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}