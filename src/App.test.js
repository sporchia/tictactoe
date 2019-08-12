import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Board from "./GameBoard";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("has a game board", () => {
  expect(wrapper.find(Board)).toHaveLength(1);
});

it("player X should go first", () => {
  expect(wrapper.state().currentPlayer).toBe("X");
});

it("changes player when changePlayer is called", () => {
  wrapper.instance().changePlayer();
  expect(wrapper.state().currentPlayer).toBe("O");
});
