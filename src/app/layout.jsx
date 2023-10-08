import "./globals.css";
import { Inter } from "next/font/google";
// import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expansion Project",
  description: "Philly Band Philly Grooves",
  openGraph: {
    title: "Expansion Project",
    description: "Philly Band Philly Grooves",
    canonical: "https://www.expansionprojectmusic.com/",
    keywords: [
      "Expansion Project",
      "Music",
      "Band",
      "Jazz Fusion",
      "Funk",
      "Rock",
      "Progressive",
      "Jam",
      "Jambands",
      "Power Trio",
      "Philadelphia",
      "Philly Band",
      "Philly Music Scene",
      "Lotus",
      "Octave Cat",
      "Dopapod",
      "Tauk",
      "Papadosio",
      "Sunsquabi",
      "Umphrey's Mcgee",
      "Disco Biscuts",
      "Cory Wong",
      "Cory Henry Funk Apostles",
      "Snarky Puppy",
      "Jaco",
    ],
    images: [
      {
        url: "/images/moon_Logo.png",
        width: 1260,
        height: 800,
      },
    ],
  },

  icons: {
    // icon: ["/favicon.ico?v=1"],
    // apple: ["/apple-touch-icon.png"],
    // shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
