import { Box, Container, Link, Switch } from "@chakra-ui/react"
import ButtonTheme from "./buttonTheme"

import styles from "./Navbar.module.css"

function NavBar() {
  return (
    <Box className={styles.navbar}>
      <Box className={styles.navbarLinks}>
        <Link>About me</Link>
        <Link>Work</Link>
        <Link>Courses</Link>
      </Box>

      <ButtonTheme />
    </Box>
  )
}

export default NavBar

