import {shallow} from "enzyme";
import CurrentUserMessageBox, {CurrentUserMessageBoxProps} from "./CurrentUserMessageBox";
import MessageBuilder from "../../../builders/MessageBuilder";
import MessageBox from "../../atoms/MessageBox";


const props = (): CurrentUserMessageBoxProps =>
{
    return {
        messageDetails: MessageBuilder.create().build(),
    }
}
describe('expectation tests', () => {
    it('should include MessageBox', () => {
        const wrapper = shallow(<CurrentUserMessageBox {...props()} />)

        expect(wrapper.find(MessageBox).length).toBe(1);
    })
    it('should have correct default color', () => {
        const wrapper = shallow(<CurrentUserMessageBox {...props()} />)

        expect(wrapper.find(MessageBox).props().backgroundColor).toBe('#FCF6C5');
    })
})
