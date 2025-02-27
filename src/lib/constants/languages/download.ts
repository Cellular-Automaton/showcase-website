export const languages = {
  en: {
    title: 'Download'
  },
  fr: {
    title: 'Téléchargement'
  }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
