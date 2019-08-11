import React from "react";
import Square from "./Square";

class GameBoard extends React.Component {
  state = {
    squares: Array(9).fill(null)
  };

  winner() {
    const s = this.state.squares;

    if (s[0] !== null && s[0] === s[1] && s[0] === s[2]) {
      return s[0];
    }
    if (s[3] !== null && s[3] === s[4] && s[3] === s[5]) {
      return s[3];
    }
    if (s[6] !== null && s[6] === s[7] && s[6] === s[8]) {
      return s[6];
    }
    if (s[0] !== null && s[0] === s[3] && s[0] === s[6]) {
      return s[0];
    }
    if (s[1] !== null && s[1] === s[4] && s[1] === s[7]) {
      return s[1];
    }
    if (s[2] !== null && s[2] === s[5] && s[2] === s[8]) {
      return s[2];
    }
    if (s[0] !== null && s[0] === s[4] && s[0] === s[8]) {
      return s[0];
    }
    if (s[2] !== null && s[2] === s[4] && s[2] === s[6]) {
      return s[2];
    }

    return null;
  }

  render() {
    return (
      <div className="GameBoard">
        <Square className="Square" />
        <Square className="Square" />
        <Square className="Square" />
        <Square className="Square" />
        <Square className="Square" />
        <Square className="Square" />
        <Square className="Square" />
        <Square className="Square" />
        <Square className="Square" />
      </div>
    );
  }
}

export default GameBoard;
