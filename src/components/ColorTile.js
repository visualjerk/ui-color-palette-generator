/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box, Text } from 'theme-ui'
import { getNamedShades } from '../utils/color'
import { getContrastTextColor } from '../utils/color'

function ColorTile(props) {
  const shades = getNamedShades(props.name, props.color)
  const darkText = shades[`${props.name}100`]
  const lightText = shades[`${props.name}0`]

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box mb={2}>
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
        <Box px={2}>
          <Text>
            <strong>{props.name}</strong>
          </Text>
          <Text>{props.color}</Text>
        </Box>
      </Box>
      <Box>
        {Object.entries(shades).map(([name, color]) => (
          <Box
            sx={{
              backgroundColor: color,
              width: 7,
              color: getContrastTextColor(color, darkText, lightText),
            }}
            px={2}
            py={1}
          >
            <Text>{name}</Text>
            <Text>{color}</Text>
          </Box>
        ))}
      </Box>
    </Flex>
  )
}

export default ColorTile
