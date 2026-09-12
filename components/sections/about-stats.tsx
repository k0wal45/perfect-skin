import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Star } from "lucide-react";

export function AboutStats() {
  return (
    <section className="py-20">
      <Container>
        <div className="bg-surface-lowest rounded-3xl p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-transparent md:divide-surface-container">
            {/* Stat 1 */}
            <div className="flex flex-col items-center p-4">
              <div className="font-serif text-4xl lg:text-[56px] text-neutral-900 font-normal mb-2">
                12+
              </div>
              <Typography variant="h3" className="mb-2 text-[20px]">
                Lat Praktyki Klinicznej
              </Typography>
              <Typography variant="body" className="text-[13px] max-w-xs">
                Setki godzin szkoleń kongresowych, studiów podyplomowych i tysiące przeprowadzonych rytuałów kosmetologicznych.
              </Typography>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col items-center p-4">
              <div className="flex items-center gap-1 mb-2">
                <span className="font-serif text-4xl lg:text-[56px] text-neutral-900 font-normal">
                  650+
                </span>
                <Star className="h-7 w-7 text-neutral-900 fill-neutral-900" />
              </div>
              <Typography variant="h3" className="mb-2 text-[20px]">
                Zweryfikowanych Opinii 5.0
              </Typography>
              <Typography variant="body" className="text-[13px] max-w-xs">
                Zaufanie pacjentek ze Śląska i całego kraju, które powracają do nas po spokój i bezkompromisową jakość.
              </Typography>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center p-4">
              <div className="font-serif text-4xl lg:text-[56px] text-neutral-900 font-normal mb-2">
                100%
              </div>
              <Typography variant="h3" className="mb-2 text-[20px]">
                Certyfikacja CE Medical
              </Typography>
              <Typography variant="body" className="text-[13px] max-w-xs">
                Każde urządzenie i koktajl mezoterapeutyczny spełniają rygorystyczne normy europejskie dla wyrobów medycznych.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
