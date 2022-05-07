import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  useColorModeValue
} from "@chakra-ui/react"
import { FiMessageSquare } from "react-icons/fi"
import PrimaryButton from "../primaryButton"

function ContactMe() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <PrimaryButton icon={<FiMessageSquare />} onClick={onOpen}>Contact Me</PrimaryButton>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent paddingTop={8} bgColor={useColorModeValue("gray.200", "#202023")}>
          <DrawerHeader textAlign="center" fontSize={22}>Me envie uma mensagem</DrawerHeader>
          <DrawerBody>
            <FormControl>
              <FormLabel>Mensagem</FormLabel>
              <Textarea
                size="md"
                placeholder="Olá, Beatriz!"
                mb={5}
                variant="filled"
              />
              <FormLabel>E-mail</FormLabel>
              <Input
                placeholder="email@example.com"
                variant="filled"
              />

            </FormControl>
          </DrawerBody>
          <DrawerFooter justifyContent="space-evenly" alignItems="center">
            <PrimaryButton onClick={onClose}>Cancelar</PrimaryButton>
            <PrimaryButton>Enviar</PrimaryButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default ContactMe
