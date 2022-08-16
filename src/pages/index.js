import * as React from "react"
import Seo from "../components/seo"
import Home from "../components/home"
import { ChakraProvider } from "@chakra-ui/react"
import "../components/layout.css"

const IndexPage = () => (
  <ChakraProvider>
    <Seo title="Web Design" />
    <Home />
  </ChakraProvider>
)

export const Head = () => <Seo title="Sean La Tourette" />

export default IndexPage
