import {
  AspectRatio,
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react"
import Vimeo from "@u-wave/react-vimeo"
import { VStack, Flex } from "@chakra-ui/react"

export const VideoOverlay = ({ isOpen, onClose, video }) => (
  <>
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      closeOnEsc
      isCentered
      motionPreset="none"
      size="xl"
      trapFocus={false}
    >
      <ModalOverlay onClick={onClose}>
        <ModalContent m={4}>
          {/* <Box
            width="auto"
            height="auto"
            bgColor="black"
            sx={{
              aspectRatio: "16/9",
              volume: "0",
            }}
          > */}
          <AspectRatio bgColor="black" ratio={16 / 9}>
            <Vimeo video={video} autoplay width="1280" height="720" />
          </AspectRatio>
          {/* </Box> */}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  </>
)
