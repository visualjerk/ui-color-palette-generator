/** @jsx jsx */
import { jsx } from 'theme-ui'
import { darken, lighten } from '@theme-ui/color'
import { Box, Flex, Heading } from 'theme-ui'

function ExampleBox(props) {
  return (
    <Box
      sx={{
        borderRadius: 'small',
        boxShadow: 3,
        backgroundColor: 'background',
      }}
    >
      <Flex
        sx={{
          padding: 3,
          borderBottomWidth: 1,
          backgroundColor: 'muted',
          borderBottomColor: darken('muted', 0.075),
          borderBottomStyle: 'solid',
          justifyContent: 'space-between',
        }}
      >
        <Flex>
          <Box
            sx={{
              width: 0,
              height: 0,
              marginRight: 2,
              borderRadius: 'circle',
              backgroundColor: darken('grey', 0.2),
            }}
          />
          <Box
            sx={{
              width: 0,
              height: 0,
              marginRight: 2,
              borderRadius: 'circle',
              backgroundColor: lighten('grey', 0.2),
            }}
          />
          <Box
            sx={{
              width: 0,
              height: 0,
              borderRadius: 'circle',
              backgroundColor: lighten('grey', 0.2),
            }}
          />
        </Flex>
        <Heading as="h3" sx={{ fontSize: 0, fontWeight: 'normal' }}>
          Example: <strong>{props.title}</strong>
        </Heading>
      </Flex>
      <Box>{props.children}</Box>
    </Box>
  )
}

export default ExampleBox
