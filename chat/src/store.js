import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import messageLogReducer from "./reducers/messageLogReducer"
import messageReducer from "./reducers/messageReducer"
import socketReducer from "./reducers/socketReducer"
import userReducer from "./reducers/userReducer"

const reducer = combineReducers({
  messageLogReducer,
  messageReducer,
  socketReducer,
  userReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
