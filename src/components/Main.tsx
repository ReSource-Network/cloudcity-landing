import { Box, Button, Center, Flex, Image, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { PopupButton } from "@typeform/embed-react"
import React, { useCallback, useState } from "react"
import { Footer, VideoOverlay } from "src/components"
import { VIDEOS } from "src/utils"

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

          <Text color="white" fontSize="x-large" p={2}>
            coming soon...
          </Text>

          <Box maxW="80%" w="auto">
            <Image src="/gradient.svg" />
          </Box>
          <Footer openVideo={onOpenVideo} onClick={loopThroughArray} />
          <Box pt={4}>
            <Button
              size="lg"
              bgColor="rgb(130, 164, 181)"
              textColor="white"
              variant="outline"
              pt={1}
              _hover={{ color: "none" }}
            >
              <PopupButton id="krjzwhpd" style={{ all: "unset" }}>
                <Center>whitelist</Center>
              </PopupButton>
            </Button>
          </Box>
        </Stack>
      </Flex>

      <Center>
        <VideoOverlay onClose={onCloseVideo} isOpen={isOpenVideo} video={VIDEOS[idx]} />
      </Center>
    </>
  )
}
