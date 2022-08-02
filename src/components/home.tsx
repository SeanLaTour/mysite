import { Box, Button, Image, Input, Text } from "@chakra-ui/react"
import React from "react"
import { useState } from "react"
import { romanToInt } from "./shared/functions"

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  const [romanNumeralText, setRomanNumeralText] = useState("")
  const [romanNumeralInput, setRomanNumeralInput] = useState("")
  return (
    <Box backgroundColor="black" height={"200vh"} overflow={"scroll"}>
      <Image
        position={"absolute"}
        top={"0"}
        left={"0"}
        width="100%"
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <Box
        position={"absolute"}
        top={"38rem"}
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
          fontFamily={"Cormorant"}
          marginTop={"1rem"}
          fontSize={"1.5rem"}
          color={"white"}
        >
          Web Design never looked this good.
        </Text>
        <Box
          backgroundColor={"black"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          padding="2rem"
        >
          <Text fontFamily={"Cormorant"} fontSize={"1rem"} color={"white"}>
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
          <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"white"}>
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
              color={"white"}
         
            >
              {romanNumeralText}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
