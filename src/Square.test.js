import React from "react";
import ReactDOM from "react-dom";
import Square from "./Square";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const wrapper = shallow(<Square />);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Square />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("starts with no owner", () => {
  expect(wrapper.prop("owner")).toBe(null);
});

it("notifies parent if it was selected", () => {
  const selectedCallback = jest.fn();
  const wrapper = shallow(<Square selected={selectedCallback} />);
  wrapper.simulate("click");
  expect(selectedCallback.mock.calls.length).toBe(1);
});
