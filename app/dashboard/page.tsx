import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FeedbackList from "./FeedbackList";

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

  // Récupération de la session côté serveur
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Si pas de session → reste sur la page login côté client
  if (!session) {
    redirect("/login"); // ok si tu es sûr que login ne redirige pas automatiquement
  }

  const { data: companies } = await supabase
    .from("companies")
    .select("*")
    .eq("owner_id", session.user.id)
    .single();

  if (!companies) {
    // Si la PME n'existe pas pour cet utilisateur, reste sur dashboard vide ou login
    redirect("/login");
  }

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
      <FeedbackList companyId={companies.id} />
    </div>
  );
}