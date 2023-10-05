import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expansion Project",
  description: "Philly band Philly grooves",

  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-icon.png",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Expansion Project",
  //   description: "Philly band, Philly grooves",
  //   siteId: "9082374819237498120374??????",
  //   creator: "@nextjs",
  //   creatorId: "2930847290837409128374983???",
  //   images: ["https//nextjs.org/og.png"],
  // },
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
