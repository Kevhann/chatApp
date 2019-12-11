import React, { useState } from "react"
import MessageLog from "./MessageLog"
import MessagePrompt from "./MessagePrompt"
import CreateUser from "./CreateUser"
import { setUser } from "../reducers/userReducer"
import { addMessageToLog } from "../reducers/messageLogReducer"
import { connect } from "react-redux"
import UserList from "./UserList"

const Chat = ({ user, setUser, socket, addMessageToLog }) => {
  return (
    <div className="mainChat">
      <MessageLog></MessageLog>
      <MessagePrompt></MessagePrompt>
      <CreateUser></CreateUser>
      <UserList></UserList>
    </div>
  )
}
const mapStateToProps = state => ({
  user: state.userReducer,
  socket: state.socketReducer
})
const mapDispatchToProps = { setUser, addMessageToLog }
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
