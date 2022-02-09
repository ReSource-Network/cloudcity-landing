import { Box, Button, Flex, HStack, Link as ChakraLink } from "@chakra-ui/react"
import { useCallback } from "react"
import { FaDiscord, FaEnvelope, FaPlay, FaTelegram, FaTwitter } from "react-icons/fa"

export const Footer = ({ openVideo, onClick }) => {
  const handleClick = useCallback(() => {
    onClick()
    openVideo()
  }, [openVideo, onClick])

  return (
    <>
      <Flex>
        <HStack minW="90%">
          <Box p={4}>
            <Button width="100%" variant="outline" colorScheme="black" onClick={handleClick}>
              <FaPlay size="20px" color="white" />
            </Button>
          </Box>

          <ChakraLink isExternal href="https://twitter.com" p={2}>
            <Button width="100%" variant="outline" colorScheme="black">
              <FaTwitter size="20px" color="white" />
            </Button>
          </ChakraLink>

          <ChakraLink isExternal href="" p={2}>
            <Button width="100%" variant="solid" colorScheme="black">
              <FaDiscord size="20px" color="white" />
            </Button>
          </ChakraLink>

          <ChakraLink isExternal href="" p={2}>
            <Button width="100%" variant="solid" colorScheme="black">
              <FaTelegram size="20px" color="white" />
            </Button>
          </ChakraLink>

          <ChakraLink isExternal href="" p={2}>
            <Button width="100%" variant="solid" colorScheme="black">
              <FaEnvelope size="20px" color="white" />
            </Button>
          </ChakraLink>
        </HStack>
      </Flex>
    </>
  )
}

// 3,
