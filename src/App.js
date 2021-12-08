import React, {useState} from 'react'
import './App.css'
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissors from './images/scissors.png'

const App = () => {
  const [userGuess, setUserGuess] = useState('None')
  const [compGuess, setCompGuess] = useState('None')

  const rps = [
    'rock',
    'paper',
    'scissors'
  ]

  const randomChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const compRandomChoice = () => setCompGuess(randomChoice(rps))

  const chooseMove = (move) => () => {
    return(
    setUserGuess(move),
    compRandomChoice()
    )
  } 

  const messageWin = <div>You <strong>win!</strong> | {userGuess} beats {compGuess} </div>
  const messageLoss = <div>You <em>lose.</em> | {userGuess} loses to {compGuess} </div>
  const messageTie = <div>You tie. | {userGuess} = {compGuess} </div>
  const messageStart = <div> Shoot! </div>

  const CheckResult = () => {

    if (compGuess === 'None' && userGuess === 'None' ) {
      return messageStart
    }

    if (userGuess === compGuess) {
      return messageTie
    }

    if (userGuess === "rock") {
      if (compGuess === "scissors") {
        return messageWin
      } else {
        return messageLoss
      }
    }

    else if (userGuess === "paper") {
      if (compGuess === "rock") {
        return messageWin
      } else {
        return messageLoss
      }
    }

    else {
      if (compGuess === "paper") {
        return messageWin
      } else {
        return messageLoss
      }
    }
  }

  return (
    <div>
      <div class="buttons">
        <button><img className="photo" src={rock} alt="rock" onClick={chooseMove('rock')} /></button>
        <button><img className="photo" src={paper} alt="rock" onClick={chooseMove('paper')} /></button>
        <button><img className="photo" src={scissors} alt="rock" onClick={chooseMove('scissors')} /></button>
      </div>
      <CheckResult userGuess={userGuess} compGuess={compGuess} />
    </div>
  )
}

export default App;