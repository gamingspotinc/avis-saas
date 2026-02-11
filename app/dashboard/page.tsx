import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient"; // <-- IMPORTANT

export default async function Dashboard() {
  const cookieStore = await cookies();

  const supabaseServer = createServerClient(
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
  } = await supabaseServer.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  // On récupère la PME du user connecté
  const { data: companies } = await supabaseServer
    .from("companies")
    .select("*")
    .eq("owner_id", session.user.id)
    .single();

  const companyId = companies?.id;
  const companySlug = companies?.slug;
  const companyName = companies?.name;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <strong>Voici votre lien de partage :</strong>{" "}
          <span style={{ backgroundColor: "#eee", padding: "2px 6px", borderRadius: 4 }}>
            {`https://avis-saas-xi.vercel.app/avis/${companySlug}`}
          </span>
        </div>
        <form action="/api/logout" method="POST">
          <button type="submit" style={{ padding: "6px 12px", cursor: "pointer" }}>
            Déconnexion
          </button>
        </form>
      </div>

      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Bienvenue dans le Dashboard de {companyName} 🎉
      </h1>

      <FeedbackList companyId={companyId} />
    </div>
  );
}

// Component client-side pour récupérer et afficher les feedbacks
function FeedbackList({ companyId }: { companyId: string }) {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data } = await supabase
        .from("feedback")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });

      if (data) setFeedbacks(data);
    };

    fetchFeedback();
  }, [companyId]);

  if (!feedbacks) return <p>Chargement des avis...</p>;

  return (
    <div style={{ marginTop: 40, textAlign: "center" }}>
      <h2>Avis des clients</h2>
      {feedbacks.length === 0 && <p>Aucun avis pour l'instant.</p>}
      {feedbacks.map((f) => (
        <div
          key={f.id}
          style={{
            backgroundColor: "#f5f5f5",
            padding: 12,
            borderRadius: 8,
            marginBottom: 10,
            maxWidth: 600,
            margin: "10px auto",
            textAlign: "left",
          }}
        >
          <p>
            <strong>Commentaire :</strong> {f.comment}
          </p>
          {f.client_name && <p><strong>Nom :</strong> {f.client_name}</p>}
          {f.client_email && <p><strong>Email :</strong> {f.client_email}</p>}
          {f.client_phone && <p><strong>Téléphone :</strong> {f.client_phone}</p>}
          <small style={{ color: "#666" }}>{new Date(f.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}