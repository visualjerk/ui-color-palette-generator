import chroma from 'chroma-js'

export function getShades(color) {
  const base = chroma(color)
  const baseL = base.get('hsl.l')

  const lightVariantCount = Math.floor((1 - baseL) * 10)
  const darkVariantCount = 10 - lightVariantCount

  const variants = [color]

  if (lightVariantCount > 0) {
    const lightBase = base.set('hsl.l', 0.97)
    const lightVariants = chroma
      .scale([lightBase, base])
      .mode('hsl')
      .correctLightness()
      .colors(lightVariantCount + 1)
    lightVariants.pop()
    variants.unshift(...lightVariants)
  }

  if (darkVariantCount > 0) {
    const darkBase = base.set('hsl.l', 0.12)
    const darkVariants = chroma
      .scale([base, darkBase])
      .mode('hsl')
      .correctLightness()
      .colors(darkVariantCount + 1)
    darkVariants.shift()
    variants.push(...darkVariants)
  }

  return variants
}

export function getNamedShades(name, color) {
  const shades = getShades(color)
  return shades.reduce((namedShades, shade, index) => {
    namedShades[`${name}${index * 10}`] = shade
    return namedShades
  }, {})
}

export function getContrastTextColor(color, darkText, lightText) {
  return chroma.contrast(color, darkText) > 5 ? darkText : lightText
}
