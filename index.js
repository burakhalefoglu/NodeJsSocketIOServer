var express= require('express')
var socketIO= require('socket.io')


const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));



const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('a user connected');


    io.emit('GetMessage', "You Connected server...");


    socket.on('ack', (msg) => {
    console.log('message: ' + msg); 
    });


    socket.on('disconnect', () => {
    console.log('user disconnected');
    });



});
