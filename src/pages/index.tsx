import { Box, Center, Flex, Image, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { useCallback, useState } from "react"

import { VideoOverlay, Footer } from "src/components"

const videos = [
  "https://player.vimeo.com/video/675587695?h=9273bda325&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/675587174?h=918d5a1313&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/675587396?h=7f162c73aa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/675587549?h=61506a8fb6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/675587695?h=9273bda325&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
]

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [idx, setIdx] = useState(0)

  const loopThroughArray = useCallback(
    () => (idx < videos.length - 1 ? setIdx(idx + 1) : setIdx(0)),
    [idx],
  )

  return (
    <>
      <Flex justifyContent="center" alignItems="center" height="100vh" bgClip="text" maxW="100%">
        <Stack maxW="100%" alignItems="center">
          <Text fontSize={{ base: "56px", md: "72px", lg: "88px" }} color="white" mb="-8">
            Cloud City
          </Text>
          <img width={"50%"} src="https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public" />
          <Text color="white" fontSize="x-large" pb={4}>
            coming soon...
          </Text>
          <Box maxW="90%" w="auto">
            <Image src="/rect-gradient.svg" />
          </Box>
          <Footer openVideo={onOpen} onClick={loopThroughArray} />
        </Stack>
      </Flex>

      <Center>
        <VideoOverlay onClose={onClose} isOpen={isOpen} video={videos[idx]} />
      </Center>
    </>
  )
}

export default Index
