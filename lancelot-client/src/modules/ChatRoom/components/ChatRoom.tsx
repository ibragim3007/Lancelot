import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import BackButton from "./BackButton/BackButton";
import ChatSpace from "./ChatSpace/ChatSpace";
import Input from "./Input/Input";
import { useSocketChat } from "../hooks/useSocketChat";
import axios from "axios";
import { chatAction } from "../../../store/reducers/chatReducer/chatSlice";

const ChatRoom = () => {
  const { users } = useAppSelector((state) => state.chatReducer);
  const dispath = useAppDispatch();
  const { sendMessage, leaveFromChat } = useSocketChat();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("ENTER");
    setLoading(true);

    (async () => {
      try {
        console.log(process.env.API);
        const resultMessages = await axios.get(
          `${process.env.API}/get-all-messages`
        );
        const resultUsers = await axios.get(`${process.env.API}/get-all-users`);

        if (resultMessages.data && resultUsers.data) {
          dispath(chatAction.setMessages(resultMessages.data));
          dispath(chatAction.setUsers(resultUsers.data));
        }
      } catch (e) {
        console.log(e);
      }
    })();

    setLoading(false);
  }, []);
  return (
    <View style={{ gap: 20 }}>
      <BackButton leaveFromChat={leaveFromChat} />
      {/* <Text>Доброе пожаловать {userInfo?.name}!</Text> */}
      <Text>Пользователей онлайн: {users.length}</Text>
      {loading ? <ActivityIndicator /> : <ChatSpace />}
      <Input sendMessage={sendMessage} />
    </View>
  );
};

export default ChatRoom;
