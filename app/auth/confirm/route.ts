import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code"); // PKCE code

  if (!code) {
    return NextResponse.redirect("/login?error=missing_code");
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: await cookies(),
    }
  );

  // Échange le code PKCE pour créer la session serveur
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Erreur exchangeCodeForSession:", error.message);
    return NextResponse.redirect(`/login?error=${error.message}`);
  }

  // Redirige vers le dashboard une fois la session créée
  return NextResponse.redirect("/dashboard");
}