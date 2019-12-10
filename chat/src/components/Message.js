import React from "react"

const Message = ({ message }) => {
  if (message.type === "USER_JOIN") {
    return (
      <div className="messageElement">
        <span
          style={{ color: message.color }}
        >{`<${message.time} ${message.from} ${message.content}>`}</span>
      </div>
    )
  }
  return (
    <div className="messageElement">
      <span
        style={{ color: message.color }}
      >{`<${message.time} ${message.from}>`}</span>
      <span className="message-content">{message.content}</span>
    </div>
  )
}

export default Message
