import React, { useEffect } from "react"
import { connect } from "react-redux"
import { idGenerator } from "../utils/utils"
import Message from "./Message"
import { ListGroup } from "react-bootstrap"

const MessageLog = ({ messageLog }) => {
  useEffect(() => {
    const element = document.getElementById("messageLog")
    element.scrollTop = element.scrollHeight
  }, [messageLog])
  return (
    <ul className="messageLog" id="messageLog">
      {messageLog.map(message => (
        <Message key={idGenerator()} message={message}></Message>
      ))}
    </ul>
  )
}

const mapStateToProps = state => ({
  messageLog: state.messageLogReducer
})

export default connect(mapStateToProps)(MessageLog)
