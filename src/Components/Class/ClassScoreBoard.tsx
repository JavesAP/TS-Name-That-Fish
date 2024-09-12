import { Component } from "react";
import "./styles/score-board.css";
import { answerCountType } from "../../types";

export class ClassScoreBoard extends Component<{
  answerCount: answerCountType
  answersLeft: string[]
}> {
  render() {
    const { answersLeft, answerCount: {correct, incorrect} } = this.props
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrect}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correct}</div>
      </div>
    );
  }
}