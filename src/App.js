import React from "react";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = {
    currentPlayer: "X",
    gameKey: 0,
    winner: null
  };

  constructor(props) {
    super(props);
    this.gameBoard = React.createRef();
  }

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
    if (this.gameBoard.current.undo() === false) {
      return;
    }
    this.changePlayer();
    this.setWinner(null);
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
          ref={this.gameBoard}
        />
        <button className="reset" onClick={() => this.reset()}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
