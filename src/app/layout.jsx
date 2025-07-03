import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const googleAnalytics = process.env.GOOGLE_ANALYTICS;

export const metadata = {
  title: "Expansion Project | Philadelphia Jazz Fusion Band - Live Funk Fusion Trio",
  description:
    "Philadelphia's premier jazz fusion trio blending funk, progressive rock & modern fusion. Live shows, streaming music & tour dates. Fans of Snarky Puppy, Tauk & Moses Yoofee Trio love our sound.",
  icon: "/images/greenInfinityLogoV2.webp",
  keywords: [
    "jazz fusion bands Philadelphia",
    "funk fusion trio",
    "Philadelphia live music",
    "jazz fusion concerts near me",
    "bands like Snarky Puppy",
    "bands like Tauk",
    "progressive fusion bands",
    "Philly jazz bands",
    "live jazz fusion shows",
    "funk jazz fusion music",
    "instrumental fusion bands",
    "jam bands Philadelphia",
    "Expansion Project band",
    "Anthony Tilotta bass",
    "Matthew Silva keyboards",
    "Zamere Williams drums",
    "jazz fusion streaming",
    "modern fusion bands 2025",
    "Philadelphia music scene",
    "fusion power trio",
    "bands like Moses Yoofee Trio",
    "bands like Domi and JD Beck",
    "bands like Ghost Note",
    "jazz funk bands touring",
    "progressive jazz rock fusion",
    "live music Philadelphia venues",
    "jazz fusion albums Spotify",
    "Conscious Tortoise album",
    "Phenomenal Thought album",
    "fusion bands like Weather Report",
    "modern jazz fusion artists",
    "Philadelphia fusion concerts",
    "jazz fusion bass guitar drums",
    "funk fusion live performance",
    "instrumental rock fusion",
    "contemporary jazz fusion",
    "Philly music venues jazz",
    "fusion trio concerts",
    "jazz fusion near me tonight",
    "progressive fusion music",
    "fusion bands like Evan Marien",
    "bands similar to Thundercat",
    "modern fusion like Hiromi",
    "jazz fusion festival bands",
    "Philadelphia jazz scene 2025",
    "live fusion music tonight",
    "jazz fusion trio tour dates",
    "funk jazz concerts Philadelphia",
    "fusion music streaming online",
    "jazz fusion band booking",
    "modern prog fusion bands",
    "instrumental fusion concerts",
    "jazz fusion shows this weekend",
    "Philadelphia fusion musicians",
    "contemporary fusion artists",
    "jazz fusion band website",
    "funk fusion band tour",
    "progressive jazz fusion trio",
    "live jazz fusion experience",
    "fusion music Philadelphia PA",
    "jazz fusion collective",
    "modern jazz fusion scene",
    "fusion bands East Coast",
    "jazz fusion power trio live"
  ],
  openGraph: {
    title: "Expansion Project | Philadelphia Jazz Fusion Band",
    description: "Philadelphia's premier jazz fusion trio - Live shows, new music & tour dates. For fans of Snarky Puppy, Tauk & progressive fusion.",
    type: "website",
    url: "https://www.expansionprojectmusic.com/",
    images: [
      {
        url: "/images/expansion_moon_logo.webp",
        width: 1260,
        height: 800,
        alt: "Expansion Project - Philadelphia Jazz Fusion Band",
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
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="canonical" href="https://www.expansionprojectmusic.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Expansion Project" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Expansion Project" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@expansionproject" />
        <meta name="geo.region" content="US-PA" />
        <meta name="geo.placename" content="Philadelphia" />
        <meta name="geo.position" content="39.9526;-75.1652" />
        <meta name="ICBM" content="39.9526, -75.1652" />
        {googleAnalytics && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${googleAnalytics}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Expansion Project",
              "description": "Philadelphia's premier jazz fusion trio blending funk, progressive rock & modern fusion. Known for intricate rhythms, virtuosic performances, and genre-bending compositions.",
              "url": "https://www.expansionprojectmusic.com",
              "genre": ["Jazz Fusion", "Funk Fusion", "Progressive Fusion", "Instrumental Rock"],
              "foundingDate": "2016",
              "foundingLocation": {
                "@type": "City",
                "name": "Philadelphia",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Philadelphia",
                  "addressRegion": "PA",
                  "addressCountry": "US"
                }
              },
              "member": [
                {
                  "@type": "Person",
                  "name": "Anthony Tilotta",
                  "roleName": "Bass"
                },
                {
                  "@type": "Person",
                  "name": "Matthew Silva",
                  "roleName": "Keyboards/Piano"
                },
                {
                  "@type": "Person",
                  "name": "Zamere Williams",
                  "roleName": "Drums"
                }
              ],
              "album": [
                {
                  "@type": "MusicAlbum",
                  "name": "Phenomenal Thought",
                  "datePublished": "2023",
                  "url": "https://distrokid.com/hyperfollow/expansionproject1/phenomenal-thought-2"
                },
                {
                  "@type": "MusicAlbum",
                  "name": "Conscious Tortoise",
                  "datePublished": "2018",
                  "url": "https://distrokid.com/hyperfollow/expansionproject1/conscious-tortoise-2"
                }
              ],
              "sameAs": [
                "https://open.spotify.com/artist/expansion-project",
                "https://music.apple.com/us/artist/expansion-project/1353151967",
                "https://www.youtube.com/expansionproject",
                "https://www.instagram.com/expansionproject",
                "https://www.facebook.com/expansionproject",
                "https://www.bandsintown.com/a/15563537-expansion-project"
              ],
              "event": {
                "@type": "MusicEvent",
                "name": "First Fridays at VeloJawn",
                "startDate": "2025-03-07T20:00",
                "location": {
                  "@type": "Place",
                  "name": "VeloJawn",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "3946 Lancaster Avenue",
                    "addressLocality": "Philadelphia",
                    "addressRegion": "PA",
                    "postalCode": "19104"
                  }
                },
                "performer": {
                  "@type": "MusicGroup",
                  "name": "Expansion Project"
                }
              }
            })
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
