
import {shallow} from "enzyme";
import App from "./App";
import ChatForm from "../organizms/ChatForm";
import Chat from "../layouts/Chat";
import {ReactElement} from "react";
import {getAllMessages, sendMessage} from "../../services/Message";
import MessagesArea from "../organizms/MessagesArea";

jest.mock('../../services/Message');

describe("expectation testing", () => {
    describe("Chat", () => {
        it('should exist', () => {
            const wrapper = shallow(<App />)

            expect(wrapper.find(Chat).length).toBe(1)
        })
        describe('ChatForm', () => {
            it('should exists', () => {
                const wrapper = shallow(<App />)

                const chatForm = wrapper.find(Chat).props().userArea as ReactElement;
                expect(shallow(<div>{chatForm}</div>).find(ChatForm).length).toBe(1)
            })
            it('onClick should call sendMessage with correct params', () => {
                const wrapper = shallow(<App />);
                const value = "test value";


                const chatForm = wrapper.find(Chat).props().userArea as ReactElement;

                shallow(<div>{chatForm}</div>).find(ChatForm).props().onClick(value);

                const callback = (sendMessage as jest.Mock).mock.calls[0][1];

                expect(sendMessage).toHaveBeenCalledTimes(1)

                callback();

                expect(getAllMessages).toHaveBeenCalledTimes(1)

            })
        })
        describe('MessagesArea', () => {
            it('should exists', () => {
                const wrapper = shallow(<App />)

                const messageArea = wrapper.find(Chat).props().messageArea as ReactElement;
                expect(shallow(<div>{messageArea}</div>).find(MessagesArea).length).toBe(1)
            })
            it('should have messages in props', () => {
                const wrapper = shallow(<App />)

                const messageArea = wrapper.find(Chat).props().messageArea as ReactElement;
                expect(shallow(<div>{messageArea}</div>).find(MessagesArea).props().messages).toEqual([])
            })
            it('should have default name', () => {
                const wrapper = shallow(<App />)

                const messageArea = wrapper.find(Chat).props().messageArea as ReactElement;
                expect(shallow(<div>{messageArea}</div>).find(MessagesArea).props().myUserName).toEqual('Tomas')
            })
            it('should have custom name', () => {
                window.history.pushState({}, 'Test Title', '/?name=John');

                const wrapper = shallow(<App />)

                const messageArea = wrapper.find(Chat).props().messageArea as ReactElement;
                expect(shallow(<div>{messageArea}</div>).find(MessagesArea).props().myUserName).toEqual('John')
            })
        })

    })
    it('should ', () => {
    })
})
