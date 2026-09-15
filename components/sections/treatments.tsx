import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { BOOKSY_URL } from "@/lib/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import { getAllOferty } from "@/lib/oferty";

export function Treatments() {
  const all = getAllOferty();

  // Hand-picked treatments for the homepage
  const featuredIds = ["6290601", "2304794", "6644176", "1425772"];
  const selectedOferty = featuredIds
    .map((id) => all.find((o) => o.id_uslugi === id))
    .filter((o): o is import("@/lib/oferty").Oferta => !!o);

  return (
    <section className="py-12 lg:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <Typography variant="sectionSubtitle">
              Spersonalizowana Karta Zabiegów
            </Typography>
            <Typography variant="h2" className="mt-2">
              Zabiegi Kosmetologiczne Chorzów - Nasza Oferta
            </Typography>
            <Typography variant="body" className="mt-1">
              Celowane protokoły kliniczne dla natychmiastowej poprawy kondycji
              cery.
            </Typography>
          </div>
          <Link
            href="/oferta"
            className="inline-flex items-center gap-2 text-neutral-900 hover:text-neutral-600 font-sans text-sm font-semibold tracking-wide group"
          >
            Zobacz pełny cennik
            <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedOferty.map((t) => (
            <div
              key={t.id_uslugi}
              className="bg-white p-6 shadow-sm flex flex-col justify-between border border-neutral-200/30 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-4 font-sans">
                  <span className="px-2.5 py-1 bg-neutral-100 font-semibold text-neutral-500 uppercase text-[10px] tracking-wider truncate max-w-[65%]">
                    {t.kategoria}
                  </span>
                  <span className="font-medium shrink-0">
                    {t.czas_trwania_min} min
                  </span>
                </div>

                <Typography
                  variant="h3"
                  className="text-[20px] leading-6.5 mb-3 line-clamp-3"
                >
                  <Link
                    href={`/oferta/${t.slug}`}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    {t.nazwa_uslugi}
                  </Link>
                </Typography>

                <Typography
                  variant="body"
                  className="text-[13px] mb-6 line-clamp-3"
                >
                  {t.opis ||
                    "Zapraszamy do zapoznania się ze szczegółami zabiegu w naszym gabinecie. Dbamy o najwyższe standardy kosmetologiczne."}
                </Typography>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-4 pt-4 border-t border-neutral-200/30">
                  <span className="text-[11px] text-neutral-500 font-sans">
                    Cena
                  </span>
                  <span className="font-serif text-[28px] leading-[36px] text-neutral-900 font-semibold">
                    {t.cena_pln}{" "}
                    <span className="font-sans text-[14px]">zł</span>
                  </span>
                </div>
                <Button
                  asChild
                  className="w-full text-xs font-semibold tracking-wider uppercase transition-all bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white"
                  variant="ghost"
                >
                  <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rezerwuj
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
