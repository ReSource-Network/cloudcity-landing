/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Cloud City",
  titleTemplate: "%s | Microverse",
  defaultTitle: "Cloud City | Microverse",
  description:
    "Cloud City is a self existing autonomous decentralized city infrastructure project built with Unreal Engine 4.",
  canonical: "https://cloudcity.art",
  openGraph: {
    url: "https://cloudcity.art",
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
  },
  twitter: {
    handle: "@cloudcitynft",
    cardType: "summary_large_image",
  },
}

export default defaultSEOConfig
