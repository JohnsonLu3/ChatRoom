import React from 'react';
import './App.scss';
import ChatRoom from "./Components/ChatRoom"
import axios from "axios";
import {createStore} from "redux";
import rootReducer from './Reducers/RootReducer';
import userAction from './Actions/UserActions';
class App extends React.Component {

  constructor() {
    super();
    const userID = Math.floor(Math.random() * 100000000);
    const userName = `Guest_${userID}`;
    const user = { userID, userName }
    this.state = { user }
    const store = createStore(rootReducer());
    console.log(store.getState())
  }

  componentDidMount() {
    axios.post("/createUser", {
      user: {
        id: this.state.user.userID,
        userName: this.state.user.userName,
      }
    })
  }

  render() {
    return (
      <main className="App">
        <ChatRoom user={this.state.user}></ChatRoom>
      </main>
    );
  }
}

export default App;
