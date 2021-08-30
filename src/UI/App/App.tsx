import React, {useEffect, useState} from 'react';
import Chat from '../layouts/Chat';
import ChatForm from '../organizms/ChatForm';
import MessagesArea from "../organizms/MessagesArea";
import {getAllMessages, sendMessage} from "../../services/Message";
import {MessageStructure} from "../../models/Message/Message";

const DEFAULT_NAME = 'Tomas';


function App() {
  const [messages, setMessages] = useState<MessageStructure[]>([]);

  useEffect(() => {
      getAllMessages(
          (messages: MessageStructure[]) => setMessages(messages)
      )
  }, [])

    function getQueryByName(query: string): string | undefined
    {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        return params[query];
    }

    function getAuthorName(): string
    {
        const name = getQueryByName('name');

        if(name)
        {
            return name;
        }
        return DEFAULT_NAME;
    }
  return (
    <Chat
        userArea={<ChatForm
            onClick={(value: string) => {
                sendMessage({
                    message: value,
                    author: getAuthorName(),
                    timestamp: Date.now(),
                },
                    () => {
                        getAllMessages(
                            (messages: MessageStructure[]) => setMessages(messages)
                        )
                    }
                );
            }} />}
        messageArea={<div>
            <MessagesArea
                myUserName={getAuthorName()}
                messages={messages}
            />
        </div>}
    />
  );
}

export default App;
