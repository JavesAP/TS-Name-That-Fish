import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
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

export class ClassApp extends Component {
  state: answerCountType = {
    incorrect: 0,
    correct: 0,
  };
  render() {
    const { correct, incorrect } = this.state

    const fishIndex = correct + incorrect;
    const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex)
    const endOfGame = fishIndex === initialFishes.length ? true : false;

    const handleAnswer = (answer: string) => {
      if (answer === initialFishes[fishIndex].name) {
        this.setState({correct: this.state.correct + 1})
      } else { 
        this.setState({incorrect: this.state.incorrect + 1}) 
      }
    }
    
    return (
      <>
        {!endOfGame &&
          <>
            <ClassScoreBoard answerCount={{ correct, incorrect }} answersLeft={ answersLeft }/>
            <ClassGameBoard currentFish={ initialFishes[fishIndex] } handleAnswer={ handleAnswer }/>
          </>
        }
        {endOfGame && <ClassFinalScore totalScore={{ correct, incorrect }}/>}
      </>
    );
  }
}