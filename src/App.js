/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { ThemeProvider, Grid, Box, Text, Link } from 'theme-ui'
import theme from './theme'
import ExampleBox from './components/ExampleBox'
import ExampleLogin from './components/ExampleLogin'
import ExampleDashboard from './components/ExampleDashboard'
import ColorTile from './components/ColorTile'
import { debounce } from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme,
    }
  }

  updateColor = debounce((key, value) => {
    const newTheme = { ...this.state.theme }
    newTheme.colors[key] = value
    this.setState({ theme: newTheme })
  }, 200)

  debouncedUpdateColor = (key) => (event) => {
    this.updateColor(key, event.target.value)
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Box p={4}>
          <Box mb={4}>
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
            <Grid gap={4} width={[128, 128, 128]}>
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
