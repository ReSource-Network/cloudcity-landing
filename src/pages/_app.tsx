import { Box, ChakraProvider } from "@chakra-ui/react"
import { CacheProvider } from "@emotion/react"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import Head from "next/head"
import createCache from "src/theme/cache"
import Fonts from "src/theme/font"
import theme from "src/theme/theme"

import SEOConfig from "../../next-seo.config"
// import { Nav } from "src/components"
import { Navv } from "src/components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={createCache()}>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <Fonts />
        <DefaultSeo {...SEOConfig} />
        <Box
          bgPosition="center"
          bgRepeat="no-repeat"
          overflow="auto"
          height="auto"
          bgColor="rgb(121, 165, 183)"
          // bgColor="#6F8AB7"
          bgImage="url('/background.png')"
        >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}
