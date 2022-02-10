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
      size="5xl"
      trapFocus={false}
    >
      <ModalOverlay onClick={onClose}>
        <ModalCloseButton>
          <ModalContent m={4}>
            <AspectRatio bgColor="black" ratio={16 / 9}>
              <Vimeo video={video} autoplay width="1280" height="720" />
            </AspectRatio>
          </ModalContent>
        </ModalCloseButton>
      </ModalOverlay>
    </Modal>
  </>
)
