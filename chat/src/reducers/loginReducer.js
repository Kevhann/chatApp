const loginReducer = (
  state = { showLogin: true, showAlert: false, alertText: "" },
  action
) => {
  switch (action.type) {
    case "SET_SHOW_ALERT":
      return {
        ...state,
        showAlert: action.show,
        alertText: action.text
      }
    case "SET_SHOW_LOGIN":
      return { ...state, showLogin: action.value }
    default:
      return state
  }
}

export const setShowAlert = (show, text) => {
  return {
    type: "SET_SHOW_ALERT",
    show,
    text
  }
}
export const setShowLogin = value => {
  return {
    type: "SET_SHOW_LOGIN",
    value
  }
}

export default loginReducer
