var WebSocket = require('ws')
var WebSocketServer = WebSocket.Server
var port = 3001
var ws = new WebSocketServer({
  port: port
})

var message = []

console.log('websockets server started')

ws.on('connection', function(socket) {
  console.log('client connection established')

  message.forEach(function(msg) {
    socket.send(msg)
  })

  socket.on('message', function(data) {
    console.log('message received: ' + data)
    message.push(data)
    // socket.send(data)
    ws.clients.forEach(function (clientSocket) {
      clientSocket.send(data)
    })
  })
})
