import React from "react";
import Square from "./Square";

class GameBoard extends React.Component {
  static defaultProps = {
    play: () => {},
    setWinner: () => {}
  };

  state = {
    squares: Array(9).fill(null),
    history: [Array(9).fill(null)]
  };

  winner(s = this.state.squares) {
    let winner = null;

    // top row accross
    if (s[0] !== null && s[0] === s[1] && s[0] === s[2]) {
      winner = s[0];
    }
    // middle row accross
    if (s[3] !== null && s[3] === s[4] && s[3] === s[5]) {
      winner = s[3];
    }
    // bottom row accross
    if (s[6] !== null && s[6] === s[7] && s[6] === s[8]) {
      winner = s[6];
    }
    // first column
    if (s[0] !== null && s[0] === s[3] && s[0] === s[6]) {
      winner = s[0];
    }
    // second column
    if (s[1] !== null && s[1] === s[4] && s[1] === s[7]) {
      winner = s[1];
    }
    // third column
    if (s[2] !== null && s[2] === s[5] && s[2] === s[8]) {
      winner = s[2];
    }
    // diagonal
    if (s[0] !== null && s[0] === s[4] && s[0] === s[8]) {
      winner = s[0];
    }
    // diagonal
    if (s[2] !== null && s[2] === s[4] && s[2] === s[6]) {
      winner = s[2];
    }

    // all spots filled with no winner
    if (winner === null && s.filter(v => v === null).length === 0) {
      winner = "catsgame";
    }

    if (winner !== null) {
      this.props.setWinner(winner);
    }

    // no winner yet
    return winner;
  }

  select(id) {
    const { currentPlayer, play } = this.props;
    const { squares, history } = this.state;

    if (this.state.squares[id] !== null || this.winner()) {
      return;
    }

    play.call();

    const newSquaresArray = Object.values({
      ...squares,
      [id]: currentPlayer
    });

    const newSquares = {
      squares: newSquaresArray,
      history: [newSquaresArray].concat(history)
    };

    this.winner(newSquares.squares);

    this.setState(newSquares);
  }

  undo() {
    let { history } = this.state;
    if (history.length <= 1) {
      return false;
    }

    this.setState({
      squares: history[1],
      history: history.slice(1)
    });
  }

  createSquares() {
    const { squares } = this.state;

    let layout = [];
    for (let i = 0; i < 9; i++) {
      layout.push(
        <Square
          key={i}
          className="Square"
          owner={squares[i]}
          selected={() => {
            this.select(i);
          }}
        />
      );
    }

    return layout;
  }

  render() {
    return <div className="GameBoard">{this.createSquares()}</div>;
  }
}

export default GameBoard;
