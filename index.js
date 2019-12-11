const express = require("express")
const app = express()
const cors = require("cors")
const axios = require("axios")
app.use(cors())

// app.use(express.static("build"))
const http = require("http").createServer(app)
const io = require("socket.io")(http)
var active = 0
var users = {}
var names = {}

io.on("connection", socket => {
  console.log(`CONNECTED user ${active} id ${socket.id}`)
  console.log("active users on connection", users)

  active++

  io.to(socket.id).emit("ACTIVE_USERS_ON_CONNECTION", users)

  socket.on("SET_NAME_TAG", data => {
    console.log("Joined user:", data)
    console.log("name:", names[socket.id])

    if (users[data.user]) {
      // const message = {
      //   ...data,
      //   content: "is in use, please choose a different tag",
      //   color: "red"
      // }
      io.to(socket.id).emit("USERNAME_TAKEN")
    } else {
      names[socket.id] = data.user
      users[data.user] = data
      console.log("else")
      io.to(socket.id).emit("USERNAME_ACCEPTED", data)
      socket.broadcast.emit("NEW_USER_CONNECTED", data)
    }
  })

  socket.on("SENT_MESSAGE", message => {
    console.log("message:", message)
    console.log("from:", socket.id)
    socket.broadcast.emit("BROADCAST_MESSAGE", message)
  })

  socket.on("disconnect", () => {
    active--
    console.log(`user ${active} id ${socket.id} disconnected`)

    var disconnectedName = names[socket.id]
    delete names[socket.id]

    if (disconnectedName) {
      var disconnectedUser = users[disconnectedName]
      delete users[disconnectedName]
      console.log("users:", users)

      disconnectedUser.content = "has left the chat"
      console.log("disconnected:", disconnectedUser)

      socket.broadcast.emit("USER_DISCONNECTED", disconnectedUser)
    }
  })
})

// heroku
if (process.env.NODE_ENV === "production") {
  console.log("in production")
  app.use(express.static("build"))
}

const PORT = process.env.PORT || 4001
http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
