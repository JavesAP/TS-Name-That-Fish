import { answerCountType } from "../../types";
import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  answerCount, answersLeft 
} : { 
  answerCount: answerCountType
  answersLeft: string[]
}) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {answerCount.incorrect}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {answerCount.correct}</div>
    </div>
  );
}