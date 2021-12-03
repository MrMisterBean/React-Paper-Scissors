import React, {useState} from 'react'
import './App.css'

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

  const Button = ({onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  const compRandomChoice = () => setCompGuess(randomChoice(rps))

  const guessRock = () => {
    return (
      setUserGuess('rock'),
      compRandomChoice(),
      <checkResult userGuess={userGuess} compGuess={compGuess} />
    )
  }
  const guessPaper = () => {
    return (
      setUserGuess('paper'),
      compRandomChoice()
    )
  }
  const guessScissors = () => {
    return (
      setUserGuess('scissors'),
      compRandomChoice()
    )
  }

  const messageWin = <div>You win! {userGuess} beats {compGuess} </div>
  const messageLoss = <div>You lose ☹️. {userGuess} loses to {compGuess} </div>
  const messageTie = <div>You tie! {userGuess} = {compGuess} </div>
  const messageStart = <div> Shoot! </div>

  const CheckResult = ( {userGuess, compGuess} ) => {

    if (compGuess === 'None') {
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
      <Button onClick={guessRock} text={'rock'} />
      <Button onClick={guessPaper} text={'paper'} />
      <Button onClick={guessScissors} text={'scissors'} />
      <CheckResult userGuess={userGuess} compGuess={compGuess} />
    </div>
  )
}

export default App;