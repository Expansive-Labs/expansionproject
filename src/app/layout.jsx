import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expansion Project | Philly Band Philly Grooves",
  description:
    "Music, videos and information about the Philadelphia Fusion Funk sensation also known as Expansion Project",
  images: [
    {
      url: "/images/infiniteLogo.webp", // update with AI swirls for social media share cards
      icon: "/images/moon_Logo.webp",
      width: 1260,
      height: 800,
      // description:
      //   "Music, videos and information about the Philadelphia Fusion Funk sensation also known as Expansion Project",
    },
  ],
  icon: "/images/infiniteLogo.webp",
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
    title: "Expansion Project | Philly Band Philly Grooves",
    description:
      "Music, videos and information about the Philadelphia Fusion Funk sensation also known as Expansion Project",
    url: "https://www.expansionprojectmusic.com/",
    image: "/images/infiniteLogo.webp",
    icon: "/images/infiniteLogo.webp",
    images: [
      {
        url: "/images/moon_Logo.webp", // update with AI swirls for social media share cards
        icon: "/images/infiniteLogo.webp",
        width: 1260,
        height: 800,
        // description:
        //   "Music, videos and information about the Philadelphia Fusion Funk sensation also known as Expansion Project",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
