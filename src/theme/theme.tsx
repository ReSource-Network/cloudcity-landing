import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const theme = extendTheme({
  global: {
    "html, body": {
      bgColor: "background",
    },
  },
  colors: {
    black: "#16161D",
    chartreuse: "#c9f500",
  },
  fonts: {
    heading: '"NeueMachina", sans-serif',
    body: '"NeueMachina", sans-serif',
  },
  breakpoints,
})

export default theme
