import React, { useEffect } from "react"
import { setMessageLog } from "../reducers/messageLogReducer"
import { connect } from "react-redux"
import { idGenerator } from "../utils/utils"
import Message from "./Message"
import ListGroupItem from "react-bootstrap/ListGroupItem"

const MessageLog = ({ messageLog, setMessageLog }) => {
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
const mapDispatchToProps = {
  setMessageLog
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageLog)
