import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import React, { useCallback, useState } from "react"
import { KEYS, VIDEOS } from "src/utils"
import { Footer, VideoOverlay, Navv, MenuOverlay } from "src/components"

export const Main = () => {
  const { isOpen: isOpenVideo, onOpen: onOpenVideo, onClose: onCloseVideo } = useDisclosure()
  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure()

  const [idx, setIdx] = useState(0)

  const loopThroughArray = useCallback(
    () => (idx < VIDEOS.length - 1 ? setIdx(idx + 1) : setIdx(0)),
    [idx],
  )

  return (
    <>
      {/* <Navv isOpen={isOpenMenu} onOpen={onOpenMenu} onClose={onCloseMenu} /> */}

      <Flex justifyContent="center" alignItems="center" height="100vh" maxW="100%">
        <Stack maxW="100%" alignItems="center">
          <Box width="md">
            <Image src="/watermark.png" alt="logo" />
          </Box>

          <Text color="white" fontSize="x-large" pb={4}>
            coming soon...
          </Text>
          <Box maxW="90%" w="auto">
            <Image src="/rect-gradient.svg" />
          </Box>
          <Footer openVideo={onOpenVideo} onClick={loopThroughArray} />
        </Stack>
      </Flex>

      <Center>
        <VideoOverlay onClose={onCloseVideo} isOpen={isOpenVideo} video={VIDEOS[idx]} />
      </Center>

      {/* <Center>
        <MenuOverlay onClose={onCloseMenu} isOpen={isOpenMenu} />
      </Center> */}
    </>
  )
}
