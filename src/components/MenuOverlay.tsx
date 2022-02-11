import {
  AspectRatio,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Modal,
  Box,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
} from "@chakra-ui/react"
import React from "react"

import { KEYS } from "src/utils"

export const MenuOverlay = ({ isOpen, onClose }) => (
  <>
    <Modal onClose={onClose} size="7xl" isOpen={isOpen} isCentered>
      <ModalOverlay onClick={onClose} />
      <ModalCloseButton />
      <ModalContent bgColor="black" opacity="0.8" maxH="6xl">
        <ModalBody>
          <Box w="full" h="full">
            <SimpleGrid columns={4} mt={4} spacing={2}>
              {KEYS.map((key, idx) => (
                <>
                  <AspectRatio ratio={1}>
                    <Image src={key.image} alt="naruto" objectFit="cover" />
                  </AspectRatio>
                </>
              ))}
            </SimpleGrid>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
)
