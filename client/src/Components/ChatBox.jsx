import React, { Component } from 'react'
import axios from 'axios'

export default class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            user: this.props.user,
            message: this.inputRef.current.value,
            timestamp: new Date().toDateString()
        };

        axios.post("/sendMessage", data)
            .then(() => {
                this.inputRef.current.value = ""
            })
            .catch((err) => {
                throw err;
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div id="chatbox">
                        <label htmlFor="Message">Message: </label>
                        <input ref={this.inputRef} />
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}
