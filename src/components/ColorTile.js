/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Text } from 'theme-ui'

function ColorTile(props) {
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
      <Text>{props.color}</Text>
    </Box>
  )
}

export default ColorTile
