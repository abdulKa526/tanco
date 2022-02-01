const MAIN_COLORS = {
  primary: '#00aa5c',
  dark: '#102744',
  blue: '#37ACB9',
  black: '#313133',
  green: '#59C0A1',
  brown: '#BE9E5F',
  red: '#e9430f',
  white: '#f1f1f1'
}

const primary = MAIN_COLORS.primary
const secondary = MAIN_COLORS.brown
const black = MAIN_COLORS.dark

const Colors = {
  ...MAIN_COLORS,
  primary,
  secondary,
  black,
  white: MAIN_COLORS.white,
  dark: MAIN_COLORS.dark,
  brown: MAIN_COLORS.brown,
  error: MAIN_COLORS.red
}

export {
  Colors,
  MAIN_COLORS
}
