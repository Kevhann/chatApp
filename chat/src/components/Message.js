import React from "react"
import { ListGroup } from "react-bootstrap"

const Message = ({ message }) => {
  switch (message.type) {
    case "AUTOMATED_MESSAGE":
      return (
        <div className="messageElement">
          <span
            style={{ color: message.color }}
          >{`<${message.time} ${message.user} ${message.content}>`}</span>
        </div>
      )

    case "PRIVATE_MESSAGE":
      return (
        <div className="messageElement">
          <span
            style={{ color: message.color }}
          >{`<${message.time} Whisper from ${message.user}>`}</span>
          <span className="message-content">{message.content}</span>
        </div>
      )

    default:
      return (
        <div className="messageElement">
          <span
            style={{ color: message.color }}
          >{`<${message.time} ${message.user}>`}</span>
          <span className="message-content">{message.content}</span>
        </div>
      )
  }
}

export default Message
