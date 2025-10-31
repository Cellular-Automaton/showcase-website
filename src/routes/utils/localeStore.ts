import { locale, waitLocale } from "svelte-i18n"

export const getLocale = (defaultLocale: string) => {
  const savedLocale = localStorage.getItem('locale')

  if (!savedLocale) {
    localStorage.setItem('locale', defaultLocale)
  }
  return savedLocale ?? defaultLocale
}

export const setLocale = async (newLocale: string) => {
  await waitLocale()
  localStorage.setItem('locale', newLocale)
  locale.set(newLocale)
}
