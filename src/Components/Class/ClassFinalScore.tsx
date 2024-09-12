import { Component } from "react";
import { answerCountType } from "../../types";

export class ClassFinalScore extends Component<{
  totalScore: answerCountType
}> {
  render() {
    const { totalScore: { correct, incorrect}} = this.props
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correct}</p>
          <hr />
          <p>{correct + incorrect}</p>
        </div>
      </div>
    );
  }
}