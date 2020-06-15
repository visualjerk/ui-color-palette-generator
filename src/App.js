/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import {
  ThemeProvider,
  Grid,
  Flex,
  Box,
  Text,
  Link,
  Textarea,
  Button,
} from 'theme-ui'
import { getTheme, setTheme, defaultTheme } from './theme'
import ExampleBox from './components/ExampleBox'
import ExampleLogin from './components/ExampleLogin'
import ExampleDashboard from './components/ExampleDashboard'
import ColorTile from './components/ColorTile'
import { debounce, cloneDeep } from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: getTheme(),
    }
  }

  setTheme = (theme) => {
    this.setState({ theme })
    setTheme(theme)
  }

  resetTheme = () => {
    this.setTheme(defaultTheme)
  }

  updateColors = (event) => {
    event.preventDefault()
    const colors = JSON.parse(event.target.querySelector('textarea').value)
    const theme = cloneDeep(this.state.theme)
    theme.colors = colors
    this.setTheme(theme)
  }

  updateColor = debounce((key, value) => {
    const theme = cloneDeep(this.state.theme)
    theme.colors[key] = value
    this.setTheme(theme)
  }, 200)

  debouncedUpdateColor = (key) => (event) => {
    this.updateColor(key, event.target.value)
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Box p={4}>
          <Box mb={6}>
            <Text mb={2} as="h1">
              UI Color Palette Generator
            </Text>
            <Text mb={4} as="p">
              Create and preview accessible color palettes. Export them to{' '}
              <Link href="https://theme-ui.com/" target="_blank">
                Theme UI
              </Link>{' '}
              and every library following the same{' '}
              <Link href="https://theme-ui.com/theme-spec/" target="_blank">
                specification
              </Link>
              .
            </Text>
            <Flex>
              <Grid
                gap={4}
                width={[128, 128, 128]}
                mr={6}
                sx={{
                  flexGrow: 1,
                }}
              >
                {Object.entries(this.state.theme.colors).map(
                  ([key, value], index) => (
                    <ColorTile
                      key={index}
                      color={value}
                      name={key}
                      onChange={this.debouncedUpdateColor(key)}
                    ></ColorTile>
                  )
                )}
              </Grid>
              <Box sx={{ width: 8, borderRadius: 'small' }} p={3} bg="muted">
                <form onSubmit={this.updateColors}>
                  <Textarea
                    rows={11}
                    defaultValue={JSON.stringify(
                      this.state.theme.colors,
                      null,
                      2
                    )}
                    bg="muted"
                    mb="3"
                    sx={{ backgroundColor: 'background' }}
                  />
                  <Button sx={{ width: '100%' }} mb={2}>
                    Update Theme
                  </Button>
                </form>
                <Button
                  variant="muted"
                  sx={{ width: '100%' }}
                  onClick={this.resetTheme}
                >
                  Reset Theme
                </Button>
              </Box>
            </Flex>
          </Box>
          <ExampleBox title="Dashboard">
            <ExampleDashboard />
          </ExampleBox>
          <ExampleBox title="Login Form">
            <ExampleLogin />
          </ExampleBox>
        </Box>
      </ThemeProvider>
    )
  }
}

export default App
