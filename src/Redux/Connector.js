import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLocale, setToken, setUser, signIn, signOut, toggleLocale, setFirstStart } from './Actions'
import i18n from 'i18n-js'
import { ThemeConfig } from '../Assets'

const Helpers = {
  _errorMessage: (errors = {}, name) => errors[name] ? errors[name][0] : undefined
}

const mapStateToProps = (state) => {
  const { app } = state

  const { dark, locale } = app
  const props = {
    ...Helpers,
    dark,
    theme: ThemeConfig.theme,
    themeMode: dark ? 'dark' : 'light',
    __: (scope, options) => i18n.t(scope, { locale, ...options })
  }

  return {
    app,
    ...props
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setToken,
      setUser,
      signIn,
      signOut,
      setLocale,
      toggleLocale,
      setFirstStart
    },
    dispatch
  )
}

export const Connector = (Component) => connect(mapStateToProps, mapDispatchToProps)(Component)

export default Connector
