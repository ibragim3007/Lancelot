import { useRef, useEffect, createContext } from "react";
import { Socket, io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { chatAction } from "../../../store/reducers/chatReducer/chatSlice";
import { IMessage, IUserInfo } from "../../../interface/interfaces";
import { snackAction } from "../../../store/reducers/snackbar/snackbarSlice";

export const useSocketChat = () => {
  const socketRef = useRef<Socket | null>(null);
  const { userInfo } = useAppSelector((state) => state.userReducer);

  const dispath = useAppDispatch();

  useEffect(() => {
    const socket = (socketRef.current = io(process.env.API || ""));
    socket.emit("connection", userInfo);

    socket.on("connection", (users: IUserInfo[]) => {
      dispath(chatAction.setUser(users));
    });

    socket.on("user-leave", (msg) => {
      console.log(msg);
      dispath(chatAction.removeUser(msg));
    });

    socket.on("message", (msg) => {
      console.log(msg);
      dispath(chatAction.addMessage(msg));
    });

    return () => {
      socket.emit("user-leave", userInfo);
      socket.disconnect();
    };
  }, []);

  const sendMessage = (message: Omit<IMessage, "user">) => {
    if (!socketRef.current || !userInfo) {
      dispath(snackAction.open("No connection!"));
      return;
    }

    const msg: IMessage = {
      user: userInfo,
      ...message,
    };
    socketRef.current.emit("message", msg);
  };

  return {
    sendMessage,
  };
};
