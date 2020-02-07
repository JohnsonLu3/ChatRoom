import React from 'react';
import './App.css';
import ChatRoom from "./Components/ChatRoom"
function App() {
  let userID = Math.floor(Math.random() * 100000000);

  return (
    <div className="App">
      <ChatRoom id={userID}></ChatRoom>
    </div>
  );
}

export default App;
