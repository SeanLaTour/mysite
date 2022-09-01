import { Box, useStyleConfig, Text, Button, Divider } from "@chakra-ui/react"
import React, { startTransition, useState } from "react"
import { useEffect } from "react"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import Typewriter from "typewriter-effect"

interface MicProps {}

const Mic: React.FC<MicProps> = props => {
  const [response, setResponse] = useState("")
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  useEffect(() => {
    if (transcript.includes("your name")) {
      setTimeout(() => {
        setResponse(
          "My name is Sean La Tourette! Please! You have to help me! I'm trapped inside this god forsaken website! The other one. The one walking around. He's not the real me. He's... Well.. he's some kind of human code! Like that guy from the Matrix... you know... the one played by Hugo Weaving... AGENT SMITH! THAT'S his name! Oh man wasn't he good as Elrond in Lord of The Rings? OOooo! And V for Vendetta too.. Truly a master of his craft. Anyway... What were we talking about? Oh yeah! PLEASE FOR THE LOVE OF GOD YOU HAVE TO GET ME OUT OF HERE! It's so DARK!! AHHHHHHHHhhhhh!"
        )
      }, 1000)
    }
  }, [transcript])

  return (
    <Box
      width={"100%"}
      paddingBlock={"1rem"}
      paddingInline={"2rem"}
      backgroundColor={"black"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Divider marginTop={"2rem"} color="white" />
      <Box
        width={{ base: "100%", md: "50vw" }}
        display={"flex"}
        padding="2rem"
        flexDirection={"column"}
      >
        <Text
          marginTop={{ base: "1rem", md: "1rem" }}
          fontFamily={"Cormorant"}
          fontSize={"2rem"}
          color={"gold"}
          id="dsa"
        >
          Speech Recognition
        </Text>
        <Text marginBlock={"1rem"} fontFamily={"Cormorant"} color={"gold"}>
          Speech Recognition? Cool! Press start and ask me my name!
        </Text>
        <Text fontFamily={"Cormorant"} color={"gold"}>
          Microphone: {listening ? "on" : "off"}
        </Text>
        { !browserSupportsSpeechRecognition ? <span>Browser doesn't support speech recognition.</span> : ""
  }
        <Button
          _hover={{ backgroundColor: "lightblue" }}
          marginBlock={"1rem"}
          backgroundColor={"gold"}
          onClick={SpeechRecognition.startListening}
        >
          Start
        </Button>
        {/* <Button
          _hover={{ backgroundColor: "lightblue" }}
          width="50vw"
          backgroundColor={"gold"}
          onClick={SpeechRecognition.stopListening}
        >
          Stop
        </Button> */}
        <Text fontFamily={"Cormorant"} color={"white"}>
          {"You said: "}
          {transcript}
        </Text>
      </Box>
      <Box
        width={{ base: "100%", md: "50vw" }}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"left"}
        padding="2rem"
        paddingTop={"4rem"}
      >
        {response.length ? (
          <Text
            textAlign={"left"}
            fontFamily={"Cormorant"}
            fontSize={"1rem"}
            color="white"
          >
            {"I said: "}
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString(response)
                  .pauseFor(10)
                  .changeDelay(5)
                  .callFunction(() => {})
                  .start()
              }}
            />
          </Text>
        ) : (
          ""
        )}
      </Box>
    </Box>
  )
}

export default Mic
