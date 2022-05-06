import { Box } from "@chakra-ui/react"
import AboutMe from "../components/aboutMe"
import ContactButtons from "../components/contactButtons"

export default function Home() {
  return (
      <Box>
        <AboutMe />
        <ContactButtons />
      </Box>
  )
}
