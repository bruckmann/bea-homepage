import { Flex } from "@chakra-ui/react"
import { FiDownload, FiLinkedin } from "react-icons/fi"
import PrimaryButton from "../primaryButton"
import ContactMe from "../contactMe"

import styles from "./ContactButtons.module.css"

function ContactButtons() {
  return (
    <Flex
      width="80%"
      justifyContent="space-evenly"
      margin="auto"
      className={styles.ContactButtons}
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
