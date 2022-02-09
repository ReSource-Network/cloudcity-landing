import { Global } from "@emotion/react"

export const Fonts = () => (
  <Global
    styles={`


      @font-face {
        font-family: 'Audiowide', cursive';
        src: url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
      }

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
