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
import { API_URL } from "../../../config";

const ChatRoom = () => {
  const { users } = useAppSelector((state) => state.chatReducer);
  const dispath = useAppDispatch();
  const { sendMessage, leaveFromChat, loadSocketChat } = useSocketChat();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const resultMessages = await axios.get(`${API_URL}/get-all-messages`);
        const resultUsers = await axios.get(`${API_URL}/get-all-users`);

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
    <View style={{ gap: 20, height: "100%", maxHeight: 860 }}>
      <BackButton leaveFromChat={leaveFromChat} />
      {/* <Text>Доброе пожаловать {userInfo?.name}!</Text> */}
      <Text>Пользователей онлайн: {users.length}</Text>

      {loading || loadSocketChat ? <ActivityIndicator /> : <ChatSpace />}

      <Input sendMessage={sendMessage} />
    </View>
  );
};

export default ChatRoom;
