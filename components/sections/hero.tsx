import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { BOOKSY_URL } from "@/lib/constants";
import {
  CalendarDays,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:pb-24">
      <Container className="relative z-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border-l-4 border-neutral-900 text-neutral-500 text-[11px] uppercase tracking-widest font-semibold font-sans">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>Centrum Kosmetologii • Chorzów</span>
            </div>

            <Typography
              variant="h1"
              className="text-[28px] leading-9 lg:text-[56px] lg:leading-16 tracking-tight"
            >
              Strona w budowie, dane moga być nie prawidłowe
              <br />
              <span className="italic text-neutral-900 text-3xl lg:text-[56px]">
                Perfect Skin
              </span>
            </Typography>

            <Typography variant="body" className="text-lg max-w-lg">
              Holistyczna kosmetologia estetyczna i zaawansowana laseroterapia.
              Dedykowana opieka i natychmiastowy blask cery.
            </Typography>

            <div className="flex items-center gap-3 pt-1 border border-neutral-200/60 rounded-full py-1.5 px-4 w-fit bg-white/50 backdrop-blur-sm shadow-sm">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-neutral-900 text-neutral-900"
                  />
                ))}
              </div>
              <div className="text-[13px] font-sans">
                <span className="font-semibold text-neutral-900">
                  5.0 / 5.0
                </span>
                <span className="text-neutral-500">
                  {" "}
                  na Booksy (ponad 650 opinii)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button asChild size="lg" className="shadow-md">
                <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                  Zarezerwuj wizytę Booksy
                  <CalendarDays className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/oferta">
                  Sprawdź ofertę
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Main image */}
              <div className="relative overflow-hidden shadow-2xl bg-surface-container-low p-2">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WUyl6pZhEXz8NmRkyz4sWCk53U-ydHn2SS4hfagKCd_y5PdCDtIqjfwGBD7dY6GfgciJHVGGYSPhScLOdZJW2dt10m6qYw1ZPQpLyvLy0-sGtOACvWLXtNIASR_lxip_WFT-_odebYkwLcNoNYxw2sPN_QgpkBpRm18Ydo5zVT5jFjvrFc4mxiVt0vtbb-J9E-XFawOxIVQmlNK5S7y3wbSgruXYM0Xt7K_WcaZ-uFZIHH4A2dEPwsvPk"
                  alt="Rytuał pielęgnacyjny i blask cery"
                  width={600}
                  height={430}
                  className="w-full h-[430px] object-cover"
                  priority
                />
              </div>

              {/* Inset bottom-right */}
              <div className="absolute -bottom-8 -right-4 sm:-right-6 w-60 sm:w-64 overflow-hidden shadow-2xl bg-white p-2">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WlAGP3gmHH3Jo51XljGAHg9z0GQKMwl18IMTMJ9ZF_YIS1GpQ0wh74x9b3Io2F1wPiYai1sMhV1GUvkr934gpbB6WeOCL86nlvWXYGn746D3-6UiuZuJyuVpLA0qu7Q1oryn8p11Ii8xSYEfRzfSyxosXOFekGs3P82ytWr9hpkjesWLBh6SEBD1cDXadXcCd7iFHDEiUxnNacsTUTRQ11IMwWRKFMwQKAWzWxeH-TmDgARHFWxk0tE4k"
                  alt="Luksusowe wnętrze kliniki Perfect Skin Chorzów"
                  width={260}
                  height={160}
                  className="w-full h-36 sm:h-40 object-cover"
                />
                <div className="p-3 text-center bg-white">
                  <p className="font-serif text-[15px] text-neutral-900 font-medium">
                    Chorzów • Gałeczki 30
                  </p>
                  <p className="font-sans text-[11px] text-neutral-500">
                    Depilcaja i pielęgnacja
                  </p>
                </div>
              </div>

              {/* Badge top-left */}
              <div className="absolute -top-4 -left-4 bg-white shadow-lg p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 flex items-center justify-center text-neutral-900">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-[14px] font-bold text-neutral-900">
                    Nowe technologie
                  </p>
                  <p className="font-sans text-[11px] text-neutral-500">
                    Lasery chłodzące
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
