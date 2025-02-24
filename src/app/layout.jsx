import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const googleAnalytics = process.env.GOOGLE_ANALYTICS;

export const metadata = {
  title: "Expansion Project - Official Band Website",
  description:
    "Explore the music of Expansion Project, a dynamic fusion band from Philadelphia PA",
  icon: "/images/greenInfinityLogoV2.webp",
  keywords: [
    "Expansion Project",
    "Music",
    "Band",
    "Fusion",
    "Funk",
    "Jazz",
    "Rock",
    "Jam",
    "Jambands",
    "Power Trio",
    "Philadelphia",
    "Philadelphia Music",
    "Philly Band",
    "Philly Music Scene",
    "Jazz Fusion",
    "Jazz Rock",
    "Jazz Funk",
    "Jazz Rock Fusion",
    "Jazz Fusion Bass",
    "Jazz Fusion Drums",
    "Jazz Fusion Guitar",
    "Jazz Fusion Keyboard",
    "Progressive Rock",
    "Moses Yoofee Trio",
    "Yussef Dayes",
    "Evan Marien",
    "Tauk",
    "Papadosio",
    "Octave Cat",
    "Dopapod",
    "Umphrey's Mcgee",
    "Cory Henry Funk Apostles",
    "Bad Bad Not Good",
    "Cory Wong",
    "Snarky Puppy",
    "The Philharmonic",
    "Killiam Shakespeare",
    "Trap Rabbit",
    "Snack Time",
    "Great Time",
    "The Main Squeeze  Squeeze",
    "Red Hot Chili Peppers",
    "John Frusciante",
    "Jaco Pastorius",
    "Flea",
    "Dirk Lance",
    "Thundercat",
    "George Duke",
    "Victor Wooten",
    "Larnell Lewis",
    "Domi & JD Beck",
    "Anthony Tilotta",
    "Matthew Silva",
    "Zamere Williams",
  ],
  openGraph: {
    title: "Expansion Project",
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
      <head>
        <link rel="icon" href={metadata.icon} type="image/webp" />
        <title>{metadata.title}</title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalytics}');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
