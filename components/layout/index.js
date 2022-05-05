import Head from "next/head"
import { Container, Box, Flex, Center} from "@chakra-ui/react"

import NavBar from "./header"

function Layout({ children }) {
  return (
    <Box pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Beatriz Borba - Homepage</title>
      </Head>

      <Container maxW="container.md" pt={8}>
        <NavBar />
        {children}
      </Container>
    </Box>
  )
}

export default Layout
