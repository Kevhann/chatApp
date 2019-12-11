import React from "react"
import MessageLog from "./MessageLog"
import MessagePrompt from "./MessagePrompt"
import CreateUser from "./CreateUser"
import UserList from "./UserList"

const Chat = () => {
  return (
    <div className="mainChat">
      <MessageLog></MessageLog>
      <MessagePrompt></MessagePrompt>
      <CreateUser></CreateUser>
      <UserList></UserList>
    </div>
  )
}

export default Chat
