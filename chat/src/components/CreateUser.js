import React from "react"
import { setUser } from "../reducers/userReducer"
import { addMessageToLog } from "../reducers/messageLogReducer"
import { connect } from "react-redux"
import { randomColor, getCurrentTimeStamp } from "../utils/utils"

const CreateUser = ({ user, socket, setUser, addMessageToLog }) => {
  const color = randomColor()
  let namePlaceHolder = ""

  const handleFormSubmit = event => {
    event.preventDefault()

    if (namePlaceHolder.length < 1) {
      console.log("2short")
      return
    }

    const time = getCurrentTimeStamp()
    const content = "Joined the chat"
    const message = {
      content,
      time,
      type: "USER_JOIN",
      from: namePlaceHolder,
      color
    }

    socket.emit("SET_NAME_TAG", message)
  }

  socket.on("USER_CONNECTED", user => {
    console.log("user:", user)
    setUser({ name: user.from, color: user.color })
    addMessageToLog(user)
  })

  const handleFormChange = event => {
    namePlaceHolder = event.target.value
  }

  return (
    <div>
      <form onSubmit={event => handleFormSubmit(event)}>
        <input
          placeholder="Set nametag"
          onChange={event => handleFormChange(event)}
          type="text"
        ></input>
      </form>
    </div>
  )
}
const mapStateToProps = state => ({
  user: state.userReducer,
  socket: state.socketReducer
})
const mapDispatchToProps = {
  setUser,
  addMessageToLog
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
