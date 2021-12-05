import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [userGuess, setUserGuess] = useState('None')
  const [compGuess, setCompGuess] = useState('None')

  const [scores, setScores] = useState({
    user: 0, comp: 0
  })

  const userWin = () =>
    setScores({...scores, user: scores.user + 1})

  const userLoss = () =>
    setScores({...scores, comp: scores.comp + 1})

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

  const DisplayScore = ({userScore, compScore}) => (
    <div>
      You: {userScore} Computer: {compScore} 
    </div>
  )

  const compRandomChoice = () => setCompGuess(randomChoice(rps))

  const guessRock = () => {
    return (
      setUserGuess('rock'),
      compRandomChoice()
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
      <DisplayScore userScore={scores.user} compScore={scores.comp} />
      <Button onClick={guessRock} text={'rock'} />
      <Button onClick={guessPaper} text={'paper'} />
      <Button onClick={guessScissors} text={'scissors'} />
      <CheckResult userGuess={userGuess} compGuess={compGuess} />
    </div>
  )
}

export default App;