import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine } from "lucide-react";

export function Founders() {
  return (
    <section className="py-12 bg-surface-container-low/80 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-lg mx-auto shadow-2xl bg-white p-3">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1XHgyoFBi1oUReCVnmbEbEiO8YYA_-k-NYQg1SyHhpi563sI0TgJXI-Xn9M9awEHMUvFDEpGj9duFQlxuX92LHEzR9FaHUybBQo7GdXyeII1OLZDiF5_Py3fXstqYaC0QLgjugXeRGYxhz8yCOeL5hGVDQusTDhNxyDZ_3bL8527BLb-DbEtDpeSA4i-4UAa7V4NTfHZ1FFVHOjCvxs3IB8MqvyuiyS9FcfhsWk5AinsalNDf176x0UimhO"
                alt="Monika i Małgorzata - kosmetolożki kliniczne w Perfect Skin Chorzów"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-6 bg-white shadow-xl px-4 py-2 border-l-4 border-neutral-900">
              <p className="font-serif text-[15px] font-semibold text-neutral-900">
                Monika &amp; Małgorzata
              </p>
              <p className="font-sans text-[11px] text-neutral-500 uppercase tracking-wider">
                Założycielki i Ekspertki Kosmetologii
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5 lg:pl-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 text-neutral-500 text-[11px] font-semibold uppercase tracking-wider font-sans">
              <TreePine className="h-4 w-4 text-neutral-900" />
              Autorska Filozofia
            </div>

            <Typography
              variant="h2"
              className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] tracking-tight"
            >
              Medyczna wiedza.
              <br />
              <span className="italic text-neutral-900">
                Czyste efekty bez bólu.
              </span>
            </Typography>

            <div className="p-4 bg-white border-l-4 border-neutral-900">
              <Typography
                variant="h3"
                className="text-[16px] italic text-neutral-900 leading-snug"
              >
                „Tworzymy bezpieczną przystań, w której nauka o skórze wspiera
                Twoją naturalną pewność siebie.&rdquo;
              </Typography>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 w-full">
              <div className="p-4 bg-white">
                <p className="font-serif text-[22px] font-bold text-neutral-900">
                  1-na-1
                </p>
                <p className="font-sans text-[11px] text-neutral-500 mt-1">
                  Bez rotacji specjalistów
                </p>
              </div>
              <div className="p-4 bg-white">
                <p className="font-serif text-[22px] font-bold text-neutral-900">
                  100%
                </p>
                <p className="font-sans text-[11px] text-neutral-500 mt-1">
                  Zaangażowania w Twój plan
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild>
                <Link href="/o-nas">
                  Więcej o zespole
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
