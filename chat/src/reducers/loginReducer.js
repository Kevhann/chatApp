const loginReducer = (
  state = { showLogin: true, showAlert: false },
  action
) => {
  switch (action.type) {
    case "SET_SHOW_ALERT":
      return { ...state, showAlert: action.value }
    case "SET_SHOW_LOGIN":
      return { ...state, showLogin: action.value }
    default:
      return state
  }
}

export const setShowAlert = value => {
  return {
    type: "SET_SHOW_ALERT",
    value
  }
}
export const setShowLogin = value => {
  return {
    type: "SET_SHOW_LOGIN",
    value
  }
}

export default loginReducer
