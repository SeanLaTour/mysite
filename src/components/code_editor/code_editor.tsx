import React from "react"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-javascript"
import "prismjs/themes/prism.css" //Example style, you can use another
import { Box, Button, Text } from "@chakra-ui/react"
import { navigate } from "gatsby"

function CodeEditor() {

  const [result, setResult] = React.useState()
  const [code, setCode] = React.useState(
    `var romanToInt = function (s) {
        if (s.length === 1) {
          return romanKey[s]
        }
        s = s.split("")
        let num = 0
        for (let i = 0; i < s.length; i++) {
          if (romanKey[s[i]] < romanKey[s[i + 1]]) {
            num += Number(romanKey[s[i + 1]] - romanKey[s[i]])
            i++
          } else {
            num += Number(romanKey[s[i]])
          }
        }
        return num
      }
      
      const romanKey = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      }`
  )
  return (
    <Box
      display={"flex"}
      flexDirection={{base: "column-reverse", md: "row"}}
      height={"100vh"}
      backgroundColor={"black"}
      padding="2rem"
      justifyContent={{base: "center", md: "none"}}
      alignItems={{base: "center", md: "flex-start"}}
    >
      <Box
        borderRadius={"20px"}
        height={"50vh"}
        backgroundColor={"#333"}
        width={{base: "80vw", md: "45vw"}}
      >
        <Text
          marginTop={{ base: "1rem", md: "1rem" }}
          padding="2rem"
          fontFamily={"Cormorant"}
          fontSize={"2rem"}
          color={"gold"}
          id="dsa"
        >
          Roman Numerals
        </Text>
        <Button margin="2rem" onClick={() => navigate("/#dsa")}>
          Back
        </Button>
      </Box>
      <Box
        marginLeft={{base: "0", md: "2rem"}}
        marginBottom={{base: "2rem", md: "0"}}
        height={{base: "50vh", md: "90vh"}}
        width={{base: "80vw", md: "50vw"}}
        overflow={"scroll"}
        borderRadius={"20px"}
        backgroundColor={"#eee"}
      >
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </Box>
    </Box>
  )
}

export default CodeEditor
