import React from "react";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = {
    currentPlayer: "X",
    gameKey: 0,
    winner: null
  };

  changePlayer() {
    this.setState(state => {
      return { currentPlayer: state.currentPlayer === "X" ? "O" : "X" };
    });
  }

  setWinner(winner) {
    this.setState({ winner: winner });
  }

  reset() {
    this.setState(state => {
      return {
        currentPlayer: "X",
        gameKey: state.gameKey + 1
      };
    });
  }

  undo() {
    this.changePlayer();
  }

  render() {
    const { currentPlayer, gameKey, winner } = this.state;
    return (
      <div className="App">
        <h1 className="header">Welcome to Tic-Tac-Toe!</h1>
        {winner === null && (
          <div className="subheader">
            It is currently {currentPlayer}’s turn...
          </div>
        )}
        {winner !== null && (
          <div className="subheader">{winner} is the winner!</div>
        )}
        <GameBoard
          play={() => this.changePlayer()}
          currentPlayer={currentPlayer}
          key={gameKey}
          setWinner={winner => this.setWinner(winner)}
        />
        <button className="reset" onClick={() => this.reset()}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
