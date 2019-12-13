import React, { useEffect } from "react"
import { connect } from "react-redux"

const UserList = users => {
  return (
    <div>
      Users connected: {Object.keys(users.users).length}
      <ul>
        {Object.keys(users.users).map(user => (
          <div key={user}>{user}</div>
        ))}
      </ul>
    </div>
  )
}
const mapStateToProps = state => ({ users: state.userListReducer })
export default connect(mapStateToProps)(UserList)
