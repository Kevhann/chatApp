import React from "react"
import { ListGroup } from "react-bootstrap"

const Message = ({ message }) => {
  if (message.type === "USER_JOIN") {
    return (
      <div className="messageElement">
        <span
          style={{ color: message.color }}
        >{`<${message.time} ${message.user} ${message.content}>`}</span>
      </div>
    )
  }
  return (
    <div className="messageElement">
      <span
        style={{ color: message.color }}
      >{`<${message.time} ${message.user}>`}</span>
      <span className="message-content">{message.content}</span>
    </div>
  )
}

export default Message
