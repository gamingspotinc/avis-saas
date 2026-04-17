import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookies) {
          cookies.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // 🔥 IMPORTANT: on récupère user proprement
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // ❗ sécurité : si erreur Supabase → ne bloque pas
  if (error) {
    return res;
  }

  // 🔐 protection dashboard uniquement
  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboard && !user) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};