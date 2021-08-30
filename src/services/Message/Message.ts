import {fetchFrom, postTo} from "../Http";
import endpoints from "../../config/api/endpoints";
import {MessageStructure} from "../../models/Message/Message";
import HttpErrorException from "../../Exeptions/HttpErrorException/HttpErrorException";

export async function getAllMessages(messagesCallback: (messages: MessageStructure[]) => void): Promise<void>
{
    try {
        messagesCallback(await fetchFrom<MessageStructure[]>(
            endpoints.allMessage(),
        ))
    }catch (e)
    {
        throw new HttpErrorException('get all messages not successful')
    }

}

export async function sendMessage(data: MessageStructure, successCallback: () => void): Promise<void>
{
    try {
        await postTo<MessageStructure[]>(
            endpoints.sendMessage(),
            data,
        )

        successCallback()

    }
    catch (e) {
        throw new HttpErrorException('send message not successful')
    }
}
