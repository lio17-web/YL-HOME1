import "./globals.css";

export const metadata = {
  title: "YL Home — Mobilier & Décoration",
  description: "Site vitrine YL Home : tables basses, déco, et plus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
