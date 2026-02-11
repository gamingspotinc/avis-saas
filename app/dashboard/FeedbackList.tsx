"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  created_at: string;
  customer_name?: string;
  customer_phone?: string;
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

  if (!feedbacks.length) return <p>Aucun feedback pour le moment.</p>;

  return (
    <div>
      {feedbacks.map((f) => (
        <div key={f.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <p>{f.comment}</p>
          {f.customer_name && <p>Nom : {f.customer_name}</p>}
          {f.customer_phone && <p>Téléphone : {f.customer_phone}</p>}
          <small>{new Date(f.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}