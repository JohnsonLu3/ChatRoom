import React, { Component } from 'react'

export default class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleSubmit = (e) => {
        const data = {
            user: this.props.id,
            message: this.inputRef.current.value,
            timestamp: new Date().toDateString()
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
                this.setState({
                    messages: messages
                })
                this.inputRef.current.value = "";
            })
        e.preventDefault();
    }

    render() {
        return (
            <div>
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
