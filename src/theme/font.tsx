import { Global } from "@emotion/react"

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'NeueMachina';
        font-style: normal;
        font-weight: 700;
        src: url('/font/NeueMachina-Bold.woff') format('truetype');
      }

      @font-face {
        font-family: 'NeueMachina';
        font-style: normal;
        src: url('/font/NeueMachina-Medium.woff') format('truetype');
        font-weight: 500;
      }

      `}
  />
)

export default Fonts
