import * as React from "react"
import Home from "../components/home"
import { ChakraProvider } from "@chakra-ui/react"
import "../components/layout.css"
import CodeEditor from "../components/code_editor/code_editor"

const IndexPage = () => (
  <ChakraProvider>
    <CodeEditor />
  </ChakraProvider>
)

export default IndexPage
