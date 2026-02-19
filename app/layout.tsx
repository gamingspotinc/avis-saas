import "./globals.css";
import Navbar from "./components/Navbar";

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
        <Navbar />
        <div style={{ paddingTop: "110px" }}>{children}</div>
      </body>
    </html>
  );
}