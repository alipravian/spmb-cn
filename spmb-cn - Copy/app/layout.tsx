import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPMB SMKN 1",
  description: "Sistem Penerimaan Murid Baru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <header className="navbar">
          <h1>SPMB SMKN 1</h1>
        </header>

        <main>
          {children}
        </main>

        <footer className="footer">
          <p>© 2026 SPMB SMKN 1. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}