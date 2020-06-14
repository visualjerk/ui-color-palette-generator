/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Label, Input, Button, Flex, Heading, Checkbox } from 'theme-ui'

function ExampleLogin() {
  return (
    <Flex
      sx={{ justifyContent: 'center', alignItems: 'center', height: 10 }}
      p={6}
    >
      <Box
        as="form"
        onSubmit={(e) => e.preventDefault()}
        sx={{
          width: 9,
          boxShadow: 3,
          borderRadius: 'small',
        }}
        p={6}
        bg="background"
      >
        <Heading as="h1" mb={3}>
          Welcome Back
        </Heading>
        <Label htmlFor="username">Username</Label>
        <Input name="username" id="username" mb={3} />
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" mb={3} />
        <Box>
          <Label mb={3}>
            <Checkbox />
            Remember me
          </Label>
        </Box>
        <Button sx={{ width: '100%' }}>Login</Button>
      </Box>
    </Flex>
  )
}

export default ExampleLogin
