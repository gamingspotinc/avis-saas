"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type Feedback = {
  id: string;
  comment: string;
  client_name?: string;
  client_email?: string;
  client_phone?: string;
  created_at: string;
};

type Company = {
  id: string;
  name: string;
  slug: string;
};

export default function DashboardPage() {
  const [company, setCompany] = useState<Company | null>(null);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Récupérer le user connecté
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      // Vérifier si admin
      const isAdmin = user.email === "Michael.venne@outlook.com";

      // Récupérer la PME associée (si pas admin)
      let companyData: Company | null = null;
      if (!isAdmin) {
        const { data: companies, error } = await supabase
          .from("companies")
          .select("*")
          .eq("owner_id", user.id)
          .single();

        if (error) {
          console.error(error);
          setLoading(false);
          return;
        }
        companyData = companies;
        setCompany(companyData);
      }

      // Récupérer les feedbacks
      let feedbackData: Feedback[] = [];
      if (isAdmin) {
        const { data, error } = await supabase
          .from("feedback")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) {
          console.error(error);
          setLoading(false);
          return;
        }
        feedbackData = data || [];
      } else if (companyData) {
        const { data, error } = await supabase
          .from("feedback")
          .select("*")
          .eq("company_id", companyData.id)
          .order("created_at", { ascending: false });
        if (error) {
          console.error(error);
          setLoading(false);
          return;
        }
        feedbackData = data || [];
      }

      setFeedbacks(feedbackData);
      setLoading(false);
    };

    fetchData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) return <p style={{ padding: 20 }}>Chargement...</p>;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        {company && (
          <div>
            <strong>Voici votre lien de partage :</strong>{" "}
            <a
              href={`https://avis-saas-xi.vercel.app/avis/${company.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://avis-saas-xi.vercel.app/avis/{company.slug}
            </a>
          </div>
        )}
        <button onClick={handleLogout} style={{ cursor: "pointer" }}>
          Déconnexion
        </button>
      </div>

      <h2>Feedbacks</h2>
      {feedbacks.length === 0 && <p>Aucun feedback pour le moment.</p>}
      {feedbacks.map((f) => (
        <div key={f.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <p>{f.comment}</p>
          {(f.client_name || f.client_email || f.client_phone) && (
            <p style={{ fontSize: 12, color: "#555" }}>
              {f.client_name && `Nom: ${f.client_name} `}
              {f.client_email && `Email: ${f.client_email} `}
              {f.client_phone && `Téléphone: ${f.client_phone}`}
            </p>
          )}
          <small style={{ color: "#999" }}>{new Date(f.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}