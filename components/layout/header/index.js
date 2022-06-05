import { Box, Container, Link, Switch } from "@chakra-ui/react"
import ButtonTheme from "./buttonTheme"

import styles from "./Navbar.module.css"

function NavBar() {
  return (
    <Box className={styles.navbar}>
      <Box className={styles.navbarLinks}>
        <Link href="/">About me</Link>
        <Link href="/work">Work</Link>
        <Link href="/courses">Courses</Link>
      </Box>

      <ButtonTheme />
    </Box>
  )
}

export default NavBar

