import { shallow } from "enzyme";
import Input from "./Input";

describe("expectation tests", () => {
  it("should include input", () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.find("input").length).toBe(1);
  });
});
