"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  created_at: string;
};

export default function AdminPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data } = await supabase
        .from("feedback")
        .select("*");

      if (data) setFeedbacks(data);
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <h1>Admin Feedback</h1>
      {feedbacks.map((f) => (
        <div key={f.id}>
          <p>{f.comment}</p>
          <small>{f.created_at}</small>
        </div>
      ))}
    </div>
  );
}