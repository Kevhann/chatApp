const messageReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.value
    default:
      return state
  }
}

export const setMessage = value => {
  return {
    type: "SET_MESSAGE",
    value
  }
}

export default messageReducer
