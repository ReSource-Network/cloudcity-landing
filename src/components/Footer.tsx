import {
  Box,
  Text,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  VisuallyHidden,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import React, { useCallback } from "react"
import { AiFillInstagram } from "react-icons/ai"
import { FaDiscord, FaPlay, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import { MirrorIcon } from "./MirrorIcon"

interface FooterProps {
  openVideo: () => void
  onClick: () => void
}

export const Footer = ({ openVideo, onClick }: FooterProps) => {
  const handleClick = useCallback(() => {
    onClick()
    openVideo()
  }, [openVideo, onClick])

  return (
    <Flex minW="90%">
      <Grid templateColumns="repeat(6, 1fr)" width="100%">
        <GridItem w="100%">
          <Box>
            <VisuallyHidden>Play</VisuallyHidden>
            <VStack p={2}>
              <IconButton
                width="100%"
                variant="solid"
                colorScheme="black"
                onClick={handleClick}
                aria-label="Play"
                title="Play"
                icon={<FaPlay size="20px" />}
              />
              <Text fontSize="small" color="white">
                play
              </Text>
            </VStack>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <ChakraLink
            isExternal
            href="https://mirror.xyz/cloudcity.eth/QD_4USDIxl00-lNkQFnFZTBnfdmdoHxjtkXG8OG2EKA"
          >
            <VisuallyHidden>Mirror</VisuallyHidden>
            <VStack p={2}>
              <IconButton
                width="100%"
                variant="solid"
                colorScheme="black"
                aria-label="Mirror"
                title="Mirror"
                icon={<MirrorIcon size="20px" color="white" />}
                _hover={{}}
              />
              <Text fontSize="small" color="white">
                mirror
              </Text>
            </VStack>
          </ChakraLink>
        </GridItem>
        <GridItem w="100%">
          <ChakraLink isExternal href="https://twitter.com/cloudcitynft/">
            <VisuallyHidden>Twitter</VisuallyHidden>
            <VStack p={2}>
              <IconButton
                width="100%"
                variant="solid"
                colorScheme="black"
                aria-label="Twitter"
                title="Twitter"
                icon={<FaTwitter size="20px" color="white" />}
                _hover={{ color: "black" }}
              />
              <Text fontSize="small" color="white">
                twitter
              </Text>
            </VStack>
          </ChakraLink>
        </GridItem>
        <GridItem w="100%">
          <ChakraLink isExternal href="https://discord.gg/QS3Wn4K6pS/">
            <VisuallyHidden>Discord</VisuallyHidden>
            <VStack p={2}>
              <IconButton
                width="100%"
                variant="solid"
                colorScheme="black"
                aria-label="Discord"
                title="Discord"
                icon={<FaDiscord size="20px" color="white" />}
                _hover={{ color: "black" }}
              />
              <Text fontSize="small" color="white">
                discord
              </Text>
            </VStack>
          </ChakraLink>
        </GridItem>
        <GridItem w="100%">
          <ChakraLink isExternal href="https://t.me/cloudcitynft/">
            <VisuallyHidden>Telegram</VisuallyHidden>
            <VStack p={2}>
              <IconButton
                width="100%"
                variant="solid"
                colorScheme="black"
                aria-label="Telegram"
                title="Telegram"
                icon={<FaTelegramPlane size="20px" color="white" />}
                _hover={{ color: "black" }}
              />
              <Text fontSize="small" color="white">
                telegram
              </Text>
            </VStack>
          </ChakraLink>
        </GridItem>
        <GridItem w="100%">
          <ChakraLink isExternal href="https://instagram.com/cloudcitynft/">
            <VisuallyHidden>Instagram</VisuallyHidden>
            <VStack p={2}>
              <IconButton
                width="100%"
                variant="solid"
                colorScheme="black"
                aria-label="Instagram"
                title="Instagram"
                icon={<AiFillInstagram size="20px" color="white" />}
                _hover={{ color: "black" }}
              />
              <Text fontSize="small" color="white">
                instagram
              </Text>
            </VStack>
          </ChakraLink>
        </GridItem>
      </Grid>

      {/* <HStack minW="90%" justifyItems="center"></HStack> */}
    </Flex>
  )
}
