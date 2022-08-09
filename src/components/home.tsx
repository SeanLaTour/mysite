import { Box, Button, Image, Input, Text } from "@chakra-ui/react"
import React from "react"
import { useState } from "react"
import { fib, mergeSort, romanToInt, BST } from "./shared/functions"

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  const [romanNumeralText, setRomanNumeralText] = useState("")
  const [romanNumeralInput, setRomanNumeralInput] = useState("")
  const [fibText, setFibText] = useState("")
  const [fibInput, setFibInput] = useState("")
  const [mergeText, setMergeText] = useState("")
  const [mergeInput, setMergeInput] = useState("")
  const [BSTInput, setBSTInput] = useState("")
  const [BSTSearch, setBSTSearch] = useState("")
  const [currentBST, setCurrentBST] = useState([])
  const [currentBSTNumber, setCurrentBSTNumber] = useState([])

  return (
    <Box backgroundColor="black" height={"300vh"} overflow={"scroll"}>
      <Image
        position={"absolute"}
        top={"0"}
        left={"0"}
        width="100%"
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <Box
        position={"absolute"}
        top={"70vh"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text fontFamily={"Cormorant"} fontSize={"3rem"} color={"white"}>
          Sean La Tourette
        </Text>
        <Text
          textAlign={"center"}
          fontFamily={"Cormorant"}
          marginTop={".5vh"}
          fontSize={"1.5rem"}
          color={"gold"}
          padding="2rem"
          paddingTop={"3vh"}
        >
          Web Design Never Looked This Good.
        </Text>
        <Box
          backgroundColor={"black"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          marginTop={"5vh"}
          paddingInline="2rem"
          textAlign={"left"}
        >
          <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
            About Me
          </Text>
          <Text
            marginTop={"1rem"}
            fontFamily={"Cormorant"}
            fontSize={"1rem"}
            color={"white"}
          >
            I am a front end developer with experience working with React,
            Javascript, HTML and CSS. I have worked primarily with startups and
            consulting companies on projects that range from small web apps to
            full-blown social media sites.
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
          <Box
            backgroundColor={"black"}
            height={{ base: "100%", md: "30rem" }}
            display={"flex"}
            justifyContent={{ base: "center", md: "space-between" }}
            padding={"2rem"}
            flexDirection={"column"}
            width={{ base: "100%", md: "25%" }}
          >
            <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
              Strings and Arrays
            </Text>
            <Text
              marginTop={"1rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
            >
              String and array manipulation refers to the process of handling
              and analyzing both strings and arrays. It involves various
              operations concerned with modification and parsing of strings to
              use and change its data. This function will translate any valid
              Roman numeral you input into its modern equivalent.
            </Text>
            <Box>
              <Text
                marginTop="1rem"
                fontFamily={"Cormorant"}
                fontSize={"1rem"}
                color={"gold"}
              >
                Translating Roman Numerals
              </Text>
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                marginTop={"1rem"}
              >
                <Box display={"flex"} flexDirection={"row"}>
                  <Input
                    borderRightRadius={"0"}
                    marginBottom={".5rem"}
                    color={"white"}
                    width={"100%"}
                    onChange={e => {
                      setRomanNumeralInput(e.target.value.toUpperCase())
                    }}
                  />
                  <Button
                    borderLeftRadius={"0"}
                    backgroundColor={"gold"}
                    onClick={() => {
                      if (!romanToInt(romanNumeralInput)) {
                        setRomanNumeralText("Must be a valide roman numeral.")
                        return
                      }
                      setRomanNumeralText(romanToInt(romanNumeralInput))
                    }}
                  >
                    Translate
                  </Button>
                </Box>

                <Text
                  textAlign={"center"}
                  fontFamily={"Cormorant"}
                  fontSize={"1.5rem"}
                  color={"gold"}
                >
                  {romanNumeralText}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            backgroundColor={"black"}
            height={{ base: "100%", md: "30rem" }}
            display={"flex"}
            justifyContent={{ base: "center", md: "space-between" }}
            padding={"2rem"}
            flexDirection={"column"}
            width={{ base: "100%", md: "25%" }}
          >
            <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
              Recursion
            </Text>
            <Text
              marginTop={"1rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
            >
              In computer science, recursion is a programming technique using a
              function or algorithm that calls itself one or more times until a
              specified condition is met at which time the rest of each
              repetition is processed from the last one called to the first.
              This function will find the nth index of the fibinacci sequence,
              using the number inputted by you as its stopping condition.
            </Text>
            <Box>
              <Text
                marginTop="1rem"
                fontFamily={"Cormorant"}
                fontSize={"1rem"}
                color={"gold"}
              >
                Fibinacci Sequence
              </Text>
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                marginTop={"1rem"}
              >
                <Box display={"flex"} flexDirection={"row"}>
                  <Input
                    type={"number"}
                    borderRightRadius={"0"}
                    marginBottom={".5rem"}
                    color={"white"}
                    width={"100%"}
                    onChange={e => {
                      setFibInput(e.target.value.toUpperCase())
                    }}
                  />
                  <Button
                    borderLeftRadius={"0"}
                    backgroundColor={"gold"}
                    onClick={() => {
                      if (Number(fibInput) > 1000) {
                        setFibText("Number cannot be higher than 1000")
                        return
                      }
                      setFibText(`${BigInt(fib(1, Number(fibInput) - 1))}`)
                    }}
                  >
                    Find
                  </Button>
                </Box>

                <Text
                  textAlign={"center"}
                  fontFamily={"Cormorant"}
                  fontSize={"1.5rem"}
                  color={"gold"}
                >
                  {fibText}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            backgroundColor={"black"}
            height={{ base: "100%", md: "30rem" }}
            display={"flex"}
            justifyContent={{ base: "center", md: "space-between" }}
            padding={"2rem"}
            flexDirection={"column"}
            width={{ base: "100%", md: "25%" }}
          >
            <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
              Sorting
            </Text>
            <Text
              marginTop={"1rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
            >
              In computer science, a sorting algorithm is an algorithm that puts
              elements of a list into an order. The most frequently used orders
              are numerical order and lexicographical order, and either
              ascending or descending. This function a merge sort style
              algorithm to sort all the individual numbers you input into
              ascending order.
            </Text>
            <Box>
              <Text
                marginTop="1rem"
                fontFamily={"Cormorant"}
                fontSize={"1rem"}
                color={"gold"}
              >
                Merge Sort
              </Text>
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                marginTop={"1rem"}
              >
                <Box display={"flex"} flexDirection={"row"}>
                  <Input
                    type={"number"}
                    borderRightRadius={"0"}
                    marginBottom={".5rem"}
                    color={"white"}
                    width={"100%"}
                    onChange={e => {
                      setMergeInput(e.target.value.toUpperCase())
                    }}
                  />
                  <Button
                    borderLeftRadius={"0"}
                    backgroundColor={"gold"}
                    onClick={() => {
                      setMergeText(mergeSort(mergeInput.split("")))
                    }}
                  >
                    Sort
                  </Button>
                </Box>

                <Text
                  textAlign={"center"}
                  fontFamily={"Cormorant"}
                  fontSize={"1.5rem"}
                  color={"gold"}
                >
                  {mergeText}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            backgroundColor={"black"}
            height={{ base: "100%", md: "30rem" }}
            display={"flex"}
            justifyContent={{ base: "center", md: "space-between" }}
            padding={"2rem"}
            flexDirection={"column"}
            width={{ base: "100%", md: "25%" }}
          >
            <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
              Binary Search Trees
            </Text>
            <Text
              marginTop={"1rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
            >
              Binary Search Tree is a node-based binary tree data structure
              which has the following properties: The left subtree of a node
              contains only nodes with keys lesser than the node’s key. The
              right subtree of a node contains only nodes with keys greater than
              the node’s key. The left and right subtree each must also be a
              binary search tree. The function below allows you to create and
              search your own BST.
            </Text>
            <Text
              marginTop="1rem"
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"gold"}
            >
              Create BST
            </Text>
            <Box
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              marginTop={"1rem"}
            >
              <Box display={"flex"} flexDirection={"row"}>
                <Input
                  type={"number"}
                  borderRightRadius={"0"}
                  marginBottom={".5rem"}
                  color={"white"}
                  width={"100%"}
                  onChange={e => {
                    setBSTInput(e.target.value)
                  }}
                />
                <Button
                  width="50vw"
                  borderLeftRadius={"0"}
                  backgroundColor={"gold"}
                  onClick={() => {
                    console.log(BSTInput)
                    if (Number(BSTInput) >= 100 || Number(BSTInput) <= 0) {
                      setCurrentBSTNumber([
                        "Please enter a number between 0 and 100.",
                        "",
                        "",
                      ])

                      return
                    }
                    setCurrentBST([...currentBST, BSTInput])
                    setCurrentBSTNumber([
                      `You added the node ${BSTInput}`,
                      "",
                      "",
                    ])
                    console.log(currentBST)
                  }}
                >
                  Add Node
                </Button>
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <Input
                  type={"number"}
                  borderRightRadius={"0"}
                  marginBottom={".5rem"}
                  color={"white"}
                  width={"100%"}
                  onChange={e => {
                    setBSTSearch(e.target.value)
                  }}
                />
                <Button
                  width="50vw"
                  borderLeftRadius={"0"}
                  backgroundColor={"gold"}
                  onClick={() => {
                    if (!currentBST.includes(BSTSearch)) {
                      setCurrentBSTNumber(["That node does not exit", "", ""])
                      return
                    }
                    const bst = new BST(currentBST[0])
                    for (let i = 1; i < currentBST.length; i++) {
                      bst.addNode(currentBST[i])
                    }
                    const node = bst.searchData(BSTSearch)
                    const left = node.left ? node.left.data : "null"
                    const right = node.right ? node.right.data : "null"
                    console.log(node, left, right)
                    setCurrentBSTNumber([node.data, left, right])
                  }}
                >
                  Search Node
                </Button>
              </Box>

              <Text
                textAlign={"center"}
                fontFamily={"Cormorant"}
                fontSize={"1.5rem"}
                color={"gold"}
              >
                {currentBSTNumber[0]}
              </Text>
              <Box
                width={"100%"}
                justifyContent={"space-around"}
                display={"flex"}
                flexDirection={"row"}
              >
                <Text
                  textAlign={"center"}
                  fontFamily={"Cormorant"}
                  fontSize={"1.5rem"}
                  color={"gold"}
                >
                  {currentBSTNumber[1]}
                </Text>
                <Text
                  textAlign={"center"}
                  fontFamily={"Cormorant"}
                  fontSize={"1.5rem"}
                  color={"gold"}
                >
                  {currentBSTNumber[2]}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
