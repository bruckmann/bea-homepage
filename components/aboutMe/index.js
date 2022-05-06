import { Box, Avatar, useColorModeValue, Text } from "@chakra-ui/react"
import styles from "./AboutMe.module.css"

function AboutMe() {

  const avatarBorder = `4px solid ${useColorModeValue("#FFF", "#070707")}`

  return (
    <Box
      className={styles.aboutMe}
      bgColor={useColorModeValue("#FFF", "#070707")}
      verticalAlign="middle"
      mb="80px"
    >
      <Avatar
        className={styles.avatarAboutMe}
        name="Beatriz de Borba"
        size="2xl"
        src="https://media-exp1.licdn.com/dms/image/D4D35AQGDRAynaIZ3eg/profile-framedphoto-shrink_800_800/0/1651263659478?e=1651849200&v=beta&t=vIJM3JWZQZ7DlDVA-pJvZ10TevE96WsDdWxC74hUGJs"
        border={avatarBorder}
      />

      <Box className={styles.aboutMeText}>
        <Text
          fontSize={24}
        >
          Olá, me chamo <b>Beatriz de Borba!</b>
        </Text>
        <Text
          fontSize={20}
          fontWeight="light"
          lineHeight={8}
          maxWidth="94%"
          margin="auto"
        >
          Sou estudante de Psicologia e atualmente atuando como Talent Connector
          estou disponivel para me aventurar no mercado de Tech-Recruiting, até
          recrutei um dev como namorado pra fazer esse site pra mim.
        </Text>
      </Box>
    </Box>
  )
}

export default AboutMe
