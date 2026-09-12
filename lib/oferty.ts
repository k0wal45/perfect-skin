import ofertyData from '@/oferty_perfect_skin.json';

export type Oferta = {
  kategoria: string;
  typ_zabiegu: string | null;
  nazwa_uslugi: string;
  wariant: string | null;
  cena_pln: number;
  cena_wyswietlana: string;
  czas_trwania_min: number;
  id_uslugi: string;
  image: string;
  opis: string;
  slug: string;
};

// Create a slug from a string
function createSlug(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // decompose to base characters and diacritics
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/[^\w\-]+/g, '') // remove non-word chars
    .replace(/\-\-+/g, '-') // replace multiple - with single -
    .replace(/^-+/, '') // trim - from start
    .replace(/-+$/, ''); // trim - from end
}

// Map the raw data and append slug
export const oferty: Oferta[] = (ofertyData as any[]).map((item) => ({
  ...item,
  slug: `${createSlug(item.nazwa_uslugi)}-${item.id_uslugi}`,
}));

export function getAllOferty(): Oferta[] {
  return oferty;
}

export function getOfertaBySlug(slug: string): Oferta | undefined {
  return oferty.find((o) => o.slug === slug);
}

export function getCategories(): string[] {
  const cats = new Set(oferty.map((o) => o.kategoria));
  return Array.from(cats).sort();
}
