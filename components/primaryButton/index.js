import { Button } from "@chakra-ui/react"

function PrimaryButton({ children, icon, onClick }) {
  return icon ? <Button
    rightIcon={icon}
    size="lg"
    bgColor="blue.400"
    _hover={{ bg: "blue.600" }}
    color="white"
    onClick={() => onClick && onClick()}
  >
    {children}
  </Button> : (
    <Button
      size="lg"
      bgColor="blue.400"
      _hover={{ bg: "blue.600" }}
      color="white"
      onClick={() => onClick && onClick()}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
