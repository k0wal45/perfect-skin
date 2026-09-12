import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description:
    "Polityka prywatności salonu kosmetycznego Perfect Skin w Chorzowie. Informacje o przetwarzaniu danych osobowych i plikach cookies.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="py-16 md:py-24">
      <Container size="md">
        <Typography variant="h1" className="mb-8">
          Polityka Prywatności
        </Typography>
        <div className="prose prose-neutral max-w-none font-sans text-neutral-700 space-y-6">
          <p className="text-sm text-neutral-500">
            Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
          </p>

          <section>
            <Typography variant="h3" className="mb-3">
              1. Administrator danych
            </Typography>
            <p>
              Administratorem Twoich danych osobowych jest Perfect Skin –
              Centrum Kosmetologii z siedzibą przy ul.&nbsp;Gałeczki&nbsp;30,
              41-500&nbsp;Chorzów, e-mail:{" "}
              <a
                href="mailto:m.budzalewicz@gmail.com"
                className="text-neutral-900 font-medium hover:underline"
              >
                m.budzalewicz@gmail.com
              </a>
              , tel.&nbsp;+48&nbsp;500&nbsp;033&nbsp;031.
            </p>
          </section>

          <section>
            <Typography variant="h3" className="mb-3">
              2. Jakie dane zbieramy
            </Typography>
            <p>
              Nasza strona internetowa nie posiada formularzy kontaktowych ani
              rejestracji kont. Jedyne dane, które zbieramy automatycznie, to
              anonimowe dane analityczne za pośrednictwem usługi Google
              Analytics&nbsp;4 (GA4):
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Adres IP (anonimizowany)</li>
              <li>Typ przeglądarki i urządzenia</li>
              <li>Odwiedzane podstrony i czas wizyty</li>
              <li>Źródło ruchu (np. wyszukiwarka, media społecznościowe)</li>
            </ul>
          </section>

          <section>
            <Typography variant="h3" className="mb-3">
              3. Cel przetwarzania
            </Typography>
            <p>
              Dane analityczne przetwarzamy wyłącznie w celu analizy
              statystycznej ruchu na stronie i poprawy jej funkcjonalności
              (art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;f RODO – prawnie uzasadniony
              interes administratora).
            </p>
          </section>

          <section>
            <Typography variant="h3" className="mb-3">
              4. Google Analytics
            </Typography>
            <p>
              Korzystamy z Google Analytics&nbsp;4 dostarczanego przez Google
              Ireland Limited. GA4 domyślnie anonimizuje adresy IP i nie
              wykorzystuje klasycznych plików cookies do śledzenia. Dane mogą
              być przekazywane na serwery Google LLC w USA na podstawie
              standardowych klauzul umownych. Więcej informacji:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 font-medium hover:underline"
              >
                Polityka prywatności Google
              </a>
              .
            </p>
          </section>

          <section>
            <Typography variant="h3" className="mb-3">
              5. Pliki cookies
            </Typography>
            <p>
              Strona może wykorzystywać pliki cookies techniczne niezbędne do
              jej prawidłowego działania oraz cookies analityczne Google
              Analytics. Możesz zarządzać plikami cookies w ustawieniach swojej
              przeglądarki.
            </p>
          </section>

          <section>
            <Typography variant="h3" className="mb-3">
              6. Twoje prawa
            </Typography>
            <p>Masz prawo do:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dostępu do swoich danych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Sprzeciwu wobec przetwarzania</li>
              <li>
                Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
              </li>
            </ul>
            <p className="mt-3">
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt
              na adres e-mail:{" "}
              <a
                href="mailto:m.budzalewicz@gmail.com"
                className="text-neutral-900 font-medium hover:underline"
              >
                m.budzalewicz@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <Typography variant="h3" className="mb-3">
              7. Usługi zewnętrzne
            </Typography>
            <p>
              Rezerwacja wizyt odbywa się za pośrednictwem platformy Booksy.
              Korzystanie z Booksy podlega odrębnej polityce prywatności tego
              serwisu.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
