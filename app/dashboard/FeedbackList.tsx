"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  customer_name?: string;
  phone?: string;
  created_at: string;
};

interface Props {
  companyId: string;
}

export default function FeedbackList({ companyId }: Props) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const fetchFeedbacks = async () => {
    const { data } = await supabase
      .from("feedback")
      .select("*")
      .eq("company_id", companyId)
      .order("created_at", { ascending: false });

    if (data) setFeedbacks(data as Feedback[]);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [companyId]);

  if (!feedbacks.length) return <p>Aucun feedback pour le moment.</p>;

  return (
    <div style={{ marginTop: 20 }}>
      {feedbacks.map((f) => (
        <div
          key={f.id}
          style={{
            backgroundColor: "#f1f1f1",
            padding: 15,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <p>{f.comment}</p>
          {f.customer_name && (
            <small>
              Client: {f.customer_name} {f.phone ? `- Tel: ${f.phone}` : ""}
            </small>
          )}
          <br />
          <small>Posté le: {new Date(f.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}