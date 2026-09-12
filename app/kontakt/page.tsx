import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { BOOKSY_URL } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt – Dojazd i Godziny Otwarcia",
  description:
    "Salon kosmetyczny Perfect Skin, ul. Gałeczki 30, 41-500 Chorzów. Telefon: +48 500 033 031. Godziny otwarcia, mapa dojazdu i rezerwacja wizyt online przez Booksy.",
  alternates: { canonical: "/kontakt" },
};

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function KontaktPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <Typography className="text-neutral-900 font-semibold tracking-wider uppercase mb-2 block text-sm">
            KONTAKT
          </Typography>
          <Typography variant="h1" className="mb-4">
            Kontakt – Salon Kosmetyczny Chorzów
          </Typography>
          <Typography variant="body" className="text-neutral-600 text-lg">
            Zarezerwuj wizytę i pozwól nam zadbać o Twoją skórę. Skontaktuj się z nami w razie jakichkolwiek pytań.
          </Typography>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-neutral-900 mt-1 shrink-0" />
              <div>
                <Typography variant="h3" className="mb-2">Adres</Typography>
                <div className="text-neutral-600">
                  <p className="font-medium text-neutral-900">Perfect Skin – Centrum Kosmetologii</p>
                  <p>ul. Gałeczki 30</p>
                  <p>41-500 Chorzów</p>
                  <p className="mt-2 text-sm italic">Dostępny bezpłatny parking dla klientów przed salonem.</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-neutral-900 mt-1 shrink-0" />
              <div>
                <Typography variant="h3" className="mb-2">Telefon</Typography>
                <a href="tel:+48500033031" className="text-neutral-600 hover:text-neutral-500 transition-colors block">
                  +48 500 033 031
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-neutral-900 mt-1 shrink-0" />
              <div>
                <Typography variant="h3" className="mb-2">E-mail</Typography>
                <a href="mailto:m.budzalewicz@gmail.com" className="text-neutral-600 hover:text-neutral-500 transition-colors block">
                  m.budzalewicz@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-neutral-900 mt-1 shrink-0" />
              <div>
                <Typography variant="h3" className="mb-2">Godziny otwarcia</Typography>
                <div className="text-neutral-600 space-y-1">
                  <p>Poniedziałek – Piątek: 10:00 – 18:00</p>
                  <p>Sobota: 09:00 – 14:00</p>
                  <p>Niedziela: Zamknięte</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Zarezerwuj wizytę na Booksy
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="rounded-2xl border border-neutral-200 shadow-sm overflow-hidden h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.724736183852!2d18.941656076932454!3d50.2783856024194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cebbd91657c7%3A0xcba7df68705bf124!2sJ%C3%B3zefa%20Ga%C5%82eczki%2030%2C%2041-500%20Chorz%C3%B3w!5e0!3m2!1spl!2spl!4v1714571981502!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa dojazdu do salonu Perfect Skin"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
