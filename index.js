const express = require("express")
const app = express()
const cors = require("cors")
const axios = require("axios")
app.use(cors())

// app.use(express.static("build"))
const http = require("http").createServer(app)
const io = require("socket.io")(http)
var active = 0

io.on("connection", socket => {
  console.log(`CONNECTED user ${active} id ${socket.id}`)
  active++
  socket.on("hello", data => {
    console.log(data)
    console.log("socket:", socket.id)
  })

  socket.on("SENT_MESSAGE", message => {
    console.log("message:", message)
    console.log("from:", socket.id)
    socket.broadcast.emit("BROADCAST_MESSAGE", message)
  })

  socket.on("disconnect", () => {
    active--
    console.log(`user ${active} id ${socket.id} disconnected`)
  })
})

// heroku
if (process.env.NODE_ENV === "production") {
  console.log("lmao")
  app.use(express.static("build"))
}

const PORT = process.env.PORT || 4001
http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
