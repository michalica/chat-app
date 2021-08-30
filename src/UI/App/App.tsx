import React from 'react';
import Chat from '../layouts/Chat';
import ChatForm from '../organizms/ChatForm';


function App() {
  return (
    <Chat
        userArea={<ChatForm />}
        messageArea={<div style={{        marginLeft: 24,
            marginRight: 24,}}>asdsadsada</div>}
    />
  );
}

export default App;
