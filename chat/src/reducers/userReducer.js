const userReducer = (state = { name: "" }, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value
    case "SET_USER_NAME":
      return { ...state, name: action.value }
    default:
      return state
  }
}

export const setUser = value => {
  return {
    type: "SET_USER",
    value
  }
}

export const setUserName = value => {
  return {
    type: "SET_USER_NAME",
    value
  }
}

export default userReducer
