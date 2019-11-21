import React from "react"
import { setMessage } from "../reducers/messageReducer"
import { addMessageToLog } from "../reducers/messageLogReducer"
import { connect } from "react-redux"
import { getCurrentTimeStamp } from "../utils/utils"

const MessagePrompt = ({
  user,
  socket,
  message,
  setMessage,
  addMessageToLog
}) => {
  const handleMessageSubmit = event => {
    event.preventDefault()
    if (!message.content) {
      return
    }
    const time = getCurrentTimeStamp()

    console.log("user:", user)
    console.log("message:", message)
    const messageObject = {
      ...message,
      time,
      from: user.name,
      color: user.color
    }
    addMessageToLog(messageObject)
    socket.emit("SENT_MESSAGE", messageObject)

    setMessage({ ...message, content: "" })
  }

  const handleMessageChange = event => {
    setMessage({ ...message, content: event.target.value })
  }

  return (
    <div>
      <form>
        <input
          placeholder="Send message"
          autoFocus={true}
          type="text"
          value={message.content}
          onChange={e => handleMessageChange(e)}
        ></input>
        <button onClick={e => handleMessageSubmit(e)}>send</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  message: state.messageReducer,
  socket: state.socketReducer,
  user: state.userReducer
})
const mapDispatchToProps = {
  setMessage,
  addMessageToLog
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePrompt)
