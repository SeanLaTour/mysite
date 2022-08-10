import {
  Box,
  Button,
  Divider,
  Text,
  useEventListenerMap,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

interface GameProps {}

const Game: React.FC<GameProps> = props => {
  const [winState, setWinState] = useState("")
  const [gameBoard, setGameBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])

  const handleButtonClick = (x, y, id) => {
    const element = document.getElementById(id)
    if (element.innerHTML.length !== 0) return
    console.log(x, y)
    console.log(gameBoard)
    const tempGameBoard = gameBoard
    tempGameBoard[x][y] = 1
    setGameBoard(tempGameBoard)
    element.innerHTML = "X"
    if (endGame(tempGameBoard)) {
      setWinState("You win!")
      return
    }
    setTimeout(() => {
      AIMove(tempGameBoard, { x, y })
      if (endGame(gameBoard)) {
        setWinState("I win!")
        return
      }
    }, 1000)
  }

  const endGame = board => {
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
      if (board[0][0] !== 0 && board[0][1] !== 0 && board[0][1] !== 0) {
        console.log("WIN")
        return true
      }
    }
    if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
      if (board[1][0] !== 0 && board[1][1] !== 1 && board[1][1] !== 0) {
        console.log("WIN")
        return true
      }
    }
    if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
      if (board[2][0] !== 0 && board[2][1] !== 0 && board[2][1] !== 0) {
        console.log("WIN")
        return true
      }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      if (board[0][0] !== 0 && board[1][1] !== 0 && board[2][2] !== 0) {
        console.log("WIN")
        return true
      }
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      if (board[0][2] !== 0 && board[1][1] !== 0 && board[2][0] !== 0) {
        console.log("WIN")
        return true
      }
    }
    if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
      if (board[0][1] !== 0 && board[1][1] !== 0 && board[2][1] !== 0) {
        console.log("WIN")
        return true
      }
    }
    const checkArray = []
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        checkArray.push(gameBoard[i][j])
      }
    }
    if (!checkArray.includes(0)) {
      setWinState("It's a draw!")
    }
  }

  const AIMove = (board, lastMove) => {
    const tempGameBoard = gameBoard
    console.log(board)
    console.log(lastMove)
    if (board[0][0] === board[0][1] && board[0][2] === 0 && board[0][0] !== 0) {
      const element = document.getElementById(`02`)
      tempGameBoard[0][2] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[0][2] === board[0][1] &&
      board[0][0] === 0 &&
      board[0][2] !== 0
    ) {
      const element = document.getElementById(`00`)
      tempGameBoard[0][0] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[1][0] === board[1][1] &&
      board[1][2] === 0 &&
      board[1][0] !== 0
    ) {
      const element = document.getElementById(`12`)
      tempGameBoard[1][2] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[1][2] === board[1][1] &&
      board[1][0] === 0 &&
      board[1][2] !== 0
    ) {
      const element = document.getElementById(`10`)
      tempGameBoard[1][0] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[2][0] === board[2][1] &&
      board[2][2] === 0 &&
      board[2][0] !== 0
    ) {
      const element = document.getElementById(`22`)
      tempGameBoard[2][2] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[2][2] === board[2][1] &&
      board[2][0] === 0 &&
      board[2][2] !== 0
    ) {
      const element = document.getElementById(`20`)
      tempGameBoard[2][0] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[0][0] === board[1][0] &&
      board[2][0] === 0 &&
      board[0][0] !== 0
    ) {
      const element = document.getElementById(`20`)
      tempGameBoard[2][0] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[2][0] === board[1][0] &&
      board[0][0] === 0 &&
      board[2][0] !== 0
    ) {
      const element = document.getElementById(`00`)
      tempGameBoard[0][0] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[0][1] === board[1][1] &&
      board[2][1] === 0 &&
      board[0][1] !== 0
    ) {
      const element = document.getElementById(`21`)
      tempGameBoard[2][1] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[2][2] === board[1][2] &&
      board[0][2] === 0 &&
      board[2][2] !== 0
    ) {
      const element = document.getElementById(`02`)
      tempGameBoard[0][2] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[0][0] === board[1][1] &&
      board[2][2] === 0 &&
      board[0][0] !== 0
    ) {
      const element = document.getElementById(`22`)
      tempGameBoard[2][2] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[2][1] === board[1][1] &&
      board[0][1] === 0 &&
      board[2][1] !== 0
    ) {
      const element = document.getElementById(`01`)
      tempGameBoard[0][1] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      board[0][2] === board[1][1] &&
      board[2][0] === 0 &&
      board[0][2] !== 0
    ) {
      const element = document.getElementById(`20`)
      tempGameBoard[2][0] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (lastMove.x + 1 <= 2 && board[lastMove.x + 1][lastMove.y] === 0) {
      const element = document.getElementById(`${lastMove.x + 1}${lastMove.y}`)
      tempGameBoard[lastMove.x + 1][lastMove.y] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (lastMove.y + 1 <= 2 && board[lastMove.x][lastMove.y + 1] === 0) {
      const element = document.getElementById(`${lastMove.x}${lastMove.y + 1}`)
      tempGameBoard[lastMove.x][lastMove.y + 1] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      lastMove.y + 1 <= 2 &&
      lastMove.x + 1 <= 2 &&
      board[lastMove.x + 1][lastMove.y + 1] === 0
    ) {
      const element = document.getElementById(
        `${lastMove.x + 1}${lastMove.y + 1}`
      )
      tempGameBoard[lastMove.x + 1][lastMove.y + 1] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (
      lastMove.y - 1 >= 0 &&
      lastMove.x - 1 >= 0 &&
      board[lastMove.x - 1][lastMove.y - 1] === 0
    ) {
      const element = document.getElementById(
        `${lastMove.x - 1}${lastMove.y - 1}`
      )
      tempGameBoard[lastMove.x - 1][lastMove.y - 1] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (lastMove.y - 1 >= 0 && board[lastMove.x][lastMove.y - 1] === 0) {
      const element = document.getElementById(`${lastMove.x}${lastMove.y - 1}`)
      tempGameBoard[lastMove.x][lastMove.y - 1] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    } else if (lastMove.x - 1 >= 0 && board[lastMove.x - 1][lastMove.y] === 0) {
      const element = document.getElementById(`${lastMove.x - 1}${lastMove.y}`)
      tempGameBoard[lastMove.x - 1][lastMove.y] = 2
      setGameBoard(tempGameBoard)
      element.innerHTML = "O"
    }
  }

  return (
    <Box width={"100%"} paddingBlock={"1rem"} paddingInline={"2rem"} backgroundColor={"black"}>
      <Divider marginTop={"2rem"} color="white" />

      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        padding="2rem"
        width={"100%"}
        backgroundColor={"black"}
        color="gold"
        height={{ base: "100%", md: "32rem" }}
      >
        <Box width={{ base: "100%", md: "45vw" }}>
          <Text
            marginTop="1rem"
            fontFamily={"Cormorant"}
            fontSize={"2rem"}
            color={"gold"}
          >
            Tick Tack Toe
          </Text>
          <Text
            marginTop="1rem"
            fontFamily={"Cormorant"}
            fontSize={"1rem"}
            color={"white"}
          >
            This game of tick tack toe operates using React's state management,
            updating elements based off of ID's, and a 2D array that is checked
            with for loops to determine the AI's next move and whether the game
            has been won, lost, or drawn. The layout was built using React
            components with inline styling and is responsive to desktop and
            mobile. See if you're good enough to be the AI and get "tick tack
            toe, three in a row!"
          </Text>
        </Box>
        <Box
          paddingTop={"2rem"}
          display={"flex"}
          flexDirection={"column"}
          width={{ base: "100%", md: "50vw" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            borderTopRadius={"10px"}
            width={{ base: "15rem", md: "27rem" }}
            height={{ base: "5rem", md: "9rem" }}
            alignItems={"center"}
            borderWidth={"2px"}
            borderColor={"gold"}
            display={"flex"}
            flexDirection={"row"}
            borderBottomWidth={"0"}
          >
            <Button
              className="ticktackbutton"
              borderRadius={"10px 0 0 0"}
              id="00"
              width={"33.3%"}
              height={"100%"}
              backgroundColor={"black"}
              color="gold"
              borderRightColor="gold"
              borderRightWidth="1px"
              onClick={() => handleButtonClick(0, 0, "00")}
            ></Button>
            <Button
              className="ticktackbutton"
              id="01"
              width={"33.3%"}
              height={"100%"}
              backgroundColor={"black"}
              color="gold"
              borderRadius="0"
              borderRightColor="gold"
              borderRightWidth="1px"
              onClick={() => handleButtonClick(0, 1, "01")}
            ></Button>
            <Button
              className="ticktackbutton"
              id="02"
              width={"33.3%"}
              height={"100%"}
              backgroundColor={"black"}
              color="gold"
              borderRadius="0 10px 0 0"
              borderRightColor="gold"
              onClick={() => handleButtonClick(0, 2, "02")}
            ></Button>
          </Box>
          <Box
            width={{ base: "15rem", md: "27rem" }}
            height={{ base: "5rem", md: "9rem" }}
            alignItems={"center"}
            borderWidth={"2px"}
            borderColor={"gold"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <Button
              className="ticktackbutton"
              id="10"
              width={"33.3%"}
              height={"100%"}
              backgroundColor={"black"}
              color="gold"
              borderRadius="0"
              borderRightColor="gold"
              borderRightWidth="1px"
              onClick={() => handleButtonClick(1, 0, "10")}
            ></Button>
            <Button
              className="ticktackbutton"
              id="11"
              width={"33.3%"}
              height={"100%"}
              backgroundColor={"black"}
              color="gold"
              borderRadius="0"
              borderRightColor="gold"
              borderRightWidth="1px"
              onClick={() => handleButtonClick(1, 1, "11")}
            ></Button>
            <Button
              className="ticktackbutton"
              id="12"
              width={"33.3%"}
              height={"100%"}
              backgroundColor={"black"}
              color="gold"
              borderRadius="0"
              borderRightColor="gold"
              onClick={() => handleButtonClick(1, 2, "12")}
            ></Button>
          </Box>
          <Box
            borderBottomRadius={"10px"}
            width={{ base: "15rem", md: "27rem" }}
            height={{ base: "5rem", md: "9rem" }}
            alignItems={"center"}
            borderWidth={"2px"}
            borderColor={"gold"}
            display={"flex"}
            flexDirection={"row"}
            borderTop={"0"}
          >
            <Button
              className="ticktackbutton"
              id="20"
              width={"33.3%"}
              height={"100%"}
              backgroundColor={"black"}
              color="gold"
              borderRadius="0 0 0 10px"
              borderRightColor="gold"
              borderRightWidth="1px"
              onClick={() => handleButtonClick(2, 0, "20")}
            ></Button>
            <Button
              className="ticktackbutton"
              id="21"
              width={"33.3%"}
              height={"100%"}
              backgroundColor={"black"}
              color="gold"
              borderRadius="0"
              borderRightColor="gold"
              borderRightWidth="1px"
              onClick={() => handleButtonClick(2, 1, "21")}
            ></Button>
            <Button
              className="ticktackbutton"
              id="22"
              width={"33.3%"}
              height={"100%"}
              backgroundColor={"black"}
              color="gold"
              borderRadius="0 0 10px 0"
              borderRightColor="gold"
              onClick={() => handleButtonClick(2, 2, "22")}
            ></Button>
          </Box>
          <Text
            marginTop="1rem"
            fontFamily={"Cormorant"}
            fontSize={"2rem"}
            color={"gold"}
            textAlign={"center"}
          >
            {winState}
            {winState.length ? (
              <Button
                onClick={() => {
                  setGameBoard([
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                  ])
                  setWinState("")
                  const elements =
                    document.getElementsByClassName("ticktackbutton")
                  console.log(elements)
                  for (let i = 0; i < elements.length; i++) {
                    elements[i].innerHTML = ""
                  }
                }}
                _hover={{ backgroundColor: "lightblue" }}
                color="black"
                marginLeft={"1rem"}
              >
                Play again?
              </Button>
            ) : (
              ""
            )}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Game
