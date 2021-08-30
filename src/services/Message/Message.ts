import {fetchFrom} from "../Http";
import endpoints from "../../config/api/endpoints";
import {MessageStructure} from "../../models/Message/Message";

export async function getAllMessages(messagesCallback: (messages: MessageStructure[]) => void): Promise<void>
{
    messagesCallback(await fetchFrom<MessageStructure[]>(
        endpoints.allMessage(),
    ))
}

export async function sendMessage(messagesCallback: (messages: MessageStructure[]) => void): Promise<void>
{
    messagesCallback(await fetchFrom<MessageStructure[]>(
        endpoints.allMessage(),
    ))
}
