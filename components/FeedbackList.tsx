"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  created_at: string;
  is_private: boolean;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
};

export default function FeedbackList({ companyId }: { companyId: string }) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const loadFeedbacks = async () => {
      const { data, error } = await supabase
        .from("feedback")
        .select(`
          id,
          comment,
          created_at,
          is_private,
          customer_name,
          customer_email,
          customer_phone
        `)
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setFeedbacks(data || []);
    };

    loadFeedbacks();
  }, [companyId]);

  if (feedbacks.length === 0) {
    return <p>Aucun commentaire pour le moment.</p>;
  }

  return (
    <div style={{ marginTop: 20 }}>
      {feedbacks.map((fb) => (
        <div
          key={fb.id}
          style={{
            background: "#1a1a1a",
            padding: 20,
            borderRadius: 8,
            marginBottom: 15,
            border: "1px solid #333",
          }}
        >
          <p style={{ marginBottom: 10 }}>
            <strong>Commentaire :</strong> {fb.comment}
          </p>

          <p style={{ fontSize: 12, color: "#aaa" }}>
            {new Date(fb.created_at).toLocaleString()}
          </p>

          {(fb.customer_name || fb.customer_email || fb.customer_phone) && (
            <div style={{ marginTop: 10, fontSize: 14, color: "#ddd" }}>
              <strong>Informations client :</strong>
              {fb.customer_name && <div>Nom : {fb.customer_name}</div>}
              {fb.customer_email && <div>Email : {fb.customer_email}</div>}
              {fb.customer_phone && <div>Téléphone : {fb.customer_phone}</div>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}