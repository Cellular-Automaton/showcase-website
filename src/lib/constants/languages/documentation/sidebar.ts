export const languages = {
  en: {
    overview: 'Overview',
    installation: 'Installation',
    get_started: 'Getting started',
    api: 'API'
  },
  fr: {
    overview: 'Sommaire',
    installation: 'Installation',
    get_started: 'Débuter',
    api: 'API'
  }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
