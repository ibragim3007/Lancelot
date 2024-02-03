import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMessage, IUserInfo } from "../../../interface/interfaces";

interface StateInterface {
  messages: IMessage[];
  loadingRoom: boolean;
  users: IUserInfo[];
}

const initialState: StateInterface = {
  messages: [],
  loadingRoom: false,
  users: [],
};

export const chatSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setMessages(state, action: PayloadAction<IMessage[]>) {
      state.messages = action.payload;
      state.loadingRoom = false;
    },
    addMessage(state, action: PayloadAction<IMessage>) {
      state.messages.push(action.payload);
    },
    addUser(state, action: PayloadAction<IUserInfo>) {
      state.users.push(action.payload);
    },
    setUsers(state, action: PayloadAction<IUserInfo[]>) {
      state.users = action.payload;
    },
    removeUser(state, action: PayloadAction<IUserInfo>) {
      state.users = state.users.filter((u) => u.id !== action.payload.id);
    },
  },
});

export const chatAction = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
