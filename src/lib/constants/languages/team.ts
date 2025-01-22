export const languages = {
  en: { home: 'Home', team: 'The team' },
  fr: { home: 'Accueil', team: "L'équipe" }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
