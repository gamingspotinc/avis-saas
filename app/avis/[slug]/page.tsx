"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";

export default function AvisPage() {
  const { slug } = useParams();
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const loadCompany = async () => {
      const { data, error } = await supabase.from("companies").select("id").eq("slug", slug).single();
      if (!error && data) setCompanyId(data.id);
    };
    loadCompany();
  }, [slug]);

  const handleYes = () => {
    window.location.href = "https://google.com";
  };

  const handleSubmit = async () => {
    if (!companyId || !comment.trim()) return;
    await supabase.from("feedback").insert({ company_id: companyId, comment, is_private: true });
    setSent(true);
  };

  if (sent) return <h2 style={{ textAlign: "center" }}>Merci pour votre retour 🙏</h2>;

  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1>Êtes-vous satisfait de votre expérience ?</h1>
      {!showForm ? (
        <>
          <button onClick={handleYes} style={{ margin: 10 }}>Oui 😊</button>
          <button onClick={() => setShowForm(true)} style={{ margin: 10 }}>Non 😞</button>
        </>
      ) : (
        <>
          <textarea
            placeholder="Dites-nous ce qui n'a pas été..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: "100%", maxWidth: 400, height: 120 }}
          />
          <br />
          <button onClick={handleSubmit} style={{ marginTop: 10 }}>Envoyer</button>
        </>
      )}
    </main>
  );
}