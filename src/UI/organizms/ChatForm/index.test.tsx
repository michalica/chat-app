import ChatForm from "./ChatForm";
import {shallow} from "enzyme";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

describe("expectation tests", () => {
    it('should include Input',  () => {
        const wrapper = shallow(<ChatForm />)

        expect(wrapper.find(Input).length).toBe(1);
    });
    it('should include Button',  () => {
        const wrapper = shallow(<ChatForm />)

        expect(wrapper.find(Button).length).toBe(1);
    });
})
