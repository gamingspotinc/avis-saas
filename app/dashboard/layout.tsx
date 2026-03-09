"use client";

import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#111",
          color: "white",
          padding: "30px 20px",
        }}
      >
        <h2 style={{ marginBottom: "40px" }}>AvisPME</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link href="/dashboard" style={sidebarLink}>Dashboard</Link>
          <Link href="/dashboard/avis" style={sidebarLink}>Avis</Link>
          <Link href="/dashboard/parametres" style={sidebarLink}>Paramètres</Link>
          <Link href="/" style={sidebarLink}>Retour au site</Link>
        </nav>
      </aside>

      {/* CONTENU */}
      <main
        style={{
          flex: 1,
          padding: "50px",
          backgroundColor: "#f8f9fb",
        }}
      >
        {children}
      </main>
    </div>
  );
}

const sidebarLink = {
  textDecoration: "none",
  color: "white",
  opacity: 0.85,
  padding: "8px 0",
  transition: "0.2s",
};