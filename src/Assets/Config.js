import * as Localization from 'expo-localization'

let defaultLocale
export const DEFAULT_LOCALE = 'ar'
try {
  defaultLocale = Localization.locale.split('-').reverse().pop().toLowerCase()
} catch (e) {
  defaultLocale = DEFAULT_LOCALE
}

const locales = ['ar', 'en']
if (locales.indexOf(defaultLocale) === -1) {
  defaultLocale = DEFAULT_LOCALE
}

const Config = {
  Translations: {
    locale: defaultLocale,
    locales,
    rtl: defaultLocale === 'ar',
    key: 'locale'
  }
}

export default Config
