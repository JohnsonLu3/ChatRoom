import React from "react"
import ChatBox from "./ChatBox"

export default class ChatRoom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        setInterval(()=>{
            fetch('/getMessages')
            .then(res => res.json())
            .then(messages => {
                this.setState({ messages: messages })
            })
        }, 500)
    }

    render() {
        return (
            <div id="chatroom" className="shadow">
                <h1>Welcome, <span>{this.props.id}</span>!</h1>
                <div id="messages">
                    <ul>
                        {
                            this.state.messages.map((message, index) =>
                                <li key={message[0] + index}>
                                    <span className="username">{message[0]}:</span> {message[1]}
                                </li>)
                        }
                    </ul>
                </div>
                <ChatBox id={this.props.id}/>
            </div>
        )
    }
}