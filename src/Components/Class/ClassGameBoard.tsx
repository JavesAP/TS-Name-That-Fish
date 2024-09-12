import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component<{
  currentFish: {name: string, url: string},
  handleAnswer: (param: string) => void
}> {
  state = {
    fishName: ""
  }
  render() {
    const { fishName } = this.state;
    const { currentFish, handleAnswer } = this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" 
        onSubmit={(e) => {
          e.preventDefault()
          handleAnswer(fishName)
          this.setState({ fishName: ""})
        }}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess" value={fishName} 
          onChange={(e) => {
            this.setState({ fishName: e.target.value})
          }}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}