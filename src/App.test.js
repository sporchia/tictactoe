import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Board from "./GameBoard";
import { configure, shallow, mount } from "enzyme";
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

it("should reset the gameboard on reset", () => {
  const wrapper = shallow(<App />);
  const currentKey = wrapper.state().gameKey;

  wrapper.instance().reset();
  expect(wrapper.state().gameKey).not.toBe(currentKey);
});

it("should reset when reset button is clicked", () => {
  const wrapper = shallow(<App />);
  const currentKey = wrapper.state().gameKey;
  wrapper.find(".reset").simulate("click");
  expect(wrapper.state().gameKey).not.toBe(currentKey);
});

it("should show the winner when a winner is selected", () => {
  const wrapper = shallow(<App />);
  wrapper.instance().setWinner("X");
  expect(wrapper.text()).toMatch(/X is the winner!/);
});

it("should change the player if the last move was undone", () => {
  const wrapper = mount(<App />);
  wrapper
    .find(Board)
    .instance()
    .select(0);
  wrapper.instance().undo();
  expect(wrapper.state().currentPlayer).toBe("X");
});

it("should undo winner if undo happens", () => {
  const wrapper = mount(<App />);
  const board = wrapper.find(Board).instance();
  board.select(0);
  board.select(3);
  board.select(1);
  board.select(4);
  board.select(2);
  wrapper.instance().undo();
  expect(wrapper.text()).not.toMatch(/X is the winner!/);
});

it("should call game board undo when undo is called", () => {
  const wrapper = mount(<App />);
  wrapper
    .find(Board)
    .instance()
    .select(0);
  wrapper.instance().undo();
  expect(wrapper.find(Board).state().squares[0]).toBe(null);
});

it("should undo when undo button is clicked", () => {
  const wrapper = mount(<App />);
  const board = wrapper.find(Board).instance();
  board.select(0);
  board.select(3);
  board.select(1);
  board.select(4);
  board.select(2);
  wrapper.find(".undo").simulate("click");
  expect(wrapper.state().winner).not.toBe("X");
});
