/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Text } from 'theme-ui'
import chroma from 'chroma-js'

function ColorTile(props) {
  const base = chroma(props.color)
  const baseL = base.get('hsl.l')

  const lightVariantCount = Math.floor((1 - baseL) * 10)
  const darkVariantCount = 10 - lightVariantCount

  const variants = [props.color]

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

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <input
        sx={{
          borderRadius: 'small',
          boxShadow: 1,
          width: 7,
          height: 7,
          marginBottom: 2,
          cursor: 'pointer',
        }}
        type="color"
        value={props.color}
        onChange={props.onChange}
      />
      <Text>
        <strong>{props.name}</strong>
      </Text>
      <Text mb={2}>{props.color}</Text>
      {variants.map((color, index) => (
        <Box sx={{ backgroundColor: color, width: 7, height: 3 }}>{color}</Box>
      ))}
    </Box>
  )
}

export default ColorTile
