import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Arvo, Raleway } from "next/font/google";
import { AGradient, Header } from "@/components";
import { NAV_LINKS } from "@/constants/links";

import "../global.css";
import "./home.css";
import "./home-variables.css";

const arvo = Arvo({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arvo",
});

const raleway = Raleway({
  weight: ["200", "400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Greg Martin's portfolio 🎨",
  description: "A place to show the world what I got 💪🏻",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${arvo.variable} ${raleway.variable}`}>
      <body>
        <Header headerFor="normal" navLinks={NAV_LINKS} />
        {children}
        <AGradient />
      </body>
    </html>
  );
}
