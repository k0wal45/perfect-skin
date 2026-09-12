import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { BOOKSY_URL } from "@/lib/constants";
import { CalendarDays, ArrowRight, Phone } from "lucide-react";

export function AboutCta() {
  return (
    <section className="pb-24">
      <Container>
        <div className="relative rounded-3xl bg-neutral-100 p-8 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Decorative Backdrop circles */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-fixed rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-60 h-60 bg-primary-fixed rounded-full blur-2xl opacity-40 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 text-neutral-600 mb-4">
              <CalendarDays className="h-4 w-4 text-neutral-900" />
              <Typography variant="sectionSubtitle" className="!tracking-wider">
                Pierwszy krok do zdrowej skóry
              </Typography>
            </div>
            <Typography variant="h2" className="mb-4 leading-tight">
              Rozpocznij od wstępnej konsultacji diagnostycznej
            </Typography>
            <Typography variant="body" className="max-w-xl mx-auto lg:mx-0">
              Podczas 45-minutowego spotkania omówimy Twoje nawyki, zbadamy barierę lipidową i zaplanujemy spersonalizowany harmonogram zabiegów — bez presji i pośpiechu.
            </Typography>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto shadow-lg rounded-full px-8">
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                Umów wizytę online
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto bg-white text-neutral-900 shadow-sm border border-neutral-200 rounded-full px-6 hover:bg-neutral-50">
              <a href="tel:+48500033031">
                <Phone className="h-4 w-4" />
                +48 500 033 031
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
