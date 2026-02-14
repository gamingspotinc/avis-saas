"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import FeedbackList from "@/components/FeedbackList";
import { useRouter } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";

type Company = {
  id: string;
  name: string;
  slug: string;
};

export default function DashboardPage() {
  const [company, setCompany] = useState<Company | null>(null);
  const router = useRouter();
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCompany = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("companies")
        .select("id, name, slug")
        .eq("owner_id", user.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setCompany(data);
    };

    loadCompany();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code-avis.png";
    link.click();
  };

  if (!company) return <p style={{ padding: 30 }}>Chargement...</p>;

  const shareUrl = `https://avis-saas-xi.vercel.app/avis/${company.slug}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 40,
        fontFamily: "sans-serif",
        background: "#111",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <h1 style={{ fontSize: "28px" }}>
          Dashboard {company.name}
        </h1>

        <button
          onClick={handleLogout}
          style={{
            background: "#000",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            border: "1px solid #444",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Déconnecter
        </button>
      </div>

      {/* LIEN + QR */}
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
          padding: 25,
          borderRadius: 12,
          marginBottom: 30,
          border: "1px solid #333",
          textAlign: "center",
        }}
      >
        <h2>Voici votre lien de partage :</h2>

        <a
          href={shareUrl}
          target="_blank"
          style={{
            color: "#4da6ff",
            fontSize: 18,
            wordBreak: "break-all",
          }}
        >
          {shareUrl}
        </a>

        <div style={{ marginTop: 25 }}>
          <h3>Affichez ce QR dans votre entreprise</h3>
          <p style={{ color: "#aaa", fontSize: 14 }}>
            Vos clients peuvent scanner pour laisser un avis rapidement.
          </p>

          <div
            ref={qrRef}
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <QRCodeCanvas
          value={shareUrl}
          size={220}
         level="H"
          />
          </div>

          <button
            onClick={downloadQR}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              borderRadius: 6,
              border: "1px solid #444",
              background: "#000",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Télécharger le QR Code
          </button>
        </div>
      </div>

      {/* FEEDBACKS */}
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
          padding: 25,
          borderRadius: 12,
          border: "1px solid #333",
        }}
      >
        <h2>Commentaires reçus</h2>
        <FeedbackList companyId={company.id} />
      </div>
    </div>
  );
}