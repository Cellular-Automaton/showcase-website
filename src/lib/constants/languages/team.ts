export const languages = {
  en: { title1: 'Who are we ?', doudou: 'Plugins (c++), devOps and back-end (elixir)', louis: 'Desktop app (electron) and model (figma)', nah: 'C++ and desktop app', luka: 'Organisation, back-end (elixir) and showcase website (svelte)' },
  fr: { title1: 'Qui sommes nous ?', doudou: 'Plugins (c++) et devOps', louis: 'Application desktop (electron) et maquette (figma)', nah: 'C++ et application desktop', luka: 'Organisation (linear),  back-end (elixir) et site d\'information (svelte)' }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
