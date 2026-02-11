"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  client_name?: string;
  client_phone?: string;
  created_at: string;
};

export default function FeedbackList({ companyId }: { companyId: string }) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data } = await supabase
        .from("feedback")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });

      if (data) setFeedbacks(data as Feedback[]);
    };

    fetchFeedback();
  }, [companyId]);

  if (feedbacks.length === 0) return <p>Aucun commentaire pour le moment.</p>;

  return (
    <div>
      {feedbacks.map((f) => (
        <div
          key={f.id}
          style={{
            padding: 12,
            marginBottom: 10,
            border: "1px solid #ccc",
            borderRadius: 6,
            backgroundColor: "#f9f9f9",
          }}
        >
          <p>{f.comment}</p>
          {f.client_name && (
            <small>
              Nom: {f.client_name} {f.client_phone && `| Téléphone: ${f.client_phone}`}
            </small>
          )}
          <br />
          <small>Le {new Date(f.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}