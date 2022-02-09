import { Flex, Heading } from "@chakra-ui/react"

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
    bgClip="text"
  >
    <Heading fontSize="7vw">{title}</Heading>
  </Flex>
)