"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Feedback = { id: string; comment: string; created_at: string };
type Company = { id: string; name: string; slug: string; is_active: boolean; feedbacks?: Feedback[] | null };

export default function AdminDashboard() {
  const router = useRouter();
  const ADMIN_EMAIL = "michael.venne@outlook.com";
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) { console.error(error.message); router.push("/login"); return; }

      const email = session?.user?.email ?? null;
      if (!email) {
        const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
          const mail = session?.user?.email ?? null;
          if (mail) loadDashboard(mail);
          else router.push("/login");
        });
        return () => listener.subscription.unsubscribe();
      }
      loadDashboard(email);
    };

    const loadDashboard = async (email: string | null) => {
      if (!email) { router.push("/login"); return; }
      if (email !== ADMIN_EMAIL) { router.push("/dashboard"); return; }

      const { data, error } = await supabase.from("companies").select(`
        id,name,slug,is_active,feedbacks:feedback(id,comment,created_at)
      `);

      if (error) { console.error(error.message); setCompanies([]); }
      else setCompanies((data as Company[]) || []);
      setLoading(false);
    };

    init();
  }, [router]);

  const handleLogout = async () => { await supabase.auth.signOut(); router.push("/login"); };

  if (loading) return <p style={{ textAlign: "center" }}>Chargement admin...</p>;

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", position: "relative" }}>
      <button onClick={handleLogout} style={{ position: "absolute", top: "20px", right: "20px", padding: "10px 20px", backgroundColor: "#333", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Déconnexion</button>
      <h1>Admin Dashboard</h1>
      {companies.length === 0 ? <p>Aucune company enregistrée.</p> : (
        <ul style={{ marginTop: "20px" }}>
          {companies.map(company => (
            <li key={company.id} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "6px", marginBottom: "20px" }}>
              <strong>{company.name}</strong> ({company.is_active ? "Active ✅" : "Inactive ❌"})
              <br />
              <a href={`/avis/${company.slug}`} target="_blank" style={{ color: "blue" }}>Voir page avis</a>
              {company.feedbacks && company.feedbacks.length > 0 && (
                <div style={{ marginTop: "10px" }}>
                  <h4>Commentaires :</h4>
                  <ul>
                    {company.feedbacks.map(fb => (
                      <li key={fb.id}>{fb.comment} <em>({new Date(fb.created_at).toLocaleString()})</em></li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}