import { Context } from "../../context/context";
import { IMessage } from "../../interface/interfaces";




class RoomModel {
  async getAllMessages(
    _parant: any,
    _args: any,
    context: Context
  ) {
    const { db } = context;
    
    return db.messages.findAll();
  }

  async addMessage(
    _parant: any,
    args: { message: IMessage },
    context: Context
  ) { 
    const { db } = context;

    console.log('ARGS', args);


  }

}

export default new RoomModel();
