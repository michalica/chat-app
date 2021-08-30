import React from 'react';
import Chat from '../layouts/Chat';
import ChatForm from '../organizms/ChatForm';
import MessagesArea from "../organizms/MessagesArea";


function App() {
  return (
    <Chat
        userArea={<ChatForm />}
        messageArea={<div>
            <MessagesArea myUserName="Tomas" />
        </div>}
    />
  );
}

export default App;
