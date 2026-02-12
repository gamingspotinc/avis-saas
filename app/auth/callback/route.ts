import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export async function GET(req: Request) {
  // Supabase va automatiquement détecter le token dans l'URL
  // detectSessionInUrl = true dans supabaseClient
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    // On peut sauvegarder les cookies si besoin, sinon juste rediriger
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}