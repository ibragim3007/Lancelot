import { IMessage, IUserInfo } from "../src/interface/interfaces";

interface IDefaultDatabaseObject {
  id: string;
  createdAt?: Date;
}


class MockDatabase<T extends IDefaultDatabaseObject> {
  data: T[] = [];

  constructor(data?: T) {
    if (!Array.isArray(data)) return;
    this.data = data;
  }

  findAll() {
    return this.data;
  }

  find(id: string) {
    return this.data.find((item) => item.id === id);
  }

  create(object: T) {
    console.log(object);
    this.data.push(object);
    return object;
  }

  remove(id: string) {
    if (this.data && this.data.length !== 0) {
      this.data = this.data.filter((item) => item.id !== id);
    }
  }

  update(id: string, data: T) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('not found');

    this.data[index] = data;
  }
}

class DataBase {
  messages = new MockDatabase<IMessage>();
  users = new MockDatabase<IUserInfo>();
}

const db = new DataBase();

export default db;