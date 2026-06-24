import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Warung Bu Bakhtiar — Masakan Rumahan Sejak 2015",
  description: "Masakan rumahan autentik Kota Pasuruan. Soto ayam kampung, rendang dimasak 6 jam, bakso homemade. Buka setiap hari pukul 10.00 – 21.00 WIB.",
  keywords: "warung makan jakarta barat, soto ayam, rendang daging, bakso spesial, masakan rumahan",
  authors: [{ name: "Warung Bu Bakhtiar" }],
  robots: "index, follow",
  openGraph: {
    title: "Warung Bu Bakhtiar",
    description: "Masakan Rumahan Sejak 2015 — Kota Pasuruan",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#b8521a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
