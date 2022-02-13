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
import { VIDEOS } from "src/utils"
import { Footer, VideoOverlay, Navv, MenuOverlay } from "src/components"

export const Main = () => {
  const { isOpen: isOpenVideo, onOpen: onOpenVideo, onClose: onCloseVideo } = useDisclosure()

  const [idx, setIdx] = useState(0)

  const loopThroughArray = useCallback(
    () => (idx < Object.keys(VIDEOS).length - 1 ? setIdx(idx + 1) : setIdx(0)),
    [idx],
  )

  return (
    <>
      <Flex justifyContent="center" alignItems="center" height="100vh" maxW="100%">
        <Stack maxW="100%" alignItems="center">
          <Box width="lg" maxW="90%">
            <Image src="/inline-watermark.png" alt="logo" width="100%" />
          </Box>

          <Text color="white" fontSize="x-large" p={4}>
            coming soon...
          </Text>
          {/* <Box maxW="90%" w="auto"> */}
          {/* <Image src="/rect-gradient.svg" /> */}
          {/* </Box> */}
          <Footer openVideo={onOpenVideo} onClick={loopThroughArray} />
        </Stack>
      </Flex>

      <Center>
        <VideoOverlay onClose={onCloseVideo} isOpen={isOpenVideo} video={VIDEOS[idx]} />
      </Center>
    </>
  )
}
