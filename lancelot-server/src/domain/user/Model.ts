import { Context } from '../../context/context';

class UserModel {
  async addUser(
    _parant: any,
    _args: any,
    context: Context
  ) {
    const { prisma } = context;

    
  }

  getAllUsers = async (_parent: any, _args: any, context: Context) => {
    const { prisma } = context;
    return await prisma.user.findMany();
  };
}

export default new UserModel();
