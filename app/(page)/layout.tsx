import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfect Skin - Centrum Kosmetologii w Chorzowie",
  description: "Odwiedź Perfect Skin w Chorzowie, oferujące profesjonalne usługi kosmetologiczne. Zarezerwuj wizytę online poprzez Booksy.",
  keywords: [
    "Perfect Skin",
    "kosmetologia",
    "usługi kosmetyczne",
    "Chorzów",
    "zabiegi kosmetyczne",
  ],
  openGraph: {
    title: "Perfect Skin - Centrum Kosmetologii w Chorzowie",
    description: "Odwiedź Perfect Skin w Chorzowie, oferujące profesjonalne usługi kosmetologiczne. Zarezerwuj wizytę online poprzez Booksy.",
    url: "https://booksy.com/pl-pl/101806_perfect-skin-centrum-kosmetologii_inni_12311_chorzow",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/perfect-skin.jpg",
        width: 800,
        height: 600,
        alt: "Perfect Skin - Centrum Kosmetologii",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect Skin - Centrum Kosmetologii w Chorzowie",
    description: "Odwiedź Perfect Skin w Chorzowie, oferujące profesjonalne usługi kosmetologiczne. Zarezerwuj wizytę online poprzez Booksy.",
  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			{/* <head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head> */}
			<body className={montserrat.className}>
				<Navbar />
				{children}
        <Footer />
			</body>
		</html>
	);
}
