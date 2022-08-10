import { Box, Button, Divider, Image, Input, Text } from "@chakra-ui/react"
import React from "react"
import { useState } from "react"
import { fib, mergeSort, romanToInt, BST } from "./shared/functions"
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiPython,
  DiReact,
} from "react-icons/di"

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
          <Text
            marginTop={{ base: "0", md: "5rem" }}
            fontFamily={"Cormorant"}
            fontSize={"2rem"}
            color={"gold"}
            marginBottom={"1rem"}
          >
            About Me
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              width={{ base: "100%", md: "48.5%" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <Text
                marginTop={{ base: "2rem", md: "3rem" }}
                fontFamily={"Cormorant"}
                fontSize={"1.5rem"}
                color={"gold"}
              >
                Professional
              </Text>
              <Text
                marginTop={"1rem"}
                fontFamily={"Cormorant"}
                fontSize={"1rem"}
                color={"white"}
              >
                I am a front end developer with two years of experience working
                with React, JavaScript, TypeScript, HTML and CSS. I have worked
                primarily with startups and consulting companies on projects
                that range from small web apps to full-blown social media sites.
              </Text>
            </Box>
            <Box
              width={{ base: "100%", md: "48.5%" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <Text
                marginTop={{ base: "2rem", md: "3rem" }}
                fontFamily={"Cormorant"}
                fontSize={"1.5rem"}
                color={"gold"}
              >
                Personal
              </Text>
              <Text
                marginTop={"1rem"}
                fontFamily={"Cormorant"}
                fontSize={"1rem"}
                color={"white"}
              >
                At my core I am an artist and musician. I play guitar, bass,
                piano and drums, combining these to compose my own songs. I am a
                writer, having been published for my poetry. And of course I am
                a developer, enjoying creating games and dissecting the how my
                favortie games are designed and how they function.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box width={"100%"} backgroundColor={"black"}>
          <Box
            display={"flex"}
            padding="2rem"
            justifyContent="center"
            width={"100vw"}
          >
            <Divider marginTop={"2rem"} color="white" />
          </Box>
          <Text
            marginTop={{ base: "1rem", md: "1rem" }}
            padding="2rem"
            fontFamily={"Cormorant"}
            fontSize={"2rem"}
            color={"gold"}
          >
            Career
          </Text>
        </Box>

        <Box
          backgroundColor={"black"}
          width={"100%"}
          paddingTop={"1rem"}
          paddingInline="2rem"
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            width={{ base: "100%", md: "48.5%" }}
            display={"flex"}
            flexDirection={"column"}
          >
            <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
              Alaeris - Full Stack Developer
            </Text>
            <Text fontFamily={"Cormorant"} fontSize={"1rem"} color={"gold"}>
              2022 - Today
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
            >
              As a full stack developer at Alaeris I had the opportunity to work
              with some of the industry's top personel. Our team consisted of
              founding mechinical engineers from Scoot (now known as Bird),
              artists that drew for the popular Nikeloden shows Hey Arnold and
              Invader Zim, developers that helped design the Orbitz web app,
              UI/UX designers from video games creator EA, and backend
              developers that scaled the mobile app Calm from round one funding.
              Together we have been working to secure funding for our mission of
              creating a carbon negative crypto currency called the Alaeris
              Token. It was my privilege to design the Alaeris landing page,
              email collection page, as well as participate in a creative and
              business capacity building the company from the ground up.
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
              _hover={{ color: "lightblue" }}
            >
              <a href="https://www.alaeris.com">Aleris.com</a>
            </Text>
          </Box>
          <Box
            width={{ base: "100%", md: "48.5%" }}
            display={"flex"}
            flexDirection={"column"}
            marginTop={{ base: "2rem", md: "0" }}
          >
            <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
              WWC - Full Stack Developer
            </Text>
            <Text fontFamily={"Cormorant"} fontSize={"1rem"} color={"gold"}>
              2021 - 2022
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
            >
              My time as a full stack developer at WinningWithChase LLC provided
              me with a chance to get my hands on a myriad of web projects
              ranging from landing pages to social media sites. My favorite
              projects to work on were Vomux and Zipti. For Vomux I was tasked
              with implementing the front end UI, adding auto-complete search
              functionality to the pages, and adding the code runner to complie,
              run, and display the code that the user would write. For Zipti I
              was employed to build the front end UI, handle input and display
              operations for the "ask event" system architecture, and deal with
              uploading and cropping photos and videos in both the profile view
              of the site as well as the conversation chat flow that the users
              would interact with.
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
              _hover={{ color: "lightblue" }}
            >
              <a href="https://www.winningwithchase.com">
                WinningWithChase.com
              </a>
            </Text>
          </Box>
        </Box>
        <Box width={"100%"} backgroundColor={"black"}>
          <Box
            display={"flex"}
            padding="2rem"
            justifyContent="center"
            width={"100vw"}
          >
            <Divider marginTop={"2rem"} color="white" />
          </Box>
          <Text
            marginTop={{ base: "1rem", md: "1rem" }}
            padding="2rem"
            fontFamily={"Cormorant"}
            fontSize={"2rem"}
            color={"gold"}
          >
            Projects
          </Text>
        </Box>
        <Box
          backgroundColor={"black"}
          width={"100%"}
          paddingTop={"1rem"}
          paddingInline="2rem"
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            width={{ base: "100%", md: "30%" }}
            display={"flex"}
            flexDirection={"column"}
          >
            <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
              Opalite
            </Text>
            <Text fontFamily={"Cormorant"} fontSize={"1rem"} color={"gold"}>
              Converting media into NFTs
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
            >
              Opalite is a side project that was done with many members of the
              Alaeris team. Opalite takes the user's social media and
              transform's their profiles into collections of NFTs. My subsection
              of the project was building the front end UI for the web
              application, adding input validation, image and video selction
              logic for uploading collections, and updating and displaying user
              profiles that communicated with the Opalite API.
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
              _hover={{ color: "lightblue" }}
            >
              <a href="https://www.opalite.io">Opalite.io</a>
            </Text>
          </Box>
          <Box
            width={{ base: "100%", md: "30%" }}
            display={"flex"}
            flexDirection={"column"}
            marginTop={{ base: "2rem", md: "0" }}
          >
            <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
              Fuckle
            </Text>
            <Text fontFamily={"Cormorant"} fontSize={"1rem"} color={"gold"}>
              Wordle, but with cuss words
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
            >
              What started off as a joke with my friends turned into a full
              blown web app with google analytics and users from all over the
              world. Fuckle is a knock off of the famous New York Times game
              Wordle, but instead of five letter words it will instead give the
              user four letter cuss words. It has a much better UI/UX than
              wordle, great animations and color schemes, and keeps track of the
              user's statistics using their browser's local storage.
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
              _hover={{ color: "lightblue" }}
            >
              <a href="https://www.fucklegame.com">Fucklegame.com</a>
            </Text>
          </Box>
          <Box
            width={{ base: "100%", md: "30%" }}
            display={"flex"}
            flexDirection={"column"}
            marginTop={{ base: "2rem", md: "0" }}
          >
            <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
              Nesh
            </Text>
            <Text fontFamily={"Cormorant"} fontSize={"1rem"} color={"gold"}>
              Don't forget your licks
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
            >
              Nesh is a guitar tabliture generator that allows the user to
              create, edit and export their tabs to a PDF to be shared with
              their fellow band mates. Nesh uses clever string to array
              conversion and manipulation of React components to generate the
              user's tab into an editable sheet. It then uses a third party
              JavaScript library to export their newly created tab sheet into a
              PDF and save it to their device.
            </Text>
            <Text
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              marginTop={"2rem"}
              color={"white"}
              _hover={{ color: "lightblue" }}
            >
              <a href="https://www.youtube.com/watch?v=tYPU5ojet_g">
                Watch Nesh Exibition Video
              </a>
            </Text>
          </Box>
        </Box>

        <Box width={"100%"} backgroundColor={"black"}>
          <Box
            display={"flex"}
            padding="2rem"
            justifyContent="center"
            width={"100vw"}
          >
            <Divider marginTop={"2rem"} color="white" />
          </Box>
          <Text
            marginTop={{ base: "1rem", md: "1rem" }}
            padding="2rem"
            fontFamily={"Cormorant"}
            fontSize={"2rem"}
            color={"gold"}
          >
            Technologies
          </Text>
        </Box>
        <Box
          justifyContent={{ base: "center", md: "space-between" }}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          padding={"2rem"}
          width={"100%"}
          paddingInline={"4rem"}
          backgroundColor={"black"}
        >
          <Box alignItems={"center"} display={"flex"} flexDirection={"row"}>
            <Text
              marginRight={".25rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
              padding="1rem"
            >
              React
            </Text>
            <DiReact color="white" width={"2rem"} />
          </Box>
          <Box alignItems={"center"} display={"flex"} flexDirection={"row"}>
            <Text
              marginRight={".25rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
              padding="1rem"
            >
              JavaScript
            </Text>
            <DiJavascript1 color="white" width={"2rem"} />
          </Box>
          <Box alignItems={"center"} display={"flex"} flexDirection={"row"}>
            <Text
              marginRight={".25rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
              padding="1rem"
            >
              Node
            </Text>
            <DiNodejsSmall color="white" width={"2rem"} />
          </Box>
          <Box alignItems={"center"} display={"flex"} flexDirection={"row"}>
            <Text
              marginRight={".25rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
              padding="1rem"
            >
              Python
            </Text>
            <DiPython color="white" width={"2rem"} />
          </Box>
          <Box alignItems={"center"} display={"flex"} flexDirection={"row"}>
            <Text
              marginRight={".25rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
              padding="1rem"
            >
              HTML
            </Text>
            <DiHtml5 color="white" width={"2rem"} />
          </Box>
          <Box alignItems={"center"} display={"flex"} flexDirection={"row"}>
            <Text
              marginRight={".25rem"}
              fontFamily={"Cormorant"}
              fontSize={"1rem"}
              color={"white"}
              padding="1rem"
            >
              CSS
            </Text>
            <DiCss3 color="white" width={"2rem"} />
          </Box>
        </Box>

        <Box width={"100%"} backgroundColor={"black"}>
          <Box
            display={"flex"}
            padding="2rem"
            justifyContent="center"
            width={"100vw"}
          >
            <Divider marginTop={"2rem"} color="white" />
          </Box>
          <Text
            marginTop={{ base: "1rem", md: "1rem" }}
            padding="2rem"
            fontFamily={"Cormorant"}
            fontSize={"2rem"}
            color={"gold"}
          >
            Data Structures and Algorithms
          </Text>
        </Box>

        <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
          <Box
            backgroundColor={"black"}
            height={{ base: "100%", lg: "33rem" }}
            display={"flex"}
            justifyContent={{ base: "center", md: "space-between" }}
            padding={"2rem"}
            flexDirection={"column"}
            width={{ base: "100%", lg: "25%" }}
          >
            <Box>
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
            </Box>
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
                    _hover={{ backgroundColor: "lightblue" }}
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
            height={{ base: "100%", lg: "33rem" }}
            display={"flex"}
            justifyContent={{ base: "center", md: "space-between" }}
            padding={"2rem"}
            flexDirection={"column"}
            width={{ base: "100%", lg: "25%" }}
          >
            <Box>
              <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
                Recursion
              </Text>
              <Text
                marginTop={"1rem"}
                fontFamily={"Cormorant"}
                fontSize={"1rem"}
                color={"white"}
              >
                In computer science, recursion is a programming technique using
                a function or algorithm that calls itself one or more times
                until a specified condition is met at which time the rest of
                each repetition is processed from the last one called to the
                first. This function will find the nth index of the fibinacci
                sequence, using the number inputted by you as its stopping
                condition.
              </Text>
            </Box>
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
                    _hover={{ backgroundColor: "lightblue" }}
                    borderLeftRadius={"0"}
                    backgroundColor={"gold"}
                    onClick={() => {
                      if (Number(fibInput) > 100) {
                        setFibText("Number cannot be higher than 100")
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
            height={{ base: "100%", lg: "33rem" }}
            display={"flex"}
            justifyContent={{ base: "center", md: "space-between" }}
            padding={"2rem"}
            flexDirection={"column"}
            width={{ base: "100%", lg: "25%" }}
          >
            <Box>
              <Text fontFamily={"Cormorant"} fontSize={"1.5rem"} color={"gold"}>
                Sorting
              </Text>
              <Text
                marginTop={"1rem"}
                fontFamily={"Cormorant"}
                fontSize={"1rem"}
                color={"white"}
              >
                In computer science, a sorting algorithm is an algorithm that
                puts elements of a list into an order. The most frequently used
                orders are numerical order and lexicographical order, and either
                ascending or descending. This function a merge sort style
                algorithm to sort all the individual numbers you input into
                ascending order.
              </Text>
            </Box>
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
                    _hover={{ backgroundColor: "lightblue" }}
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
            height={{ base: "100%", lg: "33rem" }}
            display={"flex"}
            justifyContent={{ base: "center", md: "space-between" }}
            padding={"2rem"}
            flexDirection={"column"}
            width={{ base: "100%", lg: "25%" }}
          >
            <Box>
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
                right subtree of a node contains only nodes with keys greater
                than the node’s key. The left and right subtree each must also
                be a binary search tree. The function below allows you to create
                and search your own BST.
              </Text>
            </Box>
            <Box>
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
                    _hover={{ backgroundColor: "lightblue" }}
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
                    _hover={{ backgroundColor: "lightblue" }}
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
    </Box>
  )
}

export default Home
