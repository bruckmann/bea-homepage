import { Flex, Button } from "@chakra-ui/react"
import { FiDownload, FiLinkedin, FiMessageSquare } from "react-icons/fi"


function ContactButtons() {
  return(
    <Flex 
      width="80%" 
      justifyContent="space-evenly" 
      margin="auto"
    >
      <Button 
        rightIcon={<FiLinkedin />}
        size="lg"
        bgColor="blue.400"
        color="white"
      >
        LinkedIn
      </Button>
      <Button 
        rightIcon={<FiDownload />}
        bgColor="blue.400"
        size="lg"
        color="white"
      >
        Donwload my CV
      </Button>
      <Button 
        rightIcon={<FiMessageSquare />}
        bgColor="blue.400"
        size="lg"
        color="white"
      >
        Contact Me
      </Button>
    </Flex>
  )
}


export default ContactButtons