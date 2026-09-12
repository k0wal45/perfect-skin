"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search } from "lucide-react";
import type { Oferta } from "@/lib/oferty";
import { AnimateIn } from "@/components/ui/animate-in";

export function OfertaList({ oferty, categories }: { oferty: Oferta[], categories: string[] }) {
  const [cat, setCat] = useState<string>("Wszystkie");
  const [q, setQ] = useState("");

  const filtered = oferty.filter(o => {
    if (cat !== "Wszystkie" && o.kategoria !== cat) return false;
    if (q && !o.nazwa_uslugi.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <section className="py-12 lg:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-1/4 shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <Typography variant="label" className="mb-3 block">Szukaj</Typography>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input 
                    type="text" 
                    placeholder="Wpisz nazwę..." 
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-white border border-neutral-200/50 focus:outline-none focus:border-primary font-sans text-sm"
                  />
                </div>
              </div>

              <div>
                <Typography variant="label" className="mb-3 block">Kategorie</Typography>
                <div className="flex flex-col gap-1">
                  <Button
                    onClick={() => setCat("Wszystkie")}
                    variant={cat === "Wszystkie" ? "secondary" : "ghost"}
                    className="justify-start border-l-2 border-transparent data-[active=true]:border-primary"
                    data-active={cat === "Wszystkie"}
                  >
                    Wszystkie zabiegi
                  </Button>
                  {categories.map(c => (
                    <Button
                      key={c}
                      onClick={() => setCat(c)}
                      variant={cat === c ? "secondary" : "ghost"}
                      className="justify-start border-l-2 border-transparent data-[active=true]:border-primary"
                      data-active={cat === c}
                    >
                      {c}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <Typography variant="h2" className="mb-2">{cat}</Typography>
            <Typography variant="body" className="mb-8">Znaleziono: {filtered.length} zabiegów</Typography>

            <div className="flex flex-col gap-4" key={`${cat}-${q}`}>
              {filtered.map((t, i) => (
                <AnimateIn key={t.id_uslugi} delay={Math.min(i * 50, 400)}>
                  <div className="bg-white p-5 lg:p-6 shadow-sm border border-neutral-200/30 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between hover:shadow-md transition-all">
                    <div className="flex-1">
                      <span className="inline-block px-2.5 py-1 bg-neutral-100 font-semibold text-neutral-500 uppercase text-[10px] tracking-wider mb-2">
                        {t.kategoria}
                      </span>
                      <Typography variant="h3" className="mb-2 text-[20px]">
                        <Link href={`/oferta/${t.slug}`} className="hover:text-neutral-900 transition-colors">
                          {t.nazwa_uslugi}
                        </Link>
                      </Typography>
                      <Typography variant="bodyMuted" className="line-clamp-2 max-w-2xl text-[13px]">
                        {t.opis || "Szczegółowy opis zabiegu dostępny w gabinecie."}
                      </Typography>
                    </div>
                    
                    <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto shrink-0 gap-4 md:gap-2">
                      <div className="text-right">
                        <div className="text-[11px] text-neutral-500 font-sans mb-0.5">Cena</div>
                        <div className="font-serif text-[22px] text-neutral-900 font-semibold whitespace-nowrap">
                          {t.cena_pln} <span className="font-sans text-[14px]">zł</span>
                        </div>
                        <div className="text-[11px] text-neutral-400 font-sans mt-0.5">
                          {t.czas_trwania_min} min
                        </div>
                      </div>
                      <Button asChild size="sm" variant="outlined" className="shrink-0 mt-1">
                        <Link href={`/oferta/${t.slug}`}>
                          Szczegóły
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </AnimateIn>
              ))}
              
              {filtered.length === 0 && (
                <div className="py-12 text-center bg-surface-lowest border border-neutral-200/30">
                  <Typography variant="bodyMuted">Nie znaleziono zabiegów spełniających kryteria.</Typography>
                </div>
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
