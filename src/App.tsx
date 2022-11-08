
import React, { useState } from 'react'
import SnakeLadderDisplay from './SnakeLadderDisplay'
import './App.css'
import dicePic from "./dice.jpg"

let playerUnique: string[] = [];
let playerz: string[] = [];
let count: number = 0;
let diceSpin: number;
let playerCurrentPosition: any = {};
let setPosition: number;

const App = () => {
  const [eachturn, seteachturn] = useState('P1');
  const [playernumber, setplayer] = useState<number>(0);
  const [finalvalue, setfinalvalue] = useState(0);

  let gameNumber: any[] = []
  const snakeArr = [17, 62, 64, 54, 87, 94, 93, 98]
  const snakeBite = [7, 19, 60, 34, 36, 75, 73, 79]
  const ladderArr = [4, 9, 21, 28, 51, 80, 72]
  const ladderUp = [14, 31, 42, 84, 67, 99, 91]

  for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
      for (let j = i; j > (i - 10); j--) {
        gameNumber.push(j)
      }
    } else {
      for (let j = (i - 9); j <= i; j++) {
        gameNumber.push(j)
      }
    }
  }

  function Playerplaying() { 
    console.log("The player are in The starting of The Function",playerz)
    let userValue: number = playernumber

    for (let i = 1; i <= userValue; i++) {
      playerz.push(`P${i}`)
      playerCurrentPosition[`P${i}`] = 0
    }
    playerUnique = [...new Set(playerz)]
    console.log(playerz, "playerz");
    console.log(playerUnique, "unique");
  }

  console.log(playerz, "ee")            //Error on this Line
  console.log(playerCurrentPosition, "hrfer");

  function playerRound() {
    if (count === playerUnique.length - 1) {
      count = 0
    } else {
      count++
    }
    seteachturn(playerUnique[count])
    console.log("playerTurn:", eachturn);
  }

  let random = Math.ceil(Math.random() * 6)

  function playerIndividualRound() {

    diceSpin = random


    if ((playerCurrentPosition[`P${count + 1}`] + diceSpin) <= 100) {
      if (snakeArr.includes(diceSpin + playerCurrentPosition[`P${count + 1}`])) {
        setPosition = (snakeBite[snakeArr.indexOf(playerCurrentPosition[`P${count + 1}`] + diceSpin)])
        setfinalvalue(setPosition)
        playerCurrentPosition[`P${count + 1}`] = (setPosition)
      } else if (ladderArr.includes(diceSpin + playerCurrentPosition[`P${count + 1}`])) {
        setPosition = (ladderUp[ladderArr.indexOf(diceSpin + playerCurrentPosition[`P${count + 1}`])])
        setfinalvalue(setPosition)
        playerCurrentPosition[`P${count + 1}`] = (setPosition)
      } else {
        setfinalvalue(diceSpin + playerCurrentPosition[`P${count + 1}`])
        playerCurrentPosition[`P${count + 1}`] += (diceSpin)
      }
    }
    if (playerCurrentPosition[`P${count + 1}`] === 100) {
      alert(`P${count + 1} is Winner`)
    }
    playerRound()
  }
  console.log(playerCurrentPosition, "hello")

  const setPlayerIncell = (cellNumber: number, playerDetails: any) => {

    let playerName : string[] = []
    let playerPosition:number[]=[]
    for(let i in playerCurrentPosition){
      playerName.push(i)
      playerPosition.push(playerCurrentPosition[i])
    }
    
   
    let finder: number = -1
    playerPosition.forEach((element: number) => {
      if (cellNumber === element) {
        finder = playerPosition.indexOf(element)
      }
    });
    if (finder != -1) {
      return <span className='playerIcon'>{playerName[finder] + "😀"}</span>
    }
  }

  return (
    <div>
      <div className='gamestart'>
        <div id='gameboard'>{gameNumber.map(value => <div className='cells'>
          <SnakeLadderDisplay
            number={value}
            snake={snakeArr.includes(value) ? '🐍' : ''}
            ladder={ladderArr.includes(value) ? '❤️' : ''}
            playerEmoji={setPlayerIncell(value, playerCurrentPosition)}
          /></div>)}
        </div>
        <div id='subparts'>
          <h3 id="head">Snake And Ladder</h3>
          <input id='input' onChange={(n) => setplayer(Number(n.target.value))} placeholder="Enter No of player" />
          <p><button id='submit' onClick={Playerplaying}>Submit</button></p>
          <h5>playerPosition:{eachturn}: {playerCurrentPosition[`P${count + 1}`]}</h5>
          <h5 id='diceSpin'>diceSpin:{diceSpin}</h5>
          <p><img src={dicePic} alt="dice roll" id='click' onClick={playerIndividualRound} /></p>
        </div>
      </div>
    </div>
  );
}
export default App;
