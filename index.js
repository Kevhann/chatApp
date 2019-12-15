const express = require("express")
const app = express()
const cors = require("cors")
const axios = require("axios")
app.use(cors())

// app.use(express.static("build"))
const http = require("http").createServer(app)
const io = require("socket.io")(http)
let active = 0
let users = {}
let names = {}

io.on("connection", socket => {
  console.log(`CONNECTED user ${active} id ${socket.id}`)
  console.log("active users on connection", users)

  active++

  io.to(socket.id).emit("ACTIVE_USERS_ON_CONNECTION", users)

  socket.on("SET_NAME_TAG", data => {
    console.log("Joined user:", data)
    console.log("name:", names[socket.id])

    if (data.user.indexOf(" ") !== -1) {
      return
    }

    if (users[data.user]) {
      io.to(socket.id).emit("USERNAME_TAKEN")
    } else {
      names[socket.id] = data.user
      users[data.user] = { ...data, id: socket.id }

      console.log("else")
      io.to(socket.id).emit("USERNAME_ACCEPTED", data)
      socket.broadcast.emit("NEW_USER_CONNECTED", data)
    }
  })

  socket.on("SENT_MESSAGE", message => {
    console.log("message:", message)
    console.log("from:", socket.id)

    if (message.content.startsWith("@")) {
      let userNameIndex = message.content.indexOf(" ")

      let userName = message.content.substr(1, userNameIndex - 1)
      console.log("userName:" + userName + ":")
      let user = users[userName]
      console.log("user:", user)
      if (user) {
        io.to(user.id).emit("BROADCAST_MESSAGE", {
          ...message,
          type: "PRIVATE_MESSAGE",
          content: message.content.substr(userNameIndex + 1)
        })

        return
      }
    }

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
