import { answerCountType } from "../../types";
import "./styles/game-board.css";
import { useState } from "react";

type setPrevState = (prevState: answerCountType) => answerCountType

export function FunctionalGameBoard({ 
    setAnswerCount, 
    fishData
  } : { 
    setAnswerCount: (param: setPrevState) => void,
    fishData: {name: string, url: string}
  }) {
  
    const [ fishName, setFishName ] = useState("")
  
    const handleAnswer = (answer: string) => {
      if (answer === fishData.name) {
        setAnswerCount((prev) => ({
          ...prev,
          correct: prev.correct + 1
        }))
      } else {
        setAnswerCount((prev) => ({
          ...prev,
          incorrect: prev.incorrect + 1
        }))
      }
    }
 

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form
       id="fish-guess-form"
       onSubmit={(e) => {
          e.preventDefault()
          handleAnswer(fishName)
          setFishName("")
       }}
       >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value={fishName} onChange={(e) => {
          setFishName(e.target.value)
        }}/>
        <input type="submit" />
      </form>
    </div>
  );
}