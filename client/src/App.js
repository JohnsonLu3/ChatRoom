import React from 'react';
import './App.scss';
import ChatRoom from "./Components/ChatRoom"
import axios from "axios";

class App extends React.Component{
  
  constructor(){
    super();
    const userID = Math.floor(Math.random() * 100000000);
    const userName = `Guest_${userID}`;
    this.state = {userID,userName}
  }

  componentDidMount(){
    axios.post("/createUser", {
      user : {
        id: this.state.userID,
        userName: this.state.userName,
      }
    })
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
