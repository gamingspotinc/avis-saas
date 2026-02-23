"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Feedback = {
  id: string;
  comment: string;
  satisfaction: string | null;
  created_at: string;
};

export default function DashboardPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data: userData, error: userError } =
          await supabase.auth.getUser();

        if (userError || !userData.user) {
          setError("Utilisateur non connecté.");
          setLoading(false);
          return;
        }

        const userId = userData.user.id;

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("company_id")
          .eq("id", userId)
          .single();

        if (profileError || !profile) {
          setError("Profil introuvable ou company_id manquant.");
          setLoading(false);
          return;
        }

        const { data: feedbackData, error: feedbackError } =
          await supabase
            .from("feedback")
            .select("*")
            .eq("company_id", profile.company_id)
            .order("created_at", { ascending: false });

        if (feedbackError) {
          setError(feedbackError.message);
          setLoading(false);
          return;
        }

        setFeedbacks(feedbackData || []);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Chargement...</p>;

  if (error)
    return (
      <p style={{ color: "red" }}>
        Erreur : {error}
      </p>
    );

  return (
    <div>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 40 }}>
        Tableau de bord
      </h1>

      <p>
        Nombre d'avis : {feedbacks.length}
      </p>
    </div>
  );
}