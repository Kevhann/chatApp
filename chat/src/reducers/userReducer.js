const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value
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

export default userReducer
