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
          <Box
            as="iframe"
            src={video}
            width="100%"
            height="100%"
            sx={{
              aspectRatio: "16/9",
            }}
          />
        </ModalContent>
      </ModalOverlay>
    </Modal>
  </>
)
