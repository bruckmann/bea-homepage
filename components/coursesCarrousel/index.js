import Image from "next/image"
import { Box, Grid } from "@chakra-ui/react"



function CoursesCarrousel() {
  return (
    <Grid
      templateColumns="60% 40%"
      width="80%"
      height="70%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Image src="/assets/courses.jpg" width={1000} height={1000} layout="responsive" />
      <Box bgColor="#FFFF" width="100%" height="100%">
        Text
      </Box>
    </Grid >
  )
}

export default CoursesCarrousel
