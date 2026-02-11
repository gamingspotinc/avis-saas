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
      cookies: await cookies(), // Next 16
    }
  );

  // Échange le code pour créer la session serveur
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Erreur exchangeCodeForSession:", error.message);
    return NextResponse.redirect(`/login?error=${error.message}`);
  }

  // Redirection vers le dashboard
  return NextResponse.redirect("/dashboard");
}