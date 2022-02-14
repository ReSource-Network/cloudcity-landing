import { DefaultSeo } from "next-seo"
import Head from "next/head"
import Fonts from "src/theme/font"

import SEOConfig from "../../next-seo.config"

export const Layout = ({ children }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
    </Head>
    <Fonts />
    <DefaultSeo {...SEOConfig} />
  </>
)
