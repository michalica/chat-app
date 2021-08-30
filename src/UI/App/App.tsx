import React, {useEffect, useState} from 'react';
import Chat from '../layouts/Chat';
import ChatForm from '../organizms/ChatForm';
import MessagesArea from "../organizms/MessagesArea";
import {getAllMessages} from "../../services/Message/Message";
import {MessageStructure} from "../../models/Message/Message";

function App() {
  const [messages, setMessages] = useState<MessageStructure[]>([]);

  useEffect(() => {
      getAllMessages(
          (messages: MessageStructure[]) => setMessages(messages)
      )
  }, [])

    function sendMessage(msg: string): void
    {

    }

  return (
    <Chat
        userArea={<ChatForm />}
        messageArea={<div>
            <MessagesArea
                myUserName="Tomas"
                messages={messages}
            />
        </div>}
    />
  );
}

export default App;
