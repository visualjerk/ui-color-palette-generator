/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { ThemeProvider, Box, Text, Link } from 'theme-ui'
import theme from './theme'
import ExampleBox from './components/ExampleBox'
import ExampleLogin from './components/ExampleLogin'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const newTheme = { ...this.state.theme }
    newTheme.colors.primary = event.target.value
    this.setState({ theme: newTheme })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Box p={4}>
          <Box mb={4}>
            <Text mb={2} as="h1">
              Theme UI Theme Creator
            </Text>
            <Text mb={4} as="p">
              Create, preview and export themes for{' '}
              <Link href="https://theme-ui.com/" target="_blank">
                Theme UI
              </Link>{' '}
              and every library following the same{' '}
              <Link href="https://theme-ui.com/theme-spec/" target="_blank">
                specification
              </Link>
              .
            </Text>
            <input
              type="color"
              value={this.state.theme.colors.primary}
              onChange={this.handleChange}
            />
          </Box>
          <ExampleBox title="Login Form">
            <ExampleLogin />
          </ExampleBox>
        </Box>
      </ThemeProvider>
    )
  }
}

export default App
