import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "AvisPME",
  description: "Protection stratégique de réputation pour entreprises locales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        
        {/* NAVBAR GLOBALE */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            padding: "20px 50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid #eee",
            zIndex: 1000,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", color: "#111", fontWeight: "bold", fontSize: "1.2rem" }}>
            AvisPME
          </Link>

          {/* Menu */}
          <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
            <Link href="/solution" style={linkStyle}>
              Solution
            </Link>

            <Link href="/industries" style={linkStyle}>
              Industries
            </Link>

            <Link href="/fonctionnalites" style={linkStyle}>
              Fonctionnalités
            </Link>

            <Link href="/a-propos" style={linkStyle}>
              À propos
            </Link>

            <Link
              href="/start"
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#111",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Demande d’accès
            </Link>
          </div>
        </nav>

        {/* CONTENU */}
        <div style={{ paddingTop: "110px" }}>
          {children}
        </div>

      </body>
    </html>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#111",
  fontWeight: 500,
};