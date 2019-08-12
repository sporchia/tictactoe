import React from "react";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = {
    currentPlayer: "X"
  };

  changePlayer() {
    this.setState(state => {
      return { currentPlayer: state.currentPlayer === "X" ? "O" : "X" };
    });
  }

  render() {
    return (
      <div className="App">
        <GameBoard
          play={() => this.changePlayer()}
          currentPlayer={this.state.currentPlayer}
        />
      </div>
    );
  }
}

export default App;
