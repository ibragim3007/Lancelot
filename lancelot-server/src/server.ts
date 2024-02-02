import express from 'express';
import { createServer }  from 'node:http';
import { join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);


// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'server.ts'));
// });

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (msg) => {
    
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});