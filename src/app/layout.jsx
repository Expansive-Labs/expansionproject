import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const description = "Philly band Philly grooves";

export const metadata = {
  title: "Expansion Project",
  description: description,
  openGraph: {
    description: description,
  },

  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png"],
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
