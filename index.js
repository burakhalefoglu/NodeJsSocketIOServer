const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



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


http.listen(process.env.port || 8080 || 3000, () => {
    console.log('Connected at 3000');
});