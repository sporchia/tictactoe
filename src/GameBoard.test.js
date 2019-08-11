import React from "react";
import ReactDOM from "react-dom";
import GameBoard from "./GameBoard";
import Square from "./Square";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

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
