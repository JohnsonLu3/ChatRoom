import React from "react"

export default class ChatRoom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        fetch('/getMessages')
            .then(res => res.json())
            .then(messages => {
                this.setState({ messages: messages })
            })
    }

    handleSubmit = (e) => {
        const data = {
            user: this.props.id,
            message: this.inputRef.current.value,
            time: Date.now()
        };
        const options = {
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch("/sendMessage", options)
            .then(res => res.json())
            .then(messages => {
                console.log(":::" + messages)
                this.setState({
                    messages: messages
                })
                this.inputRef.current.value = "";
            })
        e.preventDefault();
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
                <form onSubmit={this.handleSubmit}>
                    <div id="chatbox">
                        <label htmlFor="name">Message: </label>
                        <input ref={this.inputRef} />
                        <button>Send</button>
                    </div>
                </form>
            </div>
        )
    }
}