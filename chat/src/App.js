import React from "react"
import io from "socket.io-client"

import Chat from "./components/Chat"
import { addMessageToLog } from "./reducers/messageLogReducer"
import { setUser } from "./reducers/userReducer"
import { setShowAlert, setShowLogin } from "./reducers/loginReducer"
import {
  setUserList,
  addUserToList,
  removeUserFromList
} from "./reducers/userListReducer"

import { setSocket } from "./reducers/socketReducer"

import { connect } from "react-redux"

import { WSPORT, PORT } from "./config"

const App = ({
  setSocket,
  addMessageToLog,
  setShowAlert,
  setUser,
  setShowLogin,
  setUserList,
  addUserToList,
  removeUserFromList
}) => {
  const socket = io(PORT)

  socket.on("popup", msg => {
    console.log("hello: ", msg)
  })
  socket.on("connection", () => {
    console.log("client connected")
  })

  socket.on("connect_error", err => {
    console.log("client connect_error: ", err)
  })

  socket.on("connect_timeout", err => {
    console.log("client connect_timeout: ", err)
  })

  console.log("socket:", socket)
  console.log("WSPORT:", WSPORT)
  console.log("PORT:", PORT)

  socket.on("BROADCAST_MESSAGE", message => {
    addMessageToLog(message)
  })

  socket.on("USER_TAKEN", user => {
    addMessageToLog(user)
  })

  socket.on("USERNAME_ACCEPTED", user => {
    console.log("user:", user)
    setUser({ name: user.user, color: user.color })
    setShowLogin(false)

    addMessageToLog({
      ...user,
      content: "Joined the chat!",
      type: "AUTOMATED_MESSAGE"
    })
    addUserToList(user)
  })

  socket.on("USERNAME_TAKEN", () => {
    setShowAlert(true, "Name already in use")
    console.log("username taken")
  })

  socket.on("NEW_USER_CONNECTED", user => {
    console.log("new user connected:", user)
    addUserToList(user)
    addMessageToLog({
      ...user,
      content: "Joined the chat!",
      type: "AUTOMATED_MESSAGE"
    })
  })

  socket.on("ACTIVE_USERS_ON_CONNECTION", users => {
    setUserList(users)
  })
  socket.on("USER_DISCONNECTED", user => {
    console.log("disconnected user:", user)
    addMessageToLog({
      ...user,
      content: "Has left the chat!",
      type: "AUTOMATED_MESSAGE"
    })
    removeUserFromList(user)
  })

  setSocket(socket)

  return <Chat></Chat>
}
const mapDispatchToProps = {
  setSocket,
  setUser,
  addMessageToLog,
  setShowAlert,
  setShowLogin,
  setUserList,
  addUserToList,
  removeUserFromList
}
export default connect(null, mapDispatchToProps)(App)
