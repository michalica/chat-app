import MessagesArea, {MessagesAreaProps} from "./MessagesArea";
import {shallow} from "enzyme";
import MessageBuilder from "../../../builders/MessageBuilder/MessageBuilder";
import MessageBox from "../../atoms/MessageBox";
import CurrentUserMessageBox from "../../molecules/CurrentUserMessageBox";


const props = (): MessagesAreaProps => {

    const messages = [
        MessageBuilder.create().build(),
        MessageBuilder.forAuthor('Alex').build(),
    ];

    return {
        messages,
        myUserName: 'Alex'
    }
}

describe("expectation tests", () => {
    it('render correct number of MessageBoxes', () => {
        const wrapper = shallow(<MessagesArea {...props()} />)

        expect(wrapper.find(MessageBox).length).toBe(1);
    })
    it('render correct number of CurrentUserMessageBoxes', () => {
        const wrapper = shallow(<MessagesArea {...props()} />)

        expect(wrapper.find(CurrentUserMessageBox).length).toBe(1);
    })
})
