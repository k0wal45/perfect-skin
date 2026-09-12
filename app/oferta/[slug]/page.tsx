import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Clock, CreditCard, ShieldCheck } from "lucide-react";
import { getAllOferty, getOfertaBySlug } from "@/lib/oferty";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const oferty = getAllOferty();
  return oferty.map((o) => ({
    slug: o.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const oferta = getOfertaBySlug(slug);

  if (!oferta) {
    return { title: "Nie znaleziono zabiegu" };
  }

  const categoryLocal = oferta.kategoria.toLowerCase().includes("depilacja")
    ? "Depilacja laserowa Chorzów"
    : oferta.kategoria.toLowerCase().includes("podolog")
      ? "Podologia Chorzów"
      : oferta.kategoria.toLowerCase().includes("makijaż")
        ? "Makijaż permanentny Chorzów"
        : "Salon kosmetyczny Chorzów";

  const title = `${oferta.nazwa_uslugi} – ${oferta.cena_wyswietlana} | ${categoryLocal}`;

  const description = oferta.opis
    ? `${oferta.nazwa_uslugi} w salonie Perfect Skin Chorzów. ${oferta.opis.substring(0, 130).replace(/\n/g, " ")}… Cena: ${oferta.cena_wyswietlana}. Rezerwacja online Booksy.`
    : `${oferta.nazwa_uslugi} w salonie kosmetycznym Perfect Skin Chorzów. Czas trwania: ${oferta.czas_trwania_min} min. Cena: ${oferta.cena_wyswietlana}. Zarezerwuj wizytę online.`;

  return {
    title,
    description,
    alternates: { canonical: `/oferta/${slug}` },
    openGraph: {
      title: `${oferta.nazwa_uslugi} – Perfect Skin Chorzów`,
      description,
    },
  };
}

export default async function OfertaDetail({ params }: Props) {
  const { slug } = await params;
  const oferta = getOfertaBySlug(slug);

  if (!oferta) {
    notFound();
  }

  return (
    <section className="py-12 lg:py-20">
      <Container size="md">
        <Link
          href="/oferta"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors font-sans text-sm font-medium mb-12"
        >
          <ChevronLeft className="h-4 w-4" />
          Powrót do pełnej oferty
        </Link>

        <div className="bg-white border border-neutral-200/50 shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-5/12 bg-surface-container relative min-h-[300px]">
            {/* The JSON has a placeholder image string like "placeholder.jpg". We will use a generic treatment image or rely on the actual remote URL if it existed. */}
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1WUyl6pZhEXz8NmRkyz4sWCk53U-ydHn2SS4hfagKCd_y5PdCDtIqjfwGBD7dY6GfgciJHVGGYSPhScLOdZJW2dt10m6qYw1ZPQpLyvLy0-sGtOACvWLXtNIASR_lxip_WFT-_odebYkwLcNoNYxw2sPN_QgpkBpRm18Ydo5zVT5jFjvrFc4mxiVt0vtbb-J9E-XFawOxIVQmlNK5S7y3wbSgruXYM0Xt7K_WcaZ-uFZIHH4A2dEPwsvPk"
              alt={oferta.nazwa_uslugi}
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 font-sans text-[11px] font-semibold text-neutral-500 uppercase tracking-wider shadow-sm">
              {oferta.kategoria}
            </div>
          </div>

          <div className="w-full md:w-7/12 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <Typography variant="h2" className="mb-4">
                {oferta.nazwa_uslugi}
              </Typography>

              <div className="flex flex-wrap items-center gap-6 mb-8 text-neutral-600 font-sans text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-neutral-900" />
                  <span>{oferta.czas_trwania_min} minut</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-neutral-900" />
                  <span>{oferta.cena_wyswietlana}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-neutral-900" />
                  <span>Certyfikowany protokół</span>
                </div>
              </div>

              <div className="prose prose-neutral prose-sm font-sans mb-8">
                {oferta.opis ? (
                  oferta.opis.split("\n").map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="mb-3 leading-relaxed text-neutral-600"
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-neutral-500 italic">
                    Brak szczegółowego opisu dla tego zabiegu. Aby dowiedzieć
                    się więcej, zapraszamy na darmową konsultację.
                  </p>
                )}
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="block font-sans text-[11px] text-neutral-500 uppercase tracking-wider mb-1">
                  Cena zabiegu
                </span>
                <span className="font-serif text-3xl font-semibold text-neutral-900">
                  {oferta.cena_pln} zł
                </span>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto shadow-md">
                <a
                  href="https://booksy.com/pl-pl/dl/show-business/101806?utm_medium=c2c_referral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zarezerwuj teraz na Booksy
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
