import { Flex } from "@chakra-ui/react"
import { Widget } from "@typeform/embed-react"
import { BackButton } from "src/components"

const Whitelist = () => {
  const widgetContainerStyle = {
    width: 800,
    height: 600,
    margin: "auto",
  }

  return (
    <>
      <BackButton />
      <Flex justifyContent="center" alignItems="center" height="100vh" maxW="100%">
        <Widget id="krjzwhpd" style={widgetContainerStyle} />
      </Flex>
    </>
  )
}
export default Whitelist
