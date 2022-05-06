import Head from "next/head"
import { Container, Box, Flex, Center} from "@chakra-ui/react"

import NavBar from "./header"

function Layout({ children }) {
  return (
    <Box pb={8} h={"100vh"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Beatriz Borba - Homepage</title>
      </Head>

      <Container maxW="container.md" padding={10}>
        <NavBar />
      </Container>
      <Container 
        maxW="container.md" 
        pt={8}  
        display={"flex"} 
        alignItems={"center"} 
        height={'80%'}
      >
        {children}
      </Container>
    </Box>
  )
}

export default Layout
