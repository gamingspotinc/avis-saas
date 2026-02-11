"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  client_name: string | null;
  client_email: string | null;
  client_phone: string | null;
  company_id: string;
  created_at: string;
};

export default function AdminPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [companies, setCompanies] = useState<any[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const { data: feedbackData } = await supabase.from("feedback").select("*");
      const { data: companyData } = await supabase.from("companies").select("*");

      if (feedbackData) setFeedbacks(feedbackData);
      if (companyData) setCompanies(companyData);
    };
    fetchData();
  }, []);

  const filteredFeedbacks = selectedCompany
    ? feedbacks.filter((f) => f.company_id === selectedCompany)
    : feedbacks;

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Feedback</h1>

      <div style={{ marginBottom: 20 }}>
        <label>
          Filtrer par entreprise :{" "}
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Toutes</option>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredFeedbacks.map((f) => (
        <div
          key={f.id}
          style={{
            backgroundColor: "#f5f5f5",
            padding: 12,
            borderRadius: 8,
            marginBottom: 10,
            maxWidth: 600,
          }}
        >
          <p>
            <strong>Commentaire :</strong> {f.comment}
          </p>
          {f.client_name && <p><strong>Nom :</strong> {f.client_name}</p>}
          {f.client_email && <p><strong>Email :</strong> {f.client_email}</p>}
          {f.client_phone && <p><strong>Téléphone :</strong> {f.client_phone}</p>}
          <small style={{ color: "#666" }}>{new Date(f.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}