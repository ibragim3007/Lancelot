import express from 'express';
import { createServer } from 'node:http';
import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import db from '../database/MockDatabase';
import { Context, context } from './context/context';
import { IUserInfo } from './interface/interfaces';

const PORT = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});


app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/get-all-messages', (req, res) => {
  // Room.getAllMessages(req, res, context);
  try {
  
  const result = db.messages.findAll();
  res.send(result);
  } catch(e) {
    console.log(e);
  }
});


app.get('/get-all-users', (req, res) => {
  const result = db.users.findAll();

  res.send(result);
})

const onConnection = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, context: Context) => {

  socket.on('connection', (user: IUserInfo) => {
    const newUser = db.users.create(user);
    const message = db.messages.create({
      id: String(new Date().getMilliseconds),
      createAt: new Date(),
      text: `Пользователь ${user.name} присоеденился к чату`,
      type: 'new-user',
      user: user,
    });

    io.emit('connection', newUser, message);
  });

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });

  socket.on("user-leave", (msg: IUserInfo) => {
    db.users.remove(msg.id);
    const message = db.messages.create({
      id: String(new Date().getMilliseconds),
      createAt: new Date(),
      text: `Пользователь ${msg.name} покинул чат`,
      type: 'exit-user',
      user: msg,
    });

    io.emit('user-leave', msg, message);
  });

  socket.on('message', (msg) => {
    // Room.addMessage(null, msg, context);
    context.db.messages.create(msg);
    io.emit('message', msg);
  })
}

io.on('connection', (socket) => onConnection(socket, context));

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});