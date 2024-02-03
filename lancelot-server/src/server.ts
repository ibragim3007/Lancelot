import express from 'express';
import { createServer } from 'node:http';
import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import db from '../database/MockDatabase';
import { IMessage, IUserInfo } from './interface/interfaces';
import Room from './domain/room/Controller';
import { Context, context } from './context/context';


const app = express();
const server = createServer(app);
const io = new Server(server);


// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'server.ts'));
// });

app.get('/get-all-messages', (req, res) => {
  // Room.getAllMessages(req, res, context);
  try {
  
  const result = db.messages.findAll();
  res.send(result);
  } catch(e) {
    console.log(e);
  }
});

const onConnection = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, context: Context) => {


  socket.on('connection', (user: IUserInfo) => {
    db.users.create(user);
    io.emit('connection', db.users.data);
  });

  socket.on("disconnect", (reason) => {
    console.log(reason);
    socket.leave('')
  });

  socket.on("user-leave", (msg) => {
    console.log('LEAVE', msg);
    io.emit('user-leave', msg);
  });

  socket.on('message', (msg) => {
    // Room.addMessage(null, msg, context);
    context.db.messages.create(msg);
    io.emit('message', msg);
  })
}

io.on('connection', (socket) => onConnection(socket, context));

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});