import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set: (name: string, value: string, options: any) => {
          cookieStore.set({ name, value, ...options });
        },
        remove: (name: string, options: any) => {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );

  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  if (!token_hash || !type) {
    return NextResponse.redirect("https://avis-saas-xi.vercel.app/login");
  }

  await supabase.auth.verifyOtp({
    type: type as "email" | "recovery" | "invite",
    token_hash,
  });

  return NextResponse.redirect("https://avis-saas-xi.vercel.app/dashboard");
}