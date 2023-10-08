import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expansion Project | Fusion Funk band from Philadelphia",
  description:
    "Philly Band Philly Grooves. Expansion Project is a Fusion Funk band from Philadelphia Pennsylvania",
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
    "Pigeons Playing Ping Pong",
    "Cory Wong",
    "Cory Henry Funk Apostles",
    "Bad Bad Not Good",
    "Snarky Puppy",
    "Jaco",
    "Herbie",
    "George Duke",
  ],
  openGraph: {
    title: "Expansion Project",
    description: "Philly Band Philly Grooves.",
    url: "https://www.expansionprojectmusic.com/",
    images: [
      {
        url: "/images/moon_Logo.webp",
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
