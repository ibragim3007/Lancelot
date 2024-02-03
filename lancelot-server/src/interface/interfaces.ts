export interface IMessage {
  id: string;
  text: string;
  createAt: Date;
  user: IUserInfo;
}

export interface IUserInfo {
  id: string;
  name: string;
}
