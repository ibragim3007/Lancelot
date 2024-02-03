export interface IMessage {
  id: string;
  text: string;
  createAt: Date;
  user: IUserInfo;
  type?: 'default' | 'new-user' | 'exit-user';
}

export interface IUserInfo {
  id: string;
  name: string;
}
