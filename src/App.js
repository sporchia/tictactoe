import React from "react";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = {
    currentPlayer: "X"
  };

  render() {
    return (
      <div className="App">
        <GameBoard />
      </div>
    );
  }
}

export default App;
