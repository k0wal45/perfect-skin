import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Perfect Skin – Salon Kosmetyczny Chorzów | Kosmetologia, Depilacja Laserowa, Podologia",
    template: "%s | Perfect Skin Chorzów",
  },
  description:
    "Salon kosmetyczny w Chorzowie. Kosmetologia estetyczna, depilacja laserowa, peelingi chemiczne, makijaż permanentny i podologia. Umów wizytę online przez Booksy.",
  keywords: [
    "salon kosmetyczny chorzów",
    "kosmetologia chorzów",
    "depilacja laserowa chorzów",
    "zabiegi kosmetyczne chorzów",
    "peeling chemiczny chorzów",
    "makijaż permanentny chorzów",
    "podologia chorzów",
    "laseroterapia chorzów",
    "laser frakcyjny co2 chorzów",
    "perfect skin chorzów",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Perfect Skin – Salon Kosmetyczny Chorzów | Kosmetologia i Depilacja Laserowa",
    description:
      "Profesjonalny salon kosmetyczny w Chorzowie. Depilacja laserowa, peelingi, makijaż permanentny, podologia. Rezerwacja online Booksy.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="pl"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-bright text-neutral-900 font-sans">
        <Header />
        <main className="w-full pt-[116px] flex-1">{children}</main>
        <Footer />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
