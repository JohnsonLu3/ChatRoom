import React from "react"
import ChatBox from "./ChatBox"
import Messages from "./Messages"
import ColorPickerIcon from "./ColorPickerIcon"
import { connect } from "react-redux"

function ChatRoom(props) {
    return (
        <div id="chatroom" className="shadow">
            <h1>Welcome,&nbsp;
                    <span id="userName">{props.user.userName}</span>!
                    <ColorPickerIcon />
            </h1>
            <Messages />
            <ChatBox user={props.user} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ChatRoom)

