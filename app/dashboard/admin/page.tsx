"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type Company = {
  id: string;
  name: string;
};

type Feedback = {
  id: string;
  content: string;
  created_at: string;
  company_id: string;
};

export default function AdminPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | "all">("all");
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  // Vérification admin
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || session.user.email !== "Michael.venne@outlook.com") {
        router.replace("/login");
      } else {
        setIsAdmin(true);
        setLoading(false);
      }
    };
    checkAdmin();
  }, [router]);

  // PME
  useEffect(() => {
    if (!isAdmin) return;
    const fetchCompanies = async () => {
      const { data } = await supabase.from("companies").select("*");
      if (data) setCompanies(data);
    };
    fetchCompanies();
  }, [isAdmin]);

  // Feedbacks
  useEffect(() => {
    if (!isAdmin) return;
    const fetchFeedbacks = async () => {
      setLoading(true);
      let query = supabase.from("feedback").select("*").order("created_at", { ascending: false });
      if (selectedCompanyId !== "all") {
        query = query.eq("company_id", selectedCompanyId);
      }
      const { data } = await query;
      if (data) setFeedbacks(data as Feedback[]);
      setLoading(false);
    };
    fetchFeedbacks();
  }, [selectedCompanyId, isAdmin]);

  if (loading) return <p>Chargement...</p>;
  if (!isAdmin) return null;

  return (
    <div style={{ padding: 20, minHeight: "100vh" }}>
      <h1>Admin Dashboard</h1>

      <div style={{ margin: "20px 0" }}>
        <label htmlFor="companySelect" style={{ marginRight: 10, fontWeight: "bold" }}>
          Filtrer par PME :
        </label>
        <select
          id="companySelect"
          value={selectedCompanyId}
          onChange={(e) => setSelectedCompanyId(e.target.value)}
          style={{ padding: 5, borderRadius: 5, border: "1px solid #ccc" }}
        >
          <option value="all">Toutes les PME</option>
          {companies.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Chargement des feedbacks...</p>
      ) : feedbacks.length === 0 ? (
        <p>Aucun feedback trouvé pour cette PME.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {feedbacks.map((f) => (
            <div
              key={f.id}
              style={{
                padding: 10,
                border: "1px solid #ccc",
                borderRadius: 5,
                backgroundColor: "#f9f9f9",
              }}
            >
              <strong>{companies.find((c) => c.id === f.company_id)?.name || "PME inconnue"}</strong>
              <p>{f.content}</p>
              <small>{new Date(f.created_at).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}