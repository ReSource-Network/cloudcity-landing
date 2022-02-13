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

          <Text color="white" fontSize="x-large" pb={4}>
            coming soon...
          </Text>
          <Box maxW="90%" w="auto">
            <Image src="/gradient.svg" />
          </Box>
          <Footer openVideo={onOpenVideo} onClick={loopThroughArray} />
        </Stack>
      </Flex>

      <Center>
        <VideoOverlay onClose={onCloseVideo} isOpen={isOpenVideo} video={VIDEOS[idx]} />
      </Center>
    </>
  )
}

/* CSS HEX */
// --sage: #B3BA89ff;
// --gainsboro: #D8E2E3ff;
// --queen-blue: #4A6B8Fff;
// --lapis-lazuli: #3A6189ff;
// --dark-sky-blue: #80AFC4ff;

// /* CSS HSL */
// --sage: hsla(69, 26%, 63%, 1);
// --gainsboro: hsla(185, 16%, 87%, 1);
// --queen-blue: hsla(211, 32%, 43%, 1);
// --lapis-lazuli: hsla(210, 41%, 38%, 1);
// --dark-sky-blue: hsla(199, 37%, 64%, 1);

// /* SCSS HEX */
// $sage: #B3BA89ff;
// $gainsboro: #D8E2E3ff;
// $queen-blue: #4A6B8Fff;
// $lapis-lazuli: #3A6189ff;
// $dark-sky-blue: #80AFC4ff;

// /* SCSS HSL */
// $sage: hsla(69, 26%, 63%, 1);
// $gainsboro: hsla(185, 16%, 87%, 1);
// $queen-blue: hsla(211, 32%, 43%, 1);
// $lapis-lazuli: hsla(210, 41%, 38%, 1);
// $dark-sky-blue: hsla(199, 37%, 64%, 1);

// /* SCSS RGB */
// $sage: rgba(179, 186, 137, 1);
// $gainsboro: rgba(216, 226, 227, 1);
// $queen-blue: rgba(74, 107, 143, 1);
// $lapis-lazuli: rgba(58, 97, 137, 1);
// $dark-sky-blue: rgba(128, 175, 196, 1);

/* SCSS Gradient */
// $gradient-top: linear-gradient(0deg, #B3BA89ff, #D8E2E3ff, #4A6B8Fff, #3A6189ff, #80AFC4ff);
// $gradient-right: linear-gradient(90deg, #B3BA89ff, #D8E2E3ff, #4A6B8Fff, #3A6189ff, #80AFC4ff);
// $gradient-bottom: linear-gradient(180deg, #B3BA89ff, #D8E2E3ff, #4A6B8Fff, #3A6189ff, #80AFC4ff);
// $gradient-left: linear-gradient(270deg, #B3BA89ff, #D8E2E3ff, #4A6B8Fff, #3A6189ff, #80AFC4ff);
// $gradient-top-right: linear-gradient(45deg, #B3BA89ff, #D8E2E3ff, #4A6B8Fff, #3A6189ff, #80AFC4ff);
// $gradient-bottom-right: linear-gradient(135deg, #B3BA89ff, #D8E2E3ff, #4A6B8Fff, #3A6189ff, #80AFC4ff);
// $gradient-top-left: linear-gradient(225deg, #B3BA89ff, #D8E2E3ff, #4A6B8Fff, #3A6189ff, #80AFC4ff);
// $gradient-bottom-left: linear-gradient(315deg, #B3BA89ff, #D8E2E3ff, #4A6B8Fff, #3A6189ff, #80AFC4ff);
// $gradient-radial: radial-gradient(#B3BA89ff, #D8E2E3ff, #4A6B8Fff, #3A6189ff, #80AFC4ff);
