export const languages = {
  en: {
    title: 'Overview',
    api: "Api documentation",
    download: "How to download the app",
    plugins: 'How to download the base plugins',
    download_exp1: 'To download the desktop application, you can go to the <a href=\'../download\'>download page</a> (latest version is advised). The package is a zip/7zip that needs to be unarchived.',
    download_exp2: 'The executable to launch is <b>cami-desktop</b>.',
    download_alert: 'Do not change the folder of the executable or it will not work (or also move the files it comes with)',
    plugins_download: 'Plugin list and download links'
  },
  fr: {
    title: 'Sommaire',
    api: "Documentation de l'API",
    download: "Comment télécharger l'app",
    plugins: 'Comment télécharger les plugins (que nous avons développé)',
    download_exp1: 'Pour télécharger l\'app desktop, vous pouvez aller sur la <a href=\'../download\'>page de téléchargement</a> (conseillé de prendre la dernère version). Le packet est un fichier zip/7zip qui a besoin d\'être décompressé.',
    download_exp2: 'L\'executable à lancer est <b>cami-desktop</b>',
    download_alert: 'L\'app ne se lancera pas si l\'executable est changé de dossier sans les fichiers avec lesquels il est téléchargé',
    plugins_download: 'Page de téléchargements des plugins'
  }
};

export type Languages = keyof typeof languages;

export function isOfLangType(key: string): key is Languages {
  return ['en', 'fr'].includes(key);
}
