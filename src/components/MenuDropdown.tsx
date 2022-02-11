import React from "react"
import {
  Box,
  ChakraProvider,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

export const MenuDropdown = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const gutter = 8

  return (
    <Stack direction="row" m={8}>
      <Popover trigger="hover" closeDelay={500} isOpen={isOpen} gutter={8}>
        <PopoverTrigger>
          <Box
            px={4}
            py={2}
            tabIndex={0}
            _focus={{ outline: "none", shadow: "outline" }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            onFocus={onOpen}
            onBlur={onClose}
          >
            Dropdown Trigger
          </Box>
        </PopoverTrigger>
        <PopoverContent
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onFocus={onOpen}
          onBlur={onClose}
          _after={{
            content: "''",
            position: "absolute",
            w: "100%",
            h: `${gutter}px`,
            top: `-${gutter}px`,
            left: 0,
          }}
        >
          <PopoverBody>
            <Stack>
              <Link href="#" px={4} py={2}>
                First Dropdown Link
              </Link>
              <Link href="#" px={4} py={2}>
                Second Dropdown Link
              </Link>
              <Link href="#" px={4} py={2}>
                Third Dropdown Link
              </Link>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Stack>
  )
}
