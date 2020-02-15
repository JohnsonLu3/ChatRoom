import React from "react"
import ChatBox from "./ChatBox"
import ColorPickerIcon from "./ColorPickerIcon"
import { connect } from "react-redux"

class ChatRoom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        setInterval(() => {
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
                <h1>Welcome,&nbsp;
                    <span id="userName">{this.props.user.userName}</span>!
                    <ColorPickerIcon />
                </h1>
                <div id="messages">
                    <ul>
                        {
                            this.state.messages.map((message, index) =>
                                <li className="message" key={message.username + index}>
                                    <span className="username">{message.username}:</span> {message.message}
                                    <div className="timestamp">{message.timestamp}</div>
                                </li>)
                        }
                    </ul>
                </div>
                <ChatBox user={this.props.user} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ChatRoom)

