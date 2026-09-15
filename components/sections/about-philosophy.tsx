import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import {
  Stethoscope,
  Microscope,
  Flower2,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

export function AboutPhilosophy() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Typography variant="sectionSubtitle" className="mb-2 block">
            Filozofia Pracy
          </Typography>
          <Typography variant="h2" className="mb-4 lg:text-[40px]">
            Czystość, Bezpieczeństwo, Rezultat
          </Typography>
          <Typography variant="body" className="text-[15px]">
            Trzy filary określające każdy zabieg w Perfect Skin.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
          {/* Pillar 1 */}
          <div className="bg-surface-lowest p-8 lg:p-10 shadow-sm flex flex-col justify-between relative">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-serif text-[40px] text-primary font-normal">
                01
              </span>
              <Stethoscope className="h-7 w-7 text-neutral-900" />
            </div>
            <div>
              <Typography variant="h3" className="mb-2 text-[22px]">
                Aseptyka Szpitalna
              </Typography>
              <Typography variant="body" className="text-[13px] mb-4">
                Własny autoklaw medyczny Klasy B. Jednorazowe kartridże
                otwierane w obecności pacjenta. 100% sterylności procedur.
              </Typography>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-surface-lowest p-8 lg:p-10 shadow-sm flex flex-col justify-between relative">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-serif text-[40px] text-primary font-normal">
                02
              </span>
              <Microscope className="h-7 w-7 text-neutral-900" />
            </div>
            <div>
              <Typography variant="h3" className="mb-2 text-[22px]">
                Zaawansowana pielęgnacja
              </Typography>
              <Typography variant="body" className="text-[13px] mb-4">
                Preparaty terapeutyczne estGen. Profesjonalne kosmetyki firmy
                KLAPP
              </Typography>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-surface-lowest p-8 lg:p-10 shadow-sm flex flex-col justify-between relative">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-serif text-[40px] text-primary font-normal">
                03
              </span>
              <Flower2 className="h-7 w-7 text-neutral-900" />
            </div>
            <div>
              <Typography variant="h3" className="mb-2 text-[22px]">
                Najnowsze technologie
              </Typography>
              <Typography variant="body" className="text-[13px] mb-4">
                Terapia światłem IPL i BBL, szeroki wachlarz laseroterapii i
                zabiegów depilacyjnych
              </Typography>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="bg-surface-container p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-7">
          <div className="max-w-md">
            <span className="font-sans text-[11px] uppercase tracking-wider text-neutral-900 font-semibold block mb-2">
              Oficjalne Partnerstwa Kosmeceutyczne
            </span>
            <Typography variant="h3" className="text-[22px]">
              estGen &amp; Klapp Skin Care Science
            </Typography>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="px-4 py-2 bg-surface-lowest shadow-sm flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-neutral-900" />
              <span className="font-sans text-[12px] text-neutral-900 font-semibold">
                estGen Inżynieria Tkankowa
              </span>
            </div>
            <div className="px-4 py-2 bg-surface-lowest shadow-sm flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-neutral-900" />
              <span className="font-sans text-[12px] text-neutral-900 font-semibold">
                Klapp Skin Science
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
