import { Box, Flex, IconButton, Stack } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"

export const BackButton = () => {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Link href="/">
                <IconButton
                  width="100%"
                  variant="solid"
                  colorScheme="white"
                  aria-label="Back"
                  title="Back"
                  icon={<AiOutlineArrowLeft size="30px" />}
                />
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
