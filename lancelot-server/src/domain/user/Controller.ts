
import { Context } from '../../context/context';
import UserModel from './Model';

const User = UserModel;

export default {
  addUser: (req, res, context: Context) => User.addUser(req, res, context),
  getAllUsers: (req: any, res: any, context: Context) => User.getAllUsers(req, res, context),
}