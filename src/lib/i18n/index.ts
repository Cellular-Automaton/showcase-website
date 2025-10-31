import { browser } from '$app/environment';
import { register, init, locale } from 'svelte-i18n'

export const defaultLocale = 'en'

register('en', () => import('./en.json'));
register('fr', () => import('./fr.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale
})
