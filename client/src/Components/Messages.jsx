import React from 'react'
import { connect } from 'react-redux'

class Messages extends React.Component {
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Messages)