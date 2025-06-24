import localFont from "next/font/local";
import type { Metadata } from "next";
import { Header, Footer, ErrorBoundary } from "@/components";
import { CANVA_NAV_LINKS } from "@/constants/links";
import "./canva-variables.css";
import "./canva.css";

export const metadata: Metadata = {
  title: "Greg life | portfolio 🎨",
  description: "A personal portfolio built for canva",
};

const ezra = localFont({
  src: "../../../../../public/fonts/ezra_medium-webfont.woff2",
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-ezra",
});

export default function CanvaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${ezra.variable} sans-serif theme-canva`}>
      <Header headerFor="canva" navLinks={CANVA_NAV_LINKS} />
      <ErrorBoundary variant="canva">
        {children}
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
