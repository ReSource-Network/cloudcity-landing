import { Box, ChakraProvider } from "@chakra-ui/react"

import theme from "../theme/theme"
import { AppProps } from "next/app"
import Fonts from "../theme/font"

import "@/styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Box
        bgPosition="center"
        bgRepeat="no-repeat"
        overflow="auto"
        height="auto"
        bgColor="black"
        bgImage="url('/background.png')"
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
