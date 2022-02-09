import createEmotionCache from "@emotion/cache"

export default function createCache() {
  return createEmotionCache({ key: "chakra-emotion-css" })
}
