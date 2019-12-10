const configReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_CONFIGURATION":
      return action.value
    default:
      return state
  }
}

export const setConfig = value => {
  return {
    type: "SET_CONFIGURATION",
    value
  }
}

export default configReducer
