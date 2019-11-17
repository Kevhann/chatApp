const app = require("express")()
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

const port = 4001
http.listen(port, () => {
  console.log(`listening on port ${port}`)
})
