import React from "react";
import Square from "./Square";

class GameBoard extends React.Component {
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
