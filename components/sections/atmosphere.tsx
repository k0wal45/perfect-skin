import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Camera, Sparkles, Leaf } from "lucide-react";

const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJHI3AseabheRYezDIYc06cVAKvIzpP-7nrKfXsiaMLBc4FXxL8MofNtwcj3SfEJcQJt5vIhzPZaYsmOqNC4nyEncoP0DIBxbkbC4CvTPtrlzHhAohR_hrQqpxuGbFv7tOjRhDN6hfHVoRyaWBGMX--qU8XEh5zaWgrUYvo1i0bl73wVeTsmuoGNnDHiCkMBI0JlH2c8pa8fEeafDEA9KX-tVJVKujAASPMfAh29Ua5g_zVi1jnIv6ew",
    alt: "Prywatny Pokój Wypoczynkowy",
    label: "Strefa Wyciszenia",
    title: "Prywatny Pokój Wypoczynkowy",
    subtitle: "Herbaty ziołowe & cisza",
    span: "md:col-span-7",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsT1qocr7a3vdzlm9nn9Yt42pG5RPn2zpmNH4M-Qm9IIdpJ1dx-hjrNuJ1pTBvgB1neM5SBIMcUsn9hEjxO_aQDQBVHKXaC484LAKmEluZaDRm3-u2EX0SkEPjWsb60q3MMWbjyrrqgmZzl79isxGStSBiEIhKCrJE7QyyOAp54X7VLYYy_fBZ1oh5fq3g16gHYTrA3JdrlPKkVc5UY5HDi_O8SAhlfKACImKS-HRKa-ISxFEbTSoHbQ",
    alt: "Terapia Światłem & Laser",
    label: "Procedura Kliniczna",
    title: "Terapia Światłem & Laser",
    subtitle: "Bezinwazyjne odmładzanie i regeneracja mikronaczyń",
    span: "md:col-span-5",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSqZj_jK7QgUH4lnPaHVR-GvCx2fwhzc9Po_jroi-AzatI6bK43lFrSNZwi73tNwuiNM0EowhinmpymlKxoTssaGNlU2W2wula6ogWxIH5YJpAUuxp7bwXT1-58SqYConEkyU9BC87Xg8H2G3Uj8QCUyUT8wt4LbT9BHFQdzFOP4A8UY3RkCbvyTUJmntcn01Pm1QZP5Rx0Gf-FLRHuZwsXPEFYt9tf2-s-WngaXoR-9svONWhKEP7IQ",
    alt: "Rytuał Gorących Kamieni Wulkanicznych",
    label: "Ciało & Zmysły",
    title: "Rytuał Gorących Kamieni Wulkanicznych",
    icon: <Sparkles className="h-5 w-5 text-neutral-900" />,
    span: "md:col-span-6",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAelaGZbjn0jIK5-t-ca_gqRoMBN4_a7nj__F61AniTatjAiJV8iWI-_xbbdMhbvq99pbKOjJCUYk3qvAd89dRv3xnRnNAW4pPHcx1m9OJUtYic8hmezQ7mOCPxUWEiofw7WAq3esfVD16lS-Tim2-RYr7wh3PhdpNGcpjSiMlzupXDExXOGM8xrc1PRK1cXhmZyGo_yFhruyZEDPEoOoP47DNlISKxdjCjs9YAy2cvL1pufGD4T0hORQ",
    alt: "Czyste Ekstrakty Botaniczne & Serum",
    label: "Pielęgnacja Skóry",
    title: "Czyste Ekstrakty Botaniczne & Serum",
    icon: <Leaf className="h-5 w-5 text-neutral-900" />,
    span: "md:col-span-6",
    tall: false,
  },
];

export function Atmosphere() {
  return (
    <section className="py-12 lg:py-24 bg-surface-container-low/40 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 text-neutral-500 text-[11px] uppercase tracking-widest font-semibold font-sans">
              <Camera className="h-3.5 w-3.5 text-neutral-900" />
              Estetyka i Ukojenie
            </div>
            <Typography variant="h2" className="mt-3">
              Atmosfera &amp; Rytuały
            </Typography>
            <Typography variant="body" className="mt-1 max-w-xl">
              Kojąca przestrzeń stworzona do głębokiego wyciszenia, w której
              zaawansowane procedury medyczne łączą się z sensorycznym relaksem.
            </Typography>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wider text-neutral-500 font-sans">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary" />
              Kliniczna Czystość
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary" />
              Czyste Botaniki
            </span>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`${item.span} relative group overflow-hidden bg-white p-2 shadow-sm`}
            >
              <div
                className={`relative w-full ${item.tall ? "h-[360px] sm:h-[440px]" : "h-[320px]"} overflow-hidden`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/90 backdrop-blur-xl border-t border-neutral-200">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-neutral-900 font-semibold">
                    {item.label}
                  </span>
                  <Typography variant="h3" className="text-[17px] font-medium">
                    {item.title}
                  </Typography>
                  {item.subtitle && (
                    <Typography variant="bodyMuted" className="text-[13px]">
                      {item.subtitle}
                    </Typography>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
