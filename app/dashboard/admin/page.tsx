"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Feedback = { id: string; comment: string; created_at: string };
type Company = { id: string; name: string; slug: string; is_active: boolean; feedbacks?: Feedback[] };

export default function AdminDashboard() {
  const router = useRouter();
  const ADMIN_EMAIL = "michael.venne@outlook.com";
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      if (user.email !== ADMIN_EMAIL) {
        router.push("/dashboard");
        return;
      }

      const { data, error } = await supabase
        .from("companies")
        .select(`id,name,slug,is_active,feedbacks:feedback(id,comment,created_at)`);

      if (error) console.error(error);
      else setCompanies(data || []);

      setLoading(false);
    };

    load();
  }, [router]);

  if (loading) return <p style={{ textAlign: "center" }}>Chargement admin...</p>;

  return (
    <main style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>
      {companies.map((c) => (
        <div key={c.id} style={{ marginTop: 20, padding: 20, border: "1px solid #ddd" }}>
          <h2>{c.name}</h2>
          {c.feedbacks && c.feedbacks.length > 0 && c.feedbacks.map(f => <p key={f.id}>{f.comment}</p>)}
        </div>
      ))}
    </main>
  );
}