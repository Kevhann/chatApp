import React, { useState } from "react"
import MessageLog from "./MessageLog"
import MessagePrompt from "./MessagePrompt"
import CreateUser from "./CreateUser"
import { setUser } from "../reducers/userReducer"
import { addMessageToLog } from "../reducers/messageLogReducer"
import { connect } from "react-redux"

const Chat = ({ user, setUser, socket, addMessageToLog }) => {
  const [showLogin, setShowLogin] = useState(true)
  const [showAlert, setShowAlert] = useState(false)

  // socket.on("USER_CONNECTED", user => {
  //   console.log("user:", user)
  //   setUser({ name: user.from, color: user.color })
  //   setShowLogin(false)
  //   addMessageToLog(user)
  // })

  // socket.on("USERNAME_TAKEN", () => {
  //   setShowAlert(true)
  //   console.log("username taken")
  // })

  return (
    <div className="mainChat">
      <MessageLog></MessageLog>
      <MessagePrompt></MessagePrompt>
      <CreateUser showLogin={showLogin} showAlert={showAlert}></CreateUser>
    </div>
  )
}
const mapStateToProps = state => ({
  user: state.userReducer,
  socket: state.socketReducer
})
const mapDispatchToProps = { setUser, addMessageToLog }
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
