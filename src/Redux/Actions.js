import ReducerTypes from './ReducerTypes'

const setToken = (token, action) => ({ ...action, type: ReducerTypes.SET_TOKEN, token })

const setUser = (user, action = {}) => ({ ...action, type: ReducerTypes.SET_USER, user })

const signIn = ({ token, user }) => ({ token, user, dark: !1, type: ReducerTypes.SIGN_IN })

const signOut = (push_token) => ({ type: ReducerTypes.SIGN_OUT, push_token })

const setLocale = ({ locale, restart = !1 }) => ({ type: ReducerTypes.SET_LOCALE, locale, restart })

const toggleLocale = (restart = !0) => ({ type: ReducerTypes.TOGGLE_LOCALE, restart })

const setFirstStart = () => ({ type: ReducerTypes.FIRST_START })

export {
  setToken,
  setUser,
  signIn,
  signOut,
  setLocale,
  toggleLocale,
  setFirstStart
}
