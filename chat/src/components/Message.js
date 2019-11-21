import React from "react"
import { connect } from "react-redux"
import ListGroupItem from "react-bootstrap/ListGroupItem"

const Message = ({ message }) => {
  // console.log("user:", user)
  if (message.type === "USER_JOIN") {
    return (
      <div className="messageElement">
        <span
          style={{ color: message.color }}
        >{`<${message.time} ${message.from} ${message.content}>`}</span>
      </div>
    )
  }
  // console.log("message:", message)
  return (
    <div className="messageElement">
      <span
        style={{ color: message.color }}
      >{`<${message.time} ${message.from}>`}</span>
      <span className="message-content">{message.content}</span>
    </div>
  )
}
// const mapStateToProps = state => ({ user: state.userReducer })

// export default connect(mapStateToProps)(Message)
export default Message
