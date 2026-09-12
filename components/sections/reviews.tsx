import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { BOOKSY_URL } from "@/lib/constants";
import { Star, ShieldCheck, ThumbsUp } from "lucide-react";

type Review = {
  text: string;
  name: string;
  treatment: string;
};

const reviews: Review[] = [
  {
    text: `„Pani Monika wyleczyła mój trądzik różowaty, z którym walczyłam bezskutecznie przez 4 lata. Niezwykle profesjonalne podejście, delikatność i plan domowy, który wreszcie działa!"`,
    name: "Katarzyna W.",
    treatment: "Zabieg: Terapia wyciszająca rumień",
  },
  {
    text: `„Cudowna atmosfera, wspaniały zapach i nienaganna czystość. Zabieg stymulatorami pod oczy przyniósł efekt wypoczętego spojrzenia już po 2 tygodniach. Szczerze polecam każdemu."`,
    name: "Agnieszka S.",
    treatment: "Zabieg: Biostymulacja okolicy oka",
  },
  {
    text: `„Pedicure podologiczny wykonany z chirurgiczną precyzją. Ulga po pierwszej wizycie z bolesnym odciskiem była natychmiastowa. Pani Małgorzata ma złote ręce!"`,
    name: "Marta D.",
    treatment: "Zabieg: Podologia specjalistyczna",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-neutral-900 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-neutral-900" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-12 lg:py-24">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 mb-3">
            <Star className="h-4 w-4 fill-neutral-900" />
            <span className="font-sans text-sm font-bold">4.97 / 5.0</span>
            <span className="text-neutral-500 font-normal text-xs">
              • Weryfikowane opinie Booksy
            </span>
          </div>
          <Typography variant="h2">
            Zaufanie, które widać na skórze
          </Typography>
          <Typography variant="body" className="mt-2">
            Przeczytaj doświadczenia osób, które powierzyły nam terapię swojej
            cery.
          </Typography>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white p-7 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Stars />
                <Typography variant="body" className="text-[15px]">
                  {r.text}
                </Typography>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between text-neutral-500">
                <div>
                  <Typography variant="label" className="font-semibold text-neutral-900 block">
                    {r.name}
                  </Typography>
                  <Typography variant="bodyMuted" className="text-[11px]">{r.treatment}</Typography>
                </div>
                <ShieldCheck className="h-5 w-5 text-neutral-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Booksy CTA */}
        <div className="mt-12 p-6 bg-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm">
              <ThumbsUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Typography variant="h3" className="text-[18px] font-semibold">
                Dołącz do grona zadowolonych klientów
              </Typography>
              <Typography variant="body" className="text-[13px]">
                Wybierz dogodny termin 24/7 w aplikacji Booksy bez konieczności
                dzwonienia.
              </Typography>
            </div>
          </div>
          <Button asChild className="shrink-0 shadow-sm">
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">Zarezerwuj na Booksy</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
