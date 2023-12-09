import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expansion Project",
  description: "Expansion Project band website",
  icon: "/images/greenInfinityLogo.webp",
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
    title: "Expansion Project | Fusion Funk Music!",
    description: "Expansion Project | Philly Band Philly Grooves",
    type: "music.album",
    url: "https://www.expansionprojectmusic.com/",
    images: [
      {
        url: "/images/expansion_moon_logo.webp",
        width: 1260,
        height: 800,
        alt: "Expansion Project Logo",
      },
    ],
    locale: "en_US",
    site_name: "Expansion Project",
    determiner: "the",
    video: [
      {
        url: "https://youtu.be/Mflab1MxKaI?si=NfLbcwqrJ5Bn1XuP",
        secure_url: "https://youtu.be/Mflab1MxKaI?si=NfLbcwqrJ5Bn1XuP",
        type: "text/html",
        width: 400,
        height: 300,
        description: "Emagination (Offical Music Video) | Expansion Project",
      },
    ],
  },
  manifest: "./site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href={metadata.icon} type="image/webp" />
      <title>{metadata.title}</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
