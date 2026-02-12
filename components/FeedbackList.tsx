"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  company_id: string;
  rating: number;
  comment: string | null;
  client_name?: string | null;
  client_email?: string | null;
  client_phone?: string | null;
};

interface FeedbackListProps {
  companyId: string;
}

export default function FeedbackList({ companyId }: FeedbackListProps) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erreur récupération feedbacks:", error.message);
        setLoading(false);
        return;
      }

      setFeedbacks(data as Feedback[]);
      setLoading(false);
    };

    fetchFeedbacks();
  }, [companyId]);

  if (loading) return <p>Chargement des avis...</p>;
  if (feedbacks.length === 0) return <p>Aucun avis pour cette entreprise.</p>;

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Feedbacks récents :</h3>
      {feedbacks.map((fb) => (
        <div
          key={fb.id}
          style={{
            padding: 10,
            marginBottom: 10,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 6,
          }}
        >
          <p>
            <strong>Note :</strong> {fb.rating} / 5
          </p>
          {fb.comment && (
            <p>
              <strong>Commentaire :</strong> {fb.comment}
            </p>
          )}
          {(fb.client_name || fb.client_email || fb.client_phone) && (
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              <strong>Client :</strong>{" "}
              {fb.client_name || ""}{" "}
              {fb.client_email ? `(${fb.client_email})` : ""}{" "}
              {fb.client_phone ? `tel: ${fb.client_phone}` : ""}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}