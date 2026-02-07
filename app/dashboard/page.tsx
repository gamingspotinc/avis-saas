"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Feedback = { id: string; comment: string; created_at: string };
type Company = { id: string; name: string; slug: string; is_active: boolean; feedbacks: Feedback[] };

export default function DashboardPage() {
  const router = useRouter();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("companies")
        .select(`id,name,slug,is_active,feedbacks:feedback(id,comment,created_at)`)
        .eq("owner_id", session.user.id);

      if (error) console.error(error);
      else setCompanies(data || []);

      setLoading(false);
    };

    init();
  }, [router]);

  if (loading) return <p style={{ textAlign: "center" }}>Chargement...</p>;

  return (
    <main style={{ padding: 40 }}>
      <h1>Bienvenue sur votre Dashboard</h1>
      {companies.map((company) => (
        <div key={company.id} style={{ marginTop: 20, padding: 20, border: "1px solid #ddd" }}>
          <h2>{company.name}</h2>
          {company.feedbacks.length === 0 ? <p>Aucun feedback</p> : company.feedbacks.map(fb => <p key={fb.id}>{fb.comment}</p>)}
        </div>
      ))}
    </main>
  );
}