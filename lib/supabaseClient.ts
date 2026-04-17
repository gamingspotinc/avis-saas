"use client";

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: true,        // 🔥 garde la session
      autoRefreshToken: true,      // 🔥 refresh auto
      detectSessionInUrl: true,    // 🔥 TRÈS IMPORTANT (magic link)
    },
  }
);