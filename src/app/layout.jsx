import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expansion Project",
  image: "/images/moon_Logo.png",
  bio: "Short description about your band.",
  description: "Philly band Philly grooves",
  author: "Expansion Project",
  keywords:
    "music, band, fusion, funk, jamband, Philadelphia, Expansion Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.expansionprojectmusic.com/"
        />
        <meta property="og:site_name" content="Expansion Project Music" />
        <meta name="twitter:card" content={metadata.image} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
