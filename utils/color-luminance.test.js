import colorLuminance from './color-luminance'

describe('utils/color-luminance', () => {
  it('should lighten the given color', () => {
    const color = '#101010'
    expect(colorLuminance(color, 0.5)).toEqual('#181818')
  })
  it('should darken the given color', () => {
    const color = '#101010'
    expect(colorLuminance(color, -0.5)).toEqual('#080808')
  })
})
