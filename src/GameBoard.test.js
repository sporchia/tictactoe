import React from "react";
import ReactDOM from "react-dom";
import GameBoard from "./GameBoard";
import Square from "./Square";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import each from "jest-each";

configure({ adapter: new Adapter() });

const wrapper = shallow(<GameBoard />);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GameBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should contain 9 squares", () => {
  expect(wrapper.find(Square)).toHaveLength(9);
});

each([
  [null, null, null, null, null, null, null, null, null, null],
  ["X", "X", "X", "X", null, null, null, null, null, null],
  ["X", null, null, null, "X", "X", "X", null, null, null],
  ["X", null, null, null, null, null, null, "X", "X", "X"],
  ["X", "X", null, null, "X", null, null, "X", null, null],
  ["X", null, "X", null, null, "X", null, null, "X", null],
  ["X", null, null, "X", null, null, "X", null, null, "X"],
  ["X", null, null, "X", null, "X", null, "X", null, null],
  ["X", "X", null, null, null, "X", null, null, null, "X"]
]).it(
  "winner returns %s when board is in state [%s, %s, %s, %s, %s, %s, %s, %s, %s]",
  (expected, s0, s1, s2, s3, s4, s5, s6, s7, s8) => {
    wrapper.setState({ squares: [s0, s1, s2, s3, s4, s5, s6, s7, s8] });

    expect(wrapper.instance().winner()).toBe(expected);
  }
);

it("winner returns catsgame when there is no winner and all squares are filled", () => {
  wrapper.setState({ squares: ["X", "O", "X", "O", "O", "X", "X", "X", "O"] });

  expect(wrapper.instance().winner()).toBe("catsgame");
});

it("should notify parent when player has made a valid selection", () => {
  const playCallback = jest.fn();
  const wrapper = shallow(<GameBoard play={playCallback} />);
  wrapper.instance().select(0);
  expect(playCallback.mock.calls.length).toBe(1);
});

it("should update state when player has made a valid selection", () => {
  const wrapper = shallow(<GameBoard currentPlayer="O" />);
  wrapper.instance().select(0);
  expect(wrapper.state().squares[0]).toBe("O");
});

it("should notify parent when player has won", () => {
  const winnerCallback = jest.fn();
  const wrapper = shallow(<GameBoard setWinner={winnerCallback} />);
  wrapper.instance().select(0);
  wrapper.instance().select(1);
  wrapper.instance().select(2);
  expect(winnerCallback.mock.calls.length).toBe(1);
});
