import MessagesArea from "./MessagesArea";
import {shallow} from "enzyme";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

describe("expectation tests", () => {
    it('should include Input',  () => {
        const wrapper = shallow(<MessagesArea myUserName="tomas" />)

        expect(wrapper.find(Input).length).toBe(1);
    });
    it('should include Button',  () => {
        const wrapper = shallow(<MessagesArea myUserName="tomas" />)

        expect(wrapper.find(Button).length).toBe(1);
    });
})
