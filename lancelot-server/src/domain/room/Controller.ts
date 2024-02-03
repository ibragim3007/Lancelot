
import { Context } from '../../context/context';
import RoomModel from './Model';

const Room = RoomModel;

export default {
  getAllMessages: (req: any, res: any, context: Context) => Room.getAllMessages(req, res, context),
  addMessage: (_req: any, _res: any, context: Context) => Room.addMessage(_req, _res, context),
}