export const languages = {
  en: {
    home: 'Home',
    team: 'The team',
    download: 'Download',
    dropdown: 'Documentation',
    item1: 'Overview',
    item2: 'How to get started ?',
    item3: 'Make your own plugin'
  },
  fr: {
    home: 'Accueil',
    team: "L'équipe",
    download: 'Télécharger',
    dropdown: 'Documentation',
    item1: 'Général',
    item2: 'Comment commencer ?',
    item3: 'Faire son propre plugin'
  }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
