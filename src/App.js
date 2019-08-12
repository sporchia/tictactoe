import React from "react";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = {
    currentPlayer: "X",
    gameKey: 0
  };

  changePlayer() {
    this.setState(state => {
      return { currentPlayer: state.currentPlayer === "X" ? "O" : "X" };
    });
  }

  reset() {
    this.setState(state => {
      return {
        currentPlayer: "X",
        gameKey: state.gameKey + 1
      };
    });
  }

  render() {
    const { currentPlayer, gameKey } = this.state;
    return (
      <div className="App">
        <h1 className="header">Welcome to Tic-Tac-Toe!</h1>
        <div className="subheader">
          It is currently {currentPlayer}’s turn...
        </div>
        <GameBoard
          play={() => this.changePlayer()}
          currentPlayer={currentPlayer}
          key={gameKey}
        />
        <button className="reset" onClick={() => this.reset()}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
