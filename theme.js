export const themes = {
  'dark': {
    main: '#2D2D2D', // black,
    success: '#3DBC6A', // medium sea green
    error: '#F23967', // crimson,
    textColor: '#E9E9E9', // white
    lineColor: '#B0B0B0' // gainsboro
  }
}

const defaultViewport = 1200
const baseFont = 36

export const typography = {
  fontFamily: `'Montserrat', sans-serif;`,
  bigFontSize: `${72 / baseFont}rem`,
  regularFontSize: `${36 / baseFont}rem`,
  smallFontSize: `${20 / baseFont}rem`,
  xBold: '900',
  bold: '700',
  light: '300',
  thin: '100'
}

export const sizes = {
  defaultViewport: `${defaultViewport / baseFont}rem`,
  defaultPadding: `${(defaultViewport * 0.03166666666) / baseFont}rem`,
  halfPadding: `${(defaultViewport * 0.02083333333) / baseFont}rem`
}
