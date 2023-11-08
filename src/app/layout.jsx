import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expansion Project",
  description:
    "Philly Band Philly Grooves. Music, videos and info about the band",
  icon: "/images/greenInfinityLogo.png",
  keywords: [
    "Expansion Project",
    "Music",
    "Band",
    "Jazz Fusion",
    "Funk",
    "Rock",
    "Progressive Rock",
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
    "Red Hot Chili Peppers",
    "John Frusciante",
    "Flea",
    "Jaco",
    "George Duke",
    "Victor Wooten",
  ],
  openGraph: {
    title: "Expansion Project | Fusion Funk Music", // edit this line to change share card title
    description: "Philly Band Philly Grooves.",
    url: "https://www.expansionprojectmusic.com/",
    images: [
      {
        url: "/images/expansion_moon_logo.webp", 
        width: 1260,
        height: 800,
      },
    ],
  },
  manifest: "./site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href={metadata.icon} type="image/png" />
      <title>{metadata.title}</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
