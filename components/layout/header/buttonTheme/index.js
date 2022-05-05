import { useState } from "react"
import { Box, Switch, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FiMoon, FiSun } from "react-icons/fi"

import styles from "./ButtonTheme.module.css"

function ButtonTheme() {
  
  const [isChecked, setIsChecked] = useState(false)
  const { toggleColorMode } = useColorMode()

  return(
    <Box className={styles.buttonTheme}>
      <Box 
        className={styles.boxIcon}
        bgColor={useColorModeValue("#E2E8F0", "#DF97E5")}
      >
        <FiMoon />
      </Box>
      <Switch 
        className={styles.switchButton}
        onChange={() => {
          toggleColorMode()
          setIsChecked(isChecked ? false : true)
        }}
        isChecked={isChecked}
      />
      <Box 
        className={styles.boxIcon} 
        bgColor={useColorModeValue("#F6AD55", "#E2E8F0")}
      >
        <FiSun />
      </Box>
    </Box>
  )
}


export default ButtonTheme