"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Feedback = {
  id: string;
  comment: string;
  created_at: string;
};

type Company = {
  id: string;
  name: string;
  slug: string;
  is_active: boolean;
  feedbacks: Feedback[];
};

export default function DashboardPage() {
  const router = useRouter();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      const { data: authData } = await supabase.auth.getUser();

      if (!authData.user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("companies")
        .select(`
          id,
          name,
          slug,
          is_active,
          feedbacks:feedback(id, comment, created_at)
        `)
        .eq("owner_id", authData.user.id);

      if (error) console.error(error);
      else setCompanies(data || []);

      setLoading(false);
    };

    loadDashboard();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) return <p style={{ textAlign: "center" }}>Chargement...</p>;

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1000px", margin: "0 auto" }}>
      
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Bienvenue sur votre Dashboard</h1>
        <button onClick={handleLogout} style={logoutBtn}>
          Se déconnecter
        </button>
      </div>

      {/* FILTRE PAR DATE */}
      <div style={{ marginTop: "20px" }}>
        <label>Filtrer par date : </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{ padding: "6px", borderRadius: "6px" }}
        />
      </div>

      {companies.map((company) => {
        const shareLink = `${window.location.origin}/avis/${company.slug}`;

        const filteredFeedbacks = selectedDate
          ? company.feedbacks.filter((fb) =>
              fb.created_at.startsWith(selectedDate)
            )
          : company.feedbacks;

        return (
          <div key={company.id} style={companyCard}>
            
            {/* TOP BAR */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2>{company.name}</h2>
              <div>
                <strong>Votre lien de partage :</strong>{" "}
                <a href={shareLink} target="_blank" style={{ color: "blue" }}>
                  {shareLink}
                </a>
              </div>
            </div>

            {/* FEEDBACK SECTION */}
            <div style={{ marginTop: "25px" }}>
              <h3>Commentaires reçus</h3>

              {filteredFeedbacks.length === 0 ? (
                <p>Aucun commentaire pour cette date.</p>
              ) : (
                filteredFeedbacks.map((fb) => (
                  <div key={fb.id} style={feedbackCard}>
                    <p style={{ margin: 0 }}>{fb.comment}</p>
                    <span style={dateStyle}>
                      {new Date(fb.created_at).toLocaleString()}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </main>
  );
}

/* STYLES */

const companyCard: React.CSSProperties = {
  marginTop: "40px",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};

const feedbackCard: React.CSSProperties = {
  marginTop: "15px",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#f9f9f9",
};

const dateStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "gray",
  whiteSpace: "nowrap",
};

const logoutBtn: React.CSSProperties = {
  padding: "8px 15px",
  backgroundColor: "#111",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};