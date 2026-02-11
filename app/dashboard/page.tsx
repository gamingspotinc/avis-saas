import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

  const companyId = session.user.id; // Ici on suppose que chaque PME est liée à son profile

  // Générer le lien de partage
  const shareLink = `https://avis-saas-xi.vercel.app/avis/${companyId}`;

  // Récupérer les feedbacks (Server Side)
  const { data: feedbacks } = await supabase
    .from("feedback")
    .select("*")
    .eq("company_id", companyId)
    .order("created_at", { ascending: false });

  return (
    <div style={{ minHeight: "100vh", padding: 20, position: "relative" }}>
      {/* Déconnexion */}
      <form
        action="/api/logout"
        method="POST"
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            borderRadius: 5,
            border: "none",
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Déconnexion
        </button>
      </form>

      {/* Lien de partage */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px",
          borderRadius: 5,
        }}
      >
        <small>Voici votre lien de partage :</small>
        <div style={{ wordBreak: "break-all" }}>{shareLink}</div>
      </div>

      {/* Commentaires */}
      <div
        style={{
          maxWidth: 600,
          margin: "100px auto 0",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {feedbacks && feedbacks.length > 0 ? (
          feedbacks.map((f: any) => (
            <div
              key={f.id}
              style={{
                padding: 15,
                borderRadius: 5,
                border: "1px solid #ccc",
                backgroundColor: "rgba(0,0,0,0.05)",
              }}
            >
              <p>{f.content}</p>
              <small>{new Date(f.created_at).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p>Aucun commentaire pour le moment.</p>
        )}
      </div>
    </div>
  );
}