import React from 'react';
import './App.scss';
import ChatRoom from "./Components/ChatRoom"
class App extends React.Component{
  
  constructor(){
    super();
    const userID = Math.floor(Math.random() * 100000000);
    this.state = {userID}
  }
  
  render(){
    return (
      <main className="App">
        <ChatRoom id={this.state.userID}></ChatRoom>
      </main>
    );
  }

}

export default App;
