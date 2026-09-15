import { Sparkles, ShieldCheck, Microscope, Leaf } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export function AboutHero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <Container>
        {/* Ambient Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-secondary-fixed/30 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-48 -right-24 w-80 h-80 bg-primary-fixed/35 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-neutral-600 mb-8 shadow-sm">
            <Sparkles className="h-4 w-4 text-neutral-900" />
            <span className="font-sans text-[12px] font-semibold tracking-wider uppercase">
              Poznaj nasz zespół i misję
            </span>
          </div>

          <Typography variant="h1" className="mb-4 leading-[1.12]">
            Salon Kosmetyczny Perfect Skin Chorzów
            <br />
            <span className="italic font-normal text-neutral-900 text-[28px] md:text-[40px]">
              Dwie specjalistki, jedna wizja piękna.
            </span>
          </Typography>

          <Typography
            variant="body"
            className="text-lg max-w-2xl mx-auto mb-12"
          >
            W Perfect Skin łączymy akademicką wiedzę kliniczną z intymną
            atmosferą relaksu. Wierzymy w terapie szyte na miarę, poszanowanie
            naturalnej fizjologii skóry oraz dialog pozbawiony pośpiechu.
          </Typography>

          {/* Quick Trust Pill Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl">
            <div className="p-4 bg-surface-lowest shadow-sm flex items-center justify-center gap-2">
              <ShieldCheck className="h-5 w-5 text-neutral-900" />
              <span className="font-sans text-[11px] font-medium text-neutral-900">
                Dyplomowani Kosmetolodzy
              </span>
            </div>
            <div className="p-4 bg-surface-lowest shadow-sm flex items-center justify-center gap-2">
              <Microscope className="h-5 w-5 text-neutral-900" />
              <span className="font-sans text-[11px] font-medium text-neutral-900">
                Certyfikacja specjalistyczna
              </span>
            </div>
            <div className="p-4 bg-surface-lowest shadow-sm col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
              <Leaf className="h-5 w-5 text-neutral-900" />
              <span className="font-sans text-[11px] font-medium text-neutral-900">
                Szeroki wachlarz zabiegów
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
