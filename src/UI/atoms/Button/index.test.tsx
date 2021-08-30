import {shallow} from "enzyme";
import Button from "./Button";

describe("expectation tests", () => {
    it('should include input', () => {

        const buttonText = "Confirm";
        const wrapper = shallow(<Button>{buttonText}</Button>);

        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button').text()).toBe(buttonText);
    })
})
