export const languages = {
  en: {
    title: 'Download',
    alert_title: 'No content found',
    alert_button: 'Search more plugins'
  },
  fr: {
    title: 'Téléchargement',
    alert_title: 'Pas de résultats pour ce plugin',
    alert_button: 'Chercher d\'autres plugins'
  },
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
