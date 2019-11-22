import React from "react"
import io from "socket.io-client"

import Chat from "./components/Chat"
import { addMessageToLog } from "./reducers/messageLogReducer"

import { setSocket } from "./reducers/socketReducer"
import { setUser } from "./reducers/userReducer"
import { connect } from "react-redux"

import { WSPORT, PORT } from "./config"

const App = ({ setUser, setSocket, addMessageToLog }) => {
  const socket = io(PORT)

  socket.on("popup", function(msg) {
    console.log("hello: ", msg)
  })
  socket.on("connection", function() {
    console.log("client connected")
  })

  socket.on("connect_error", function(err) {
    console.log("client connect_error: ", err)
  })

  socket.on("connect_timeout", function(err) {
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

  setSocket(socket)

  return <Chat></Chat>
}
const mapDispatchToProps = {
  setSocket,
  addMessageToLog,
  setUser
}
export default connect(null, mapDispatchToProps)(App)
