interface IDefaultDatabaseObject {
  id: string;
  createdAt: Date;
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
    this.data.push(object);
  }

  remove(id: string) {
    this.data = this.data.filter((item) => item.id !== id);
  }

  update(id: string, data: T) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('not found');

    this.data[index] = data;
  }
}

class DataBase {
  messages = new MockDatabase();
  users = new MockDatabase();
}

const db = new DataBase();

export default db;