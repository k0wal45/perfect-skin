import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { BOOKSY_URL } from "@/lib/constants";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";

export function AboutTeam() {
  return (
    <section className="pb-20">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Main duo photo */}
          <div className="relative bg-surface-lowest shadow-sm border border-surface-container overflow-hidden">
            <div className="relative w-full h-[420px] lg:h-[520px] overflow-hidden group">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1XHgyoFBi1oUReCVnmbEbEiO8YYA_-k-NYQg1SyHhpi563sI0TgJXI-Xn9M9awEHMUvFDEpGj9duFQlxuX92LHEzR9FaHUybBQo7GdXyeII1OLZDiF5_Py3fXstqYaC0QLgjugXeRGYxhz8yCOeL5hGVDQusTDhNxyDZ_3bL8527BLb-DbEtDpeSA4i-4UAa7V4NTfHZ1FFVHOjCvxs3IB8MqvyuiyS9FcfhsWk5AinsalNDf176x0UimhO"
                alt="Monika i Małgorzata — Założycielki Perfect Skin"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="bg-surface-bright/95 backdrop-blur-md p-6 border border-surface-container max-w-xl">
                  <Typography variant="sectionSubtitle" className="mb-1 block">
                    Duet Założycielski
                  </Typography>
                  <Typography variant="h2" className="text-[24px] mb-2">
                    Monika &amp; Małgorzata
                  </Typography>
                  <Typography variant="body" className="text-[13px]">
                    Współwłaścicielki i pasjonatki zaawansowanej kosmetologii klinicznej. Połączyły wiedzę akademicką, medyczną precyzję oraz bezkompromisowy szacunek do naturalnej architektury skóry.
                  </Typography>
                </div>
                <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white font-sans text-[11px] tracking-wider uppercase shadow-md">
                  <ShieldCheck className="h-5 w-5" />
                  Ekspertki Kosmetologii Klinicznej
                </div>
              </div>
            </div>
          </div>

          {/* Individual cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monika */}
            <div className="bg-surface-lowest border border-surface-container shadow-sm flex flex-col sm:flex-row overflow-hidden group">
              <div className="sm:w-1/2 relative h-80 sm:h-auto overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEvRlGT6SFbpwXnC87djV2ihJh7xFiOW_ZZI8y2AYuPlBg2A0xTrrgtm89hP64zfJS7Cezog3m6SeTzL7-G5t4PYKsUBwd_MTEnSyAgH1tZm5OZFJ-fwqh64q_H3FXVABgXesCJCmsYdszXKeZe5BB6c0mCSC50yqpJdejxhmS0O9U1AyFK9az26Fa0aQ-krAoccxi9YCq6aMBtAXyeZ6I1izr7l_WSbD2zMAv_5OgFJH8KaDGmB8p6g"
                  alt="Monika - Dyplomowany Kosmetolog"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md text-neutral-500 font-sans text-[11px] uppercase tracking-wider font-medium">
                  Kosmetologia Estetyczna
                </div>
              </div>
              <div className="sm:w-1/2 p-6 lg:p-8 flex flex-col justify-between bg-surface-container-low/40">
                <div className="space-y-2">
                  <span className="font-sans text-[11px] text-neutral-500 uppercase tracking-wider font-semibold block">
                    Współwłaścicielka
                  </span>
                  <Typography variant="h3" className="text-[26px]">Monika</Typography>
                  <p className="font-sans text-[13px] text-neutral-600 font-medium">
                    Dyplomowany Kosmetolog &amp; Architekt Twarzy
                  </p>
                  <blockquote className="italic text-neutral-500 text-[13px] border-l-2 border-neutral-200 pl-3 my-4 font-sans">
                    „Niezwykła precyzja, dbałość o każdy detal i podkreślenie naturalnego rysu bez przerysowania.”
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-surface-container">
                  <span className="font-sans text-[11px] text-tertiary uppercase tracking-wider block mb-2 font-medium">
                    Główne specjalizacje:
                  </span>
                  <ul className="space-y-1.5 font-sans text-[13px] text-neutral-900">
                    {["Kosmetologia Estetyczna & Stymulatory", "Makijaż Permanentny (Linergistka)", "Zaawansowana Architektura Oka", "Biorewitalizacja Komórkowa"].map(spec => (
                      <li key={spec} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-2">
                  <Button asChild className="w-full text-[12px] bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white" variant="ghost">
                    <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                      <span>Umów wizytę u Moniki</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            {/* Małgorzata */}
            <div className="bg-surface-lowest border border-surface-container shadow-sm flex flex-col sm:flex-row overflow-hidden group">
              <div className="sm:w-1/2 relative h-80 sm:h-auto overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUSq7ORSWYCwG0m38EGogkeSw1g1UqZ0UbpVk6jTyF4Elds5alBv0VcZeBQKP1NJJBSrEO5IfQbZ69CCGh4DLeWvg1kKp9-l0goi-wu2Q4n5mtDEBUEs2ZfpoCMedsKwx9WjTtcpfh2Js45hBHqbHtv0J2KEEJpw3rN3bc1vgp8TyOLlAuMjPJg1OTZpE2S6llf_9LFjKItFEjzJg46J2DK27SwV3OGgceDaaOVhlbmRy74jICR-ZXyg"
                  alt="Małgorzata - Kosmetolog i Podolog"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md text-neutral-500 font-sans text-[11px] uppercase tracking-wider font-medium">
                  Dermatoterapia &amp; Podologia
                </div>
              </div>
              <div className="sm:w-1/2 p-6 lg:p-8 flex flex-col justify-between bg-surface-container-low/40">
                <div className="space-y-2">
                  <span className="font-sans text-[11px] text-neutral-500 uppercase tracking-wider font-semibold block">
                    Współwłaścicielka
                  </span>
                  <Typography variant="h3" className="text-[26px]">Małgorzata</Typography>
                  <p className="font-sans text-[13px] text-neutral-600 font-medium">
                    Kosmetolog &amp; Specjalista Podologii Medycznej
                  </p>
                  <blockquote className="italic text-neutral-500 text-[13px] border-l-2 border-neutral-200 pl-3 my-4 font-sans">
                    „Pasja do trudnych przypadków dermatologicznych i przywracania pełnego komfortu stóp i skóry.”
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-surface-container">
                  <span className="font-sans text-[11px] text-tertiary uppercase tracking-wider block mb-2 font-medium">
                    Główne specjalizacje:
                  </span>
                  <ul className="space-y-1.5 font-sans text-[13px] text-neutral-900">
                    {["Podologia Medyczna & Wrastające Paznokcie", "Laseroterapia CO2, Tulowa & Piko", "Terapie Trądziku & Kwasowe estGen", "Odbudowa Bariery Naskórkowej"].map(spec => (
                      <li key={spec} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-2">
                  <Button asChild className="w-full text-[12px] bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white" variant="ghost">
                    <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                      <span>Umów wizytę u Małgorzaty</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
