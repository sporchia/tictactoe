import React from "react";
import Square from "./Square";

class GameBoard extends React.Component {
  static defaultProps = {
    play: () => {}
  };

  state = {
    squares: Array(9).fill(null)
  };

  winner() {
    const s = this.state.squares;

    // top row accross
    if (s[0] !== null && s[0] === s[1] && s[0] === s[2]) {
      return s[0];
    }
    // middle row accross
    if (s[3] !== null && s[3] === s[4] && s[3] === s[5]) {
      return s[3];
    }
    // bottom row accross
    if (s[6] !== null && s[6] === s[7] && s[6] === s[8]) {
      return s[6];
    }
    // first column
    if (s[0] !== null && s[0] === s[3] && s[0] === s[6]) {
      return s[0];
    }
    // second column
    if (s[1] !== null && s[1] === s[4] && s[1] === s[7]) {
      return s[1];
    }
    // third column
    if (s[2] !== null && s[2] === s[5] && s[2] === s[8]) {
      return s[2];
    }
    // diagonal
    if (s[0] !== null && s[0] === s[4] && s[0] === s[8]) {
      return s[0];
    }
    // diagonal
    if (s[2] !== null && s[2] === s[4] && s[2] === s[6]) {
      return s[2];
    }

    // all spots filled with no winner
    if (s.filter(v => v === null).length === 0) {
      return "catsgame";
    }

    // no winner yet
    return null;
  }

  select(id) {
    const { currentPlayer, play } = this.props;

    if (this.state.squares[id] !== null) {
      return;
    }

    play.call();

    this.setState(state => {
      return {
        squares: Object.values({
          ...state.squares,
          [id]: currentPlayer
        })
      };
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
