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
    const { currentPlayer } = this.state;
    return (
      <div className="App">
        <h1 className="header">Welcome to Tic-Tac-Toe!</h1>
        <div className="subheader">
          It is currently {currentPlayer}’s turn...
        </div>
        <GameBoard
          play={() => this.changePlayer()}
          currentPlayer={currentPlayer}
        />
      </div>
    );
  }
}

export default App;
