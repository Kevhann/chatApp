const socketReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_SOCKET":
      return action.value
    default:
      return state
  }
}

export const setSocket = value => {
  return {
    type: "SET_SOCKET",
    value
  }
}

export default socketReducer
