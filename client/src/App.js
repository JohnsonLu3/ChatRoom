import React from 'react';
import './App.scss';
import ChatRoom from "./Components/ChatRoom"
import axios from "axios";
import store from "./Store"
import { Provider } from 'react-redux'

class App extends React.Component {

  constructor() {
    super();
    const userID = Math.floor(Math.random() * 100000000);
    const userName = `Guest_${userID}`;
    const user = { userID, userName }
    this.state = { user }
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
      <Provider store={store}>
        <main className="App">
          <ChatRoom />
        </main>
      </Provider>
    );
  }
}

export default App;
