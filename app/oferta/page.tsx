import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { getAllOferty, getCategories } from "@/lib/oferty";
import { OfertaList } from "@/components/sections/oferta-list";

export const metadata: Metadata = {
  title: "Oferta i Cennik Zabiegów Kosmetycznych",
  description:
    "Cennik zabiegów kosmetycznych w salonie Perfect Skin Chorzów. Depilacja laserowa, peelingi chemiczne, makijaż permanentny, podologia, laser CO2 i więcej. Sprawdź ceny i zarezerwuj online.",
  alternates: { canonical: "/oferta" },
};

export default function OfertaPage() {
  const oferty = getAllOferty();
  const categories = getCategories();

  return (
    <>
      <section className="pt-12 pb-6 bg-surface-container-low/60 border-b border-surface-container">
        <Container>
          <Typography variant="sectionSubtitle">Cennik i Usługi</Typography>
          <Typography variant="h1" className="mt-4 mb-4">
            Oferta i Cennik – Salon Kosmetyczny Chorzów
          </Typography>
          <Typography variant="body" className="max-w-2xl">
            Przejrzyj nasze zabiegi, filtruj po kategoriach i dowiedz się więcej o poszczególnych procedurach. Zawsze stawiamy na transparentność cen i jasny plan terapii.
          </Typography>
          <p className="mt-4 text-xs text-neutral-400 font-sans leading-relaxed max-w-2xl">
            * Prezentowane ceny mają charakter orientacyjny i mogą nie być aktualne.
            Aktualny cennik jest na bieżąco aktualizowany na{" "}
            <a
              href="https://booksy.com/pl-pl/dl/show-business/101806?utm_medium=c2c_referral"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:text-neutral-600 underline underline-offset-2 transition-colors"
            >
              Booksy
            </a>
            .
          </p>
        </Container>
      </section>
      
      <OfertaList oferty={oferty} categories={categories} />
    </>
  );
}
