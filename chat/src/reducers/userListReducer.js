const userListReducer = (state = {}, action) => {
  let temp = {}
  switch (action.type) {
    case "SET_USER_LIST":
      return action.value
    case "ADD_USER_TO_LIST":
      console.log("action value", action.value)
      temp = { ...state }
      temp[action.value.user] = action.value

      console.log("state:", temp)

      return temp
    case "REMOVE_USER_FROM_LIST":
      console.log("action value", action.value)
      temp = { ...state }
      delete temp[action.value.user]
      console.log("state:", temp)

      return temp
    default:
      return state
  }
}
export const setUserList = value => {
  console.log("value:", value)
  return {
    type: "SET_USER_LIST",
    value
  }
}

export const addUserToList = value => {
  return {
    type: "ADD_USER_TO_LIST",
    value
  }
}
export const removeUserFromList = value => {
  return {
    type: "REMOVE_USER_FROM_LIST",
    value
  }
}

export default userListReducer
