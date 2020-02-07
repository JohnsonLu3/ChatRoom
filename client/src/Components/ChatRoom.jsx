import React from "react"

export default class ChatRoom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            messages: [],
            inputMessage: ""
        }
    }

    componentDidMount() {

        fetch('/getMessages')
            .then(res => res.json())
            .then(messages => {
                this.setState({ messages: messages })
            })
    }

    render() {
        return (
            <div id="chatroom" className="shadow">
                <h1>Welcome, <span>{this.state.id}</span>!</h1>
                <div id="messages">
                    <ul>
                        {this.state.messages.map((message, index) =>
                            <li key={message[0] + index}><span className="username">{message[0]}:</span> {message[1]}</li>
                        )}

                    </ul>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div id="chatbox">
                        <label htmlFor="name">Message: </label>
                        <input onChange={this.inputHandler.bind(this)} />
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        )
    }

    handleSubmit() {
        const data = {
            user: this.state.id,
            message: this.state.inputMessage,
            time: Date.now()
        };
        console.log(data);
        const options = {
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch("/sendMessage", options)
            .then(messages => {
                this.setState({
                    messages: messages
                })
            })
    }

    inputHandler(event) {
        this.setState({ inputMessage: event.target.value })
    }
}