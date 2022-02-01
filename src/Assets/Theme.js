import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native'
import { Colors, MAIN_COLORS } from './Colors'

const StyleClasses = (props = {}, style = {}) => {
  const styles = { ...style }

  const classes = [
    { prop: 'flex', style: 'flex' },
    { prop: 'jContent', style: 'justifyContent' },
    { prop: 'alignItems', style: 'alignItems' },
    { prop: 'ms', style: 'marginStart' },
    { prop: 'me', style: 'marginEnd' },
    { prop: 'mt', style: 'marginTop' },
    { prop: 'ml', style: 'marginLeft' },
    { prop: 'mb', style: 'marginBottom' },
    { prop: 'mr', style: 'marginRight' },
    { prop: 'mx', style: 'marginHorizontal' },
    { prop: 'my', style: 'marginVertical' },
    { prop: 'ma', style: 'margin' },
    { prop: 'ps', style: 'paddingStart' },
    { prop: 'pe', style: 'paddingEnd' },
    { prop: 'pt', style: 'paddingTop' },
    { prop: 'pl', style: 'paddingLeft' },
    { prop: 'pb', style: 'paddingBottom' },
    { prop: 'pr', style: 'paddingRight' },
    { prop: 'px', style: 'paddingHorizontal' },
    { prop: 'py', style: 'paddingVertical' },
    { prop: 'pa', style: 'padding' }
  ]
  classes.forEach((e) => {
    if (props[e.prop]) {
      styles[e.style] = props[e.prop]
      // props[e.prop] = undefined
    }
  })
  return styles
}

const theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...Colors,
    accent: MAIN_COLORS.brown,
    background: MAIN_COLORS.white,
    text: MAIN_COLORS.dark,
    header: '#f6f6f6'
  },
  statusBar: {
    style: 'dark'
  },
  dark: !1
}

const ThemeConfig = {
  dark: !1,
  theme
}

export {
  ThemeConfig,
  StyleClasses
}
