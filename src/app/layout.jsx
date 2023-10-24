import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Expansion Project",
  description:
    "Music, videos and information about the Philadelphia Fusion Funk sensation also known as The Expansion Project",
  image: "/images/infiniteLogo.webp",
  metadataBase: new URL("https://www.expansionprojectmusic.com"),
  languages: {
    "en-US": "/en-US",
  },
  keywords: [
    "Expansion Project",
    "Band",
    "Music",
    "Jazz Fusion",
    "Funk",
    "Rock",
    "Jambands",
    "Power Trio",
    "Philadelphia",
    "Philly Band",
    "Philly Music Scene",
  ],
  openGraph: {
    title: "The Expansion Project",
    description:
      "Music, videos and information about the Philadelphia Fusion Funk sensation also known as The Expansion Project",
    url: "https://www.expansionprojectmusic.com/",
    siteName: "The Expansion Project",
    images: [
      {
        url: "/images/moon_Logo.webp", // update with AI swirls for social media share cards
        width: 1260,
        height: 800,
        alt: "The Moon logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
