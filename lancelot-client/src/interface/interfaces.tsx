export interface IMessage {
  text: string;
  createAt: Date;
  user: IUserInfo;
}

export interface IUserInfo {
  id: string;
  name: string;
}
