export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

/** Un valor con una versión por idioma. */
export type Localized<T = string> = Record<Locale, T>;

/** Texto traducido, o un valor que se muestra igual en todos los idiomas (nombres, tecnologías, años). */
export type Translatable = string | Localized;

export function localize(value: Translatable, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** El español vive en la raíz del sitio y el inglés en /en. */
export const homePath: Localized = {
  es: "/",
  en: "/en",
};
