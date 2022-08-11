import React, { useEffect } from "react"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-javascript"
import "prismjs/themes/prism.css" //Example style, you can use another
import { Box, Button, Text } from "@chakra-ui/react"
import { navigate } from "gatsby"

function CodeEditor() {
  const url = window.location.href
  console.log(url)

  const [result, setResult] = React.useState({ name: "", code: "" })
  const [code, setCode] = React.useState("")
  const setTheResults = url => {
    const parsedURL = url.split("/")
    console.log(parsedURL)
    switch (parsedURL[parsedURL.length - 1]) {
      case "roman":
        setResult({
          name: "Roman Numerals",
          code: `var romanToInt = function (s) {
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
                  }`,
        })
        break
      case "fib":
        setResult({
          name: "Fibinacci Sequence",
          code: `const fib = (num, stop, last = 1, index = 1) => {
                    if (stop <= 1) return 1
                    const sum = num + last
                    last = num
                    if (index === stop) return sum
                    index++
                    return fib(sum, stop, last, index)
                  }
                  
                  export const recFact = num => {
                    if (num <= 1) return 1
                    return num * recFact(num - 1)
                  }`,
        })
        break
      case "sort":
        setResult({
          name: "Merge Sort",
          code: `const mergeSort = array => {
                    if (array.length <= 1) return array
                    const middleIndex = Math.floor(array.length / 2)
                    const leftArray = array.slice(0, middleIndex)
                    const rightArray = array.slice(middleIndex)
                  
                    return sort(mergeSort(leftArray), mergeSort(rightArray))
                  }
                  
                  const sort = (leftArray, rightArray) => {
                    const output = []
                    let leftIndex = 0
                    let rightIndex = 0
                  
                    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
                      const leftElement = leftArray[leftIndex]
                      const rightElement = rightArray[rightIndex]
                  
                      if (leftElement < rightElement) {
                        output.push(leftElement)
                        leftIndex++
                      } else {
                        output.push(rightElement)
                        rightIndex++
                      }
                    }
                    return [
                      ...output,
                      ...leftArray.slice(leftIndex),
                      ...rightArray.slice(rightIndex),
                    ]
                  }`,
        })
        break
      case "bst":
        setResult({
          name: "Binary Search Tree",
          code: `class Node {
                        constructor(data) {
                          this.data = data
                          this.left = null
                          this.right = null
                        }
                      }
                      
                      export class BST {
                        constructor(data) {
                          this.root = new Node(data)
                        }
                      
                        addNode(data) {
                          const node = this.root
                          const searchTree = node => {
                            if (node.data > data) {
                              if (node.left === null) {
                                node.left = new Node(data)
                              } else if (node.left !== null) {
                                return searchTree(node.left)
                              }
                            } else if (node.data < data) {
                              if (node.right === null) {
                                node.right = new Node(data)
                              } else if (node.right !== null) {
                                return searchTree(node.right)
                              }
                            }
                          }
                          return searchTree(node)
                        }
                      
                        searchData(val) {
                          const searchTree = node => {
                            let count = 1
                            if (val === node.data) {
                              return node
                            } else if (val !== node) {
                              if (val < node.data) {
                                return searchTree(node.left)
                              } else if (val > node.data) {
                                return searchTree(node.right)
                              }
                            }
                          }
                          return searchTree(this.root)
                        }
                      }`,
        })
    }
  }

  useEffect(() => {
    setTheResults(url)
  }, [])

  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column-reverse", md: "row" }}
      height={"100vh"}
      backgroundColor={"black"}
      padding="2rem"
      justifyContent={{ base: "center", md: "none" }}
      alignItems={{ base: "center", md: "flex-start" }}
    >
      <Box
        borderRadius={"20px"}
        height={"32.5vh"}
        backgroundColor={"#333"}
        width={{ base: "80vw", md: "45vw" }}
      >
        <Text
          marginTop={{ base: "1rem", md: "1rem" }}
          padding="2rem"
          paddingBottom={"1rem"}
          fontFamily={"Cormorant"}
          fontSize={"2rem"}
          color={"gold"}
          id="dsa"
        >
          {result.name}
        </Text>

        <Button margin="2rem" onClick={() => navigate("/#dsa")}>
          Back
        </Button>
      </Box>
      <Box
        marginLeft={{ base: "0", md: "2rem" }}
        marginBottom={{ base: "2rem", md: "0" }}
        height={{ base: "50vh", md: "90vh" }}
        width={{ base: "80vw", md: "50vw" }}
        overflow={"scroll"}
        borderRadius={"20px"}
        backgroundColor={"#eee"}
      >
        <Editor
          value={result.code}
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
