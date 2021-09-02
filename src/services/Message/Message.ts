import {fetchFrom, postTo} from "../Http";
import endpoints from "../../config/api/endpoints";
import {MessageStructure} from "../../models/Message/Message";

export async function getAllMessages(messagesCallback: (messages: MessageStructure[]) => void): Promise<void>
{
    try {
        messagesCallback(await fetchFrom<MessageStructure[]>(
            endpoints.allMessage(),
        ))
    }catch (e)
    {
        // We need to handle error appropriately with
        // an additional layer (we can send log to logging system, move website to error state etc.)
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
        // We need to handle error appropriately with
        // an additional layer (we can send log to logging system, move website to error state etc.)
    }
}
