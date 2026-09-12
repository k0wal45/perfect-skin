import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Treatments } from "@/components/sections/treatments";
import { Founders } from "@/components/sections/founders";
import { Atmosphere } from "@/components/sections/atmosphere";
import { Reviews } from "@/components/sections/reviews";
import { Location } from "@/components/sections/location";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title:
    "Perfect Skin – Salon Kosmetyczny Chorzów | Kosmetologia, Depilacja Laserowa, Podologia",
  description:
    "Salon kosmetyczny Perfect Skin w Chorzowie. Depilacja laserowa, kosmetologia estetyczna, peelingi chemiczne, makijaż permanentny i podologia. Umów wizytę online na Booksy. ul. Gałeczki 30.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AnimateIn>
        <Pillars />
      </AnimateIn>
      <AnimateIn>
        <Treatments />
      </AnimateIn>
      <AnimateIn>
        <Founders />
      </AnimateIn>
      <AnimateIn>
        <Atmosphere />
      </AnimateIn>
      <AnimateIn>
        <Reviews />
      </AnimateIn>
      <AnimateIn>
        <Location />
      </AnimateIn>
    </>
  );
}
