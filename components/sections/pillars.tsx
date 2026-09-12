import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Award, Zap, ThumbsUp, SprayCan, Check } from "lucide-react";
import type { ReactNode } from "react";

type Pillar = {
  stat: string;
  icon: ReactNode;
  title: string;
  description: string;
  badge: string;
};

const pillars: Pillar[] = [
  {
    stat: "12+",
    icon: <Award className="h-5 w-5 text-neutral-900" />,
    title: "Lat dojrzałej praktyki",
    description: "Tytuły magistra kosmetologii i podologii klinicznej.",
    badge: "Gwarancja wiedzy",
  },
  {
    stat: "4",
    icon: <Zap className="h-5 w-5 text-neutral-900" />,
    title: "Platformy laserowe",
    description: "Medyczna certyfikacja FDA & CE Medical.",
    badge: "Precyzja i bezpieczeństwo",
  },
  {
    stat: "98%",
    icon: <ThumbsUp className="h-5 w-5 text-neutral-900" />,
    title: "Efektywności terapii",
    description: "Indywidualny plan opieki gabinetowej i domowej.",
    badge: "Beauty plan 1-na-1",
  },
  {
    stat: "100%",
    icon: <SprayCan className="h-5 w-5 text-neutral-900" />,
    title: "Sterylność szpitalna",
    description: "Własny autoklaw klasy B i jednorazowe pakiety.",
    badge: "Klasa medyczna B",
  },
];

export function Pillars() {
  return (
    <section className="py-12 bg-surface-container-low/60">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-6 bg-white shadow-sm flex flex-col justify-between border-t-2 border-neutral-900"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-4xl text-neutral-900">{p.stat}</span>
                {p.icon}
              </div>
              <Typography variant="h3" className="text-[22px] leading-[30px] mb-1">
                {p.title}
              </Typography>
              <Typography variant="body" className="text-[13px]">
                {p.description}
              </Typography>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-neutral-900 text-[11px] font-semibold font-sans">
                <Check className="h-3.5 w-3.5 text-primary" />
                <span>{p.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
