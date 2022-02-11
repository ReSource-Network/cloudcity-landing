import {
  Box,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Portal,
  Spacer,
  Stack,
  Text,
  useMenuItem,
  VisuallyHidden,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import React, { ReactNode, useState } from "react"

import { MotionBox } from "./MotionBox"

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link px={2} py={1} rounded={"md"} href={"#"}>
    {children}
  </Link>
)

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const MenuItem = (props) => {
    const { role: _, ...rest } = useMenuItem()
    return (
      <Center>
        <Text color="white">masterkeys</Text>
      </Center>
    )
  }

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Spacer />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu colorScheme="black">
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      cursor="pointer"
                      minW={0}
                      bgColor="transparent"
                      _hover={{
                        bg: "transparent",
                      }}
                    >
                      <VisuallyHidden>{isOpen ? "show" : "hide" + " menu"}</VisuallyHidden>
                      <MenuIcon isOpen={isOpen} />
                    </MenuButton>

                    <Portal>
                      <MenuList bgColor="black" borderColor="none" tabIndex={null}>
                        <MenuItem bgColor="black">masterkeys</MenuItem>
                      </MenuList>
                    </Portal>
                  </>
                )}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const MenuIcon = ({ isOpen = false }) => {
  const variant = isOpen ? "opened" : "closed"

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 3,
    },
  }

  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -3,
    },
  }

  const lineProps = {
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
  }

  return (
    <MotionBox
      ml="6px"
      sx={{
        svg: {
          display: "block",
          width: "30px",
          height: "30px",
          line: {
            stroke: "white",
            transition: "stroke #0.5s ease-out",
          },
        },
      }}
    >
      <motion.svg viewBox="0 0 14 14" overflow="visible" preserveAspectRatio="none">
        <motion.line x1="2" x2="12" y1="4" y2="4" variants={top} {...lineProps} />
        {true && <motion.line x1="2" x2="12" y1="7" y2="7" variants={center} {...lineProps} />}
        {true && <motion.line x1="2" x2="12" y1="10" y2="10" variants={bottom} {...lineProps} />}
      </motion.svg>
    </MotionBox>
  )
}
