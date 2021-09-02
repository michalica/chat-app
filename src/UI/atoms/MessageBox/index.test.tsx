import { shallow } from "enzyme";
import MessageBox, { MessageBoxProps } from "./MessageBox";
import MessageBuilder from "../../../builders/MessageBuilder";

const props = (): MessageBoxProps => {
  return {
    messageDetails: MessageBuilder.create().build(),
  };
};

describe("expectation tests", () => {
  it("should include author name", () => {
    const wrapper = shallow(<MessageBox {...props()} />);

    expect(wrapper.find({ children: "John" }).length).toBe(1);
  });
  it("should include message", () => {
    const wrapper = shallow(<MessageBox {...props()} />);

    expect(wrapper.find({ children: "my message" }).length).toBe(1);
  });
  it("should include proper time adn date", () => {
    const wrapper = shallow(<MessageBox {...props()} />);

    expect(wrapper.find({ children: "03 September 53549 01:29" }).length).toBe(
      1
    );
  });
});
