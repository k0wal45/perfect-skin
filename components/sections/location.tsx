import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { MapPin, Clock, PhoneCall, Car, ExternalLink } from "lucide-react";

const contactItems = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Adres gabinetu",
    lines: ["ul. Gałeczki 30, 41-500 Chorzów"],
    note: "Bezpłatny parking bezpośrednio przed wejściem",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Godziny otwarcia",
    lines: ["Poniedziałek - Piątek: 10:00 - 19:00", "Sobota: 09:00 - 14:00"],
    note: "Możliwość rezerwacji innych godzin",
  },
  {
    icon: <PhoneCall className="h-5 w-5" />,
    title: "Kontakt bezpośredni",
    lines: ["+48 500 033 031", "+48 790 216 665"],
    note: "Chętnie odpowiemy na wszelkie pytania przed wizytą",
  },
];

export function Location() {
  return (
    <section className="py-12 bg-surface-container-low/70">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Info */}
          <div className="lg:col-span-6 space-y-6">
            <Typography variant="sectionSubtitle">
              Lokalizacja i Kontakt
            </Typography>
            <Typography variant="h2">
              Zapraszamy do naszego gabinetu w Chorzowie
            </Typography>
            <Typography variant="body" className="text-neutral-600">
              Zadbaliśmy o to, aby Twoja wizyta była komfortowa od samego
              początku. Nasz gabinet znajduje się w spokojnej, doskonale
              skomunikowanej części Chorzowa z bezpośrednim zjazdem z DTŚ.
            </Typography>

            <div className="space-y-4 pt-2">
              {contactItems.map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-white shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-primary-100 flex items-center justify-center text-neutral-900 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <Typography
                      variant="label"
                      className="font-semibold text-neutral-900 block mb-1"
                    >
                      {item.title}
                    </Typography>
                    {item.lines.map((line) => (
                      <Typography
                        key={line}
                        variant="body"
                        className="text-[15px] mb-0.5"
                      >
                        {line}
                      </Typography>
                    ))}
                    {item.note && (
                      <Typography
                        variant="bodyMuted"
                        className="text-[11px] text-neutral-500 mt-1"
                      >
                        {item.note}
                      </Typography>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden shadow-xl bg-white p-3">
              <div className="relative w-full h-80 lg:h-[420px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbR1qGV2ma78CEm0ka-XR6KI_ddJByS3WbrHZOY3e2WGBMVr-NJxKls6yUTqG-9ePIwZ_69diTck-heYnV2JNSVzWgFKtx-tVps5LaUlnvsJId5Yq4tWUreY3JGFdKzBviNwL6UWRQI-jQaqK6D5i_PNn9jxMKmz3KGz53PO9qtMDhSZB2M_WHPv-oNWIfjfbuIcPe7EUs39KxOiWdOIviAV9QyIl98JYwJDzHk7j5OIvUsDgxJgWaYA"
                  alt="Mapa dojazdu do gabinetu Perfect Skin"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-surface-container-low mt-3">
                <div className="flex items-center gap-2 text-neutral-900">
                  <Car className="h-5 w-5 text-neutral-900" />
                  <span className="font-sans text-xs font-semibold tracking-wider">
                    Szybki dojazd z Katowic (8 min), Gliwic i Bytomia
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Chorzów+Gałeczki+30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-semibold tracking-wider text-neutral-900 hover:underline flex items-center gap-1"
                >
                  Nawiguj
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
