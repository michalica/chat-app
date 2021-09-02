import {getAllMessages, sendMessage} from "./Message";
import {fetchFrom, postTo} from "../Http";
import MessageBuilder from "../../builders/MessageBuilder";

jest.mock('../Http');

describe('expectation testing', () => {
    describe('getAllMessages', () => {
        it('should callback with proper param', async () => {
            const callback = jest.fn();
            await getAllMessages(callback);

            expect(callback).toHaveBeenCalledTimes(1);
            expect(fetchFrom).toHaveBeenCalledWith("https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=XWJU9HQeFeqf");
        })
    })
    describe('sendMessage', () => {
        it('should callback with proper param', async () => {
            const message = MessageBuilder.create().build();
            const callback = jest.fn();
            await sendMessage(message, callback);

            expect(callback).toHaveBeenCalledTimes(1);
            expect(postTo).toHaveBeenCalledWith( "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/", message);
        })
    })
})
