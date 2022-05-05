import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#EDF2F7', '#202023')(props),
      fontFamily: 'Roboto'
    },
  })
}

const config = {
  initialCoorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles })
export default theme
