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
  const [currentBST, setCurrentBST] = useState()
  const [currentBSTNumber, setCurrentBSTNumber] = useState()

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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Box>
        <Box
          backgroundColor={"black"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          padding={"2rem"}
          flexDirection={"column"}
          width={"100%"}
        >
          <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
            Translating Roman Numerals
          </Text>
          <Text
            marginTop={"1rem"}
            fontFamily={"Cormorant"}
            fontSize={"1rem"}
            color={"white"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
        <Box
          backgroundColor={"black"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          padding={"2rem"}
          flexDirection={"column"}
          width={"100%"}
        >
          <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
            Fibonacci Sequence
          </Text>
          <Text
            marginTop={"1rem"}
            fontFamily={"Cormorant"}
            fontSize={"1rem"}
            color={"white"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
                  setFibInput(e.target.value.toUpperCase())
                }}
              />
              <Button
                borderLeftRadius={"0"}
                backgroundColor={"gold"}
                onClick={() => {
                  setFibText(fib(1, Number(fibInput) - 1))
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
        <Box
          backgroundColor={"black"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          padding={"2rem"}
          flexDirection={"column"}
          width={"100%"}
        >
          <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
            Merge Sort
          </Text>
          <Text
            marginTop={"1rem"}
            fontFamily={"Cormorant"}
            fontSize={"1rem"}
            color={"white"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
        <Box
          backgroundColor={"black"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          padding={"2rem"}
          flexDirection={"column"}
          width={"100%"}
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
                  if (BSTInput.length === 0) return
                  if (currentBST === undefined) {
                    const bst = new BST(BSTInput)
                    setCurrentBST(bst)
                    console.log(currentBST)
                    const string = `The root of your BST is ${BSTInput}`
                    setCurrentBSTNumber(string)
                  } else {
                    currentBST.addNode(BSTInput)
                    console.log(currentBST)
                    const string = `You added a node with the value of ${
                      currentBST.searchData(BSTInput).data
                    }`
                    setCurrentBSTNumber(string)
                  }
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
                  if (!currentBST) {
                    setCurrentBSTNumber("That node does not exist.")
                    return
                  }
                  console.log(currentBST)
                  if (!currentBST.searchData(BSTInput)) {
                    setCurrentBSTNumber("That node does not exist.")
                    return
                  }
                  const string = `The node: ${
                    currentBST.searchData(BSTSearch).data
                  } has a left connection of ${
                    currentBST.searchData(BSTSearch).left
                      ? currentBST.searchData(BSTSearch).left.data
                      : "nothing"
                  } and a right connection of ${
                    currentBST.searchData(BSTSearch).right
                      ? currentBST.searchData(BSTSearch).right.data
                      : "nothing"
                  }`
                  console.log(string)
                  setCurrentBSTNumber(string)
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
              {currentBSTNumber}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const buildBSTUI = bst => {}

export default Home
