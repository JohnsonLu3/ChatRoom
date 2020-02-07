import React from 'react';
import './App.scss';
import ChatRoom from "./Components/ChatRoom"
function App() {
  let userID = Math.floor(Math.random() * 100000000);

  return (
    <main className="App">
      <ChatRoom id={userID}></ChatRoom>
    </main>
  );
}

export default App;
