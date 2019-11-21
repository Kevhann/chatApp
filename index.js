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

io.on("connection", socket => {
  console.log(`CONNECTED user ${active} id ${socket.id}`)
  active++

  socket.on("SET_NAME_TAG", user => {
    console.log("Joined user:", user)
    users[socket.id] = user
    socket.broadcast.emit("BROADCAST_MESSAGE", user)
  })

  socket.on("SENT_MESSAGE", message => {
    console.log("message:", message)
    console.log("from:", socket.id)
    socket.broadcast.emit("BROADCAST_MESSAGE", message)
  })

  socket.on("disconnect", () => {
    active--
    console.log(`user ${active} id ${socket.id} disconnected`)

    var disconnected = users[socket.id]
    if (disconnected) {
      disconnected.content = "Has left the chat"
      console.log("disconnected:", disconnected)

      socket.broadcast.emit("BROADCAST_MESSAGE", disconnected)
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
