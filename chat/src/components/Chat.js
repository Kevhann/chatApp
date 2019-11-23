import React from "react"
import MessageLog from "./MessageLog"
import MessagePrompt from "./MessagePrompt"
import CreateUser from "./CreateUser"
import { connect } from "react-redux"

const Chat = ({ user }) => {
  return (
    <div className="mainChat">
      <MessageLog></MessageLog>
      {user ? <MessagePrompt></MessagePrompt> : <CreateUser></CreateUser>}
    </div>
  )
}
const mapStateToProps = state => ({ user: state.userReducer })
export default connect(mapStateToProps)(Chat)
