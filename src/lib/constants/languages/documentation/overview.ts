export const languages = {
  en: {
    title: 'Overview'
  },
  fr: {
    title: 'Sommaire'
  }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
