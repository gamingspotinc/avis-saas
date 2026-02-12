"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  created_at: string;
  client_name?: string;
  client_email?: string;
};

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) setFeedbacks(data);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Commentaires reçus</h2>

      {feedbacks.map((f) => (
        <div
          key={f.id}
          style={{
            background: "#111",
            color: "white",
            padding: 15,
            marginBottom: 15,
            borderRadius: 8,
          }}
        >
          <p>{f.comment}</p>

          {f.client_name && (
            <small>
              Contact: {f.client_name} ({f.client_email})
            </small>
          )}
        </div>
      ))}
    </div>
  );
}