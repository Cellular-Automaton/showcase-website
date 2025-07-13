export const languages = {
  en: {
    title: 'Overview',
    api: "Api documentation"
  },
  fr: {
    title: 'Sommaire',
    api: "Documentation de l'API"
  }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
