import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";
import { answerCountType } from "../../types";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [ answerCount, setAnswerCount ] = useState<answerCountType>({ correct: 0, incorrect: 0})
  
  const fishIndex = answerCount.correct + answerCount.incorrect;
  const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex)
  const endOfGame = fishIndex === initialFishes.length ? true : false;
  
  return (
    <>
      {!endOfGame && 
        <>
          <FunctionalScoreBoard answerCount={ answerCount } answersLeft={ answersLeft }/>
          <FunctionalGameBoard fishData={ initialFishes[fishIndex] } setAnswerCount={ setAnswerCount }/>
        </>
      }
      {endOfGame && <FunctionalFinalScore answerCount={ answerCount }/>}
    </>
  );
}