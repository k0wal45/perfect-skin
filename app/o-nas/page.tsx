import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutTeam } from "@/components/sections/about-team";
import { AboutPhilosophy } from "@/components/sections/about-philosophy";
import { AboutStats } from "@/components/sections/about-stats";
import { AboutCta } from "@/components/sections/about-cta";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "O nas – Zespół Kosmetologów",
  description:
    "Poznaj zespół salonu kosmetycznego Perfect Skin w Chorzowie. Certyfikowane kosmetolożki specjalizujące się w depilacji laserowej, kosmetologii estetycznej i podologii. Holistyczne podejście do pielęgnacji skóry.",
  alternates: { canonical: "/o-nas" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AnimateIn>
        <AboutTeam />
      </AnimateIn>
      <AnimateIn>
        <AboutPhilosophy />
      </AnimateIn>
      <AnimateIn>
        <AboutStats />
      </AnimateIn>
      <AnimateIn>
        <AboutCta />
      </AnimateIn>
    </>
  );
}