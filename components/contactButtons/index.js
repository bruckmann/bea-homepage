import { Flex } from "@chakra-ui/react"
import { FiDownload, FiLinkedin } from "react-icons/fi"
import PrimaryButton from "../primaryButton"
import ContactMe from "../contactMe"

function ContactButtons() {
  return (
    <Flex
      width="80%"
      justifyContent="space-evenly"
      margin="auto"
    >
      <a href="https://www.linkedin.com/in/beatriz-borba/" target="__blank">
        <PrimaryButton icon={<FiLinkedin />}>
          LinkedIn
        </PrimaryButton>
      </a>
      <PrimaryButton icon={<FiDownload />}>
        Donwload my CV
      </PrimaryButton>
      <ContactMe />
    </Flex >
  )
}

export default ContactButtons
