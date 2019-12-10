const userListReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return action.value
    case "ADD_USER_TO_LIST":
      console.log("action value", action.value)
      state[action.value.name] = action.value
      console.log("state:", state)
      return state
    case "REMOVE_USER_FROM_LIST":
      return state.concat(action.value)
    default:
      return state
  }
}
export const setUserList = value => {
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
