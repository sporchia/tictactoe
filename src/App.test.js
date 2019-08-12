import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Board from "./GameBoard";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("has a game board", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Board)).toHaveLength(1);
});

it("player X should go first", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().currentPlayer).toBe("X");
});

it("changes player when changePlayer is called", () => {
  const wrapper = shallow(<App />);
  wrapper.instance().changePlayer();
  expect(wrapper.state().currentPlayer).toBe("O");
});

it("should let the players know who’s turn it is", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toMatch(/It is currently X’s turn/);
});

it("should set the starting player back to X on reset", () => {
  const wrapper = shallow(<App />);
  wrapper.instance().changePlayer();
  wrapper.instance().reset();
  expect(wrapper.state().currentPlayer).toBe("X");
});
