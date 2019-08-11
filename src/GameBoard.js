import React from "react";
import Square from "./Square";

class GameBoard extends React.Component {
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

  render() {
    const { squares } = this.state;

    return (
      <div className="GameBoard">
        <Square className="Square" owner={squares[0]} />
        <Square className="Square" owner={squares[1]} />
        <Square className="Square" owner={squares[2]} />
        <Square className="Square" owner={squares[3]} />
        <Square className="Square" owner={squares[4]} />
        <Square className="Square" owner={squares[5]} />
        <Square className="Square" owner={squares[6]} />
        <Square className="Square" owner={squares[7]} />
        <Square className="Square" owner={squares[8]} />
      </div>
    );
  }
}

export default GameBoard;
