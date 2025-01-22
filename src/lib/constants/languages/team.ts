export const languages = {
  en: { title1: 'Who are we ?' },
  fr: { title1: 'Who are we ?' }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
