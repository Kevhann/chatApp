import React from "react"
import io from "socket.io-client"

import Chat from "./components/Chat"
import { addMessageToLog } from "./reducers/messageLogReducer"

import { setSocket } from "./reducers/socketReducer"
import { connect } from "react-redux"

import { WSPORT, PORT } from "./config"

const App = ({ setSocket, addMessageToLog }) => {
  const socket = io(PORT)

  console.log("socket:", socket)
  console.log("WSPORT:", WSPORT)
  console.log("PORT:", PORT)

  socket.on("BROADCAST_MESSAGE", message => {
    addMessageToLog(message)
  })

  setSocket(socket)

  return <Chat></Chat>
}
const mapDispatchToProps = {
  setSocket,
  addMessageToLog
}
export default connect(null, mapDispatchToProps)(App)
