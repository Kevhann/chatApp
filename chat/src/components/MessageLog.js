import React from "react"
import { setMessageLog } from "../reducers/messageLogReducer"
import { connect } from "react-redux"
import { idGenerator } from "../utils/utils"
import Message from "./Message"
import ListGroupItem from "react-bootstrap/ListGroupItem"

const MessageLog = ({ messageLog, setMessageLog }) => {
  return (
    <ul className="messageLog">
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
