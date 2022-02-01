import { combineReducers } from 'redux'
import { setI18nConfig, validateLocale } from '../Translations'
import ReducerTypes from './ReducerTypes'
import * as Updates from 'expo-updates'
import { setAxiosToken } from '../Assets/Axios'
import { ThemeConfig } from '../Assets'
import Config from '../Assets/Config'
import ApiMethods from '../Assets/ApiMethods'

const restartApp = () => {
  setTimeout(() => {
    Updates.reloadAsync()
  }, 2000)
}
const UPDATE_APP_LOCALE = (action = {}) => {
  const locale = validateLocale(action.locale)
  const restart = action.restart === !0
  setI18nConfig(locale)
  restart && restartApp()
}
const localeVariables = locale => {
  locale = validateLocale(locale)
  const rtl = locale === 'ar'
  return {
    locale,
    rtl,
    localeReverse: rtl ? 'en' : 'ar',
    align: rtl ? 'right' : 'left',
    textAlign: rtl ? 'right' : 'left',
    alignReverse: rtl ? 'left' : 'right',
    flexDirection: rtl ? 'row-reverse' : 'row'
  }
}

const INITIAL_STATE = {
  ...localeVariables(Config.Translations.locale),
  firstStart: !1,

  dark: ThemeConfig.dark,
  token: null,
  user: null
}

const Reducers = (prevState = { ...INITIAL_STATE }, action) => {
  // console.log(prevState.locale, action.type)
  let locale, restart, dark, token, s, user, push_token
  switch (action.type) {
    case ReducerTypes.FIRST_START:
      s = {
        ...prevState,
        firstStart: !0
      }
      // restartApp()
      // console.log(s)
      return s
    case ReducerTypes.SET_LOCALE:
      locale = validateLocale(action.locale)
      restart = action.restart === !0
      UPDATE_APP_LOCALE({ restart, locale })
      s = {
        ...prevState,
        ...localeVariables(locale)
      }
      // console.log(s)
      return s
    case ReducerTypes.TOGGLE_LOCALE:
      locale = validateLocale(prevState.locale) === 'ar' ? 'en' : 'ar'
      restart = action.restart === !0
      s = {
        ...prevState,
        ...localeVariables(locale)
      }
      UPDATE_APP_LOCALE({ restart, locale })
      // console.log(s)
      return s

    case ReducerTypes.TOGGLE_THEME:
      dark = !prevState.dark
      s = { ...prevState, dark }
      restart = action.restart === !0
      restart === !0 && restartApp()
      return s
    case ReducerTypes.SIGN_IN:
      token = action.token || null
      user = action.user || null
      s = { ...prevState, token, user }
      restartApp()
      return s
    case ReducerTypes.SIGN_OUT:
      try {
        push_token = action.push_token
        ApiMethods.logout(push_token)
      } catch (e) {

      }
      s = { ...prevState, token: null, user: null }
      restartApp()
      return s

    case ReducerTypes.SET_TOKEN:
      token = action.token || null
      restart = action.restart === !0
      setAxiosToken(token)
      s = { ...prevState, token }
      if (restart === !0) {
        restartApp()
      }
      return s
    case ReducerTypes.SET_USER:
      user = action.user || null
      restart = action.restart === !0
      s = { ...prevState, user }
      restart === !0 && restartApp()
      return s
    default:
      return prevState
  }
}

export default combineReducers({
  app: Reducers
})
