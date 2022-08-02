import * as React from "react"
import Seo from "../components/seo"
import Home from "../components/home"
import { ChakraProvider } from "@chakra-ui/react"
import "../components/layout.css"

const IndexPage = () => (
  <ChakraProvider>
    <Seo title="Home" />
    <Home />
  </ChakraProvider>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
