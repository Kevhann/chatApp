const messageLogReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MESSAGE_LOG":
      return action.value
    case "ADD_MESSAGE_TO_LOG":
      return state.concat(action.value)
    default:
      return state
  }
}
export const addMessageToLog = value => {
  return {
    type: "ADD_MESSAGE_TO_LOG",
    value
  }
}

export const setMessageLog = value => {
  return {
    type: "SET_MESSAGE_LOG",
    value
  }
}

export default messageLogReducer
