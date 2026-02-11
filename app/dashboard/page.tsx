import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FeedbackList from "./FeedbackList"; // client component

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
        set(name: string, value: string, options: any) {
          cookieStore.set(name, value, options);
        },
        remove(name: string, options: any) {
          cookieStore.delete(name);
        },
      },
    }
  );

  // Vérifie la session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect("/login");

  // Récupère la PME liée au profil
  const { data: companies } = await supabase
    .from("companies")
    .select("*")
    .eq("owner_id", session.user.id)
    .single();

  if (!companies) redirect("/login"); // si pas de PME, redirige

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <strong>Voici votre lien de partage :</strong>{" "}
          <span>{`${process.env.NEXT_PUBLIC_SITE_URL}/avis/${companies.slug}`}</span>
        </div>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            window.location.href = "/login";
          }}
        >
          Déconnexion
        </button>
      </div>

      <h1>Bienvenue dans le Dashboard {companies.name} 🎉</h1>

      {/* Client Component qui récupère les feedbacks */}
      <FeedbackList companyId={companies.id} />
    </div>
  );
}