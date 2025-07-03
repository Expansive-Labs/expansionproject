"use client";
import { ParallaxProvider } from "react-scroll-parallax";

export default function ClientParallaxProvider({ children }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}