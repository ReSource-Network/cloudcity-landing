import { Flex } from "@chakra-ui/react"
import { Widget } from "@typeform/embed-react"
import { BackButton } from "src/components"

import { NextSeo } from "next-seo"

const Whitelist = () => {
  const widgetContainerStyle = {
    width: 800,
    height: 600,
    margin: "auto",
  }

  return (
    <>
      <NextSeo
        title="Whitelist"
        description="Apply to our whitelist."
        canonical="https://cloudcity.art/whitelist/"
        openGraph={{
          url: "https://cloudcity.art/whitelist/",
          title: "Cloud City",
          description:
            "Cloud city is a visionary metropolis where 3D art & collaboration intersect to help humanity envision a world where metaverse technology is used to manifest a utopian civilization.",
          images: [
            {
              url: "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/306da7db-9fc1-4ef9-4894-ee5862679500/public",
              alt: "cloud city distance og-image",
            },
          ],
          site_name: "Cloud City",
        }}
      />
      <BackButton />
      <Flex justifyContent="center" alignItems="center" height="100vh" maxW="100%">
        <Widget id="krjzwhpd" style={widgetContainerStyle} />
      </Flex>
    </>
  )
}
export default Whitelist
