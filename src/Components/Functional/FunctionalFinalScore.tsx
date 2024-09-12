import { answerCountType } from "../../types";
import "./styles/final-score.css";

export const FunctionalFinalScore = ({ answerCount } : { answerCount: answerCountType}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{answerCount.correct}</p>
      <hr />
      <p>{answerCount.correct + answerCount.incorrect}</p>
    </div>
  </div>
);