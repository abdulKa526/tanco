import I18n from 'i18n-js'
import { I18nManager } from 'react-native'
import { setAxiosLocale } from '../Assets/Axios'
import Config, { DEFAULT_LOCALE } from '../Assets/Config'

const Setting = Config.Translations

export const isValidLocale = locale => Setting.locales.indexOf(locale) !== -1

export const validateLocale = locale => {
  const def = Setting.locale

  locale = locale || def

  try {
    locale = locale.split('-').reverse().pop().toLowerCase()
  } catch (e) {
    locale = 'ar'
  }

  if (Setting.locales.indexOf(locale) === -1) { locale = def }

  return locale
}

const translationGetters = {
  ar: () => require('./ar').default,
  en: () => require('./en').default
}

const setI18nConfig = locale => {
  locale = validateLocale(locale)
  // console.log(locale, Platform.OS)
  const rtl = locale === 'ar'
  I18n.locale = locale
  I18n.defaultLocale = DEFAULT_LOCALE
  I18n.fallbacks = true
  I18n.missingBehaviour = 'guess'
  I18n.missingPlaceholder = () => ''
  I18n.missingTranslation = () => ''
  I18n.missingTranslationPrefix = ''
  I18n.translations = { [locale]: translationGetters[locale]() }
  I18n.rtl = () => I18n.locale === 'ar'
  I18n.getLocales = Object.keys(translationGetters)
  I18n.getLocales.forEach(v => I18n.translations[v] === undefined && (I18n.translations[v] = {}))
  setAxiosLocale(locale)

  I18nManager.allowRTL(rtl)
  I18nManager.forceRTL(rtl)
}
const __ = (key, config) => I18n.t(key, config)

export {
  I18n,
  setI18nConfig,
  __
}
