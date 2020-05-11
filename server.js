const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect
io.on('connection', socket => {
    console.log('New WS connection');

    socket.emit('message', 'Welcome to ChatCord!')
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});