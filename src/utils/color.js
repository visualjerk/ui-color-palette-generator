import chroma from 'chroma-js'

const shadeSteps = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 85, 90, 95, 100]

export function getShades(color) {
  const base = chroma(color)
  const baseL = base.get('hsl.l')

  const lightL = 0.97
  const darkL = 0.14

  const lightBase = base.set('hsl.l', lightL)
  const darkBase = base.set('hsl.l', darkL)

  let scale
  if (baseL >= lightL) {
    scale = chroma.scale([base, darkBase]).domain([0, 100])
  } else if (baseL <= darkL) {
    scale = chroma.scale([lightBase, base]).domain([0, 100])
  } else {
    const baseDomain = 100 - Math.round(baseL * 10) * 10
    scale = chroma
      .scale([lightBase, base, darkBase])
      .domain([0, baseDomain, 100])
  }

  const shades = scale.mode('hsl')
  // .correctLightness()
  // .classes(shadeSteps)

  return shadeSteps.map((step) => shades(step).hex())
}

export function getNamedShades(name, color) {
  const shades = getShades(color)
  return shades.reduce((namedShades, shade, index) => {
    namedShades[`${name}${shadeSteps[index]}`] = shade
    return namedShades
  }, {})
}

export function getContrastTextColor(color, darkText, lightText) {
  return chroma.contrast(color, darkText) > 5 ? darkText : lightText
}
