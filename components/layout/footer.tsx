import Link from "next/link";
import { BOOKSY_URL } from "@/lib/constants";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/perfectskin_chorzow", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/PerfectSkinChorzow", icon: Facebook },
];

const treatmentLinks = [
  "Pielęgnacja Twarzy & Anti-Aging",
  "Kosmetologia Laserowa",
  "Peelingi Medyczne & Regeneracja",
  "Terapia Trądziku & Skóry Wrażliwej",
  "Masaże Relaksacyjne & Kobido",
] as const;

const navLinks = [
  { label: "Strona Główna", href: "/" },
  { label: "O Salonie i Zespole", href: "/o-nas" },
  { label: "Oferta", href: "/oferta" },
  { label: "Rezerwacja Online", href: BOOKSY_URL },
  { label: "Dojazd i Kontakt", href: "/kontakt" },
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-neutral-900 shadow-[0_-1px_8px_rgba(61,53,46,0.04)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 pt-12 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-serif text-[22px] text-neutral-900 tracking-tight">
              Perfect Skin
            </span>
            <p className="font-sans text-sm text-neutral-500 mt-4 mb-6 leading-relaxed">
              Autorski gabinet kosmetologii estetycznej i pielęgnacji skóry
              w Chorzowie. Oaza spokoju, naturalnego piękna oraz
              profesjonalnych rytuałów terapeutycznych.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-600 transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif text-[22px] text-neutral-900 mb-4">
              Zabiegi i Rytuały
            </h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              {treatmentLinks.map((t) => (
                <li key={t}>
                  <Link
                    href="/oferta"
                    className="hover:text-neutral-900 transition-colors inline-flex items-center gap-1"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-primary" />
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-[22px] text-neutral-900 mb-4">
              Nawigacja
            </h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              {navLinks.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    {isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-neutral-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-[22px] text-neutral-900 mb-4">
              Kontakt &amp; Wizyta
            </h4>
            <div className="space-y-4 text-sm text-neutral-500">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-neutral-900">
                    Salon Perfect Skin
                  </p>
                  <p>ul. Gałeczki 30, 41-500 Chorzów</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-neutral-900 shrink-0" />
                <p className="font-medium text-neutral-900">+48 500 033 031</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <p>Pn - Pt: 9:00 - 20:00</p>
                  <p>Sobota: 9:00 - 15:00</p>
                  <p>Niedziela: Zamknięte</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Perfect Skin Kosmetologia Chorzów. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <Link href="/polityka-prywatnosci" className="hover:text-neutral-900 transition-colors">
              Polityka Prywatności
            </Link>
            <span className="text-neutral-300">•</span>
            <span>
              Created by:{" "}
              <a
                href="https://lunarisweb.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors"
              >
                Lunaris Web
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
