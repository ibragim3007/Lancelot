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
  const { sendMessage } = useSocketChat();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const result = await axios.get(`${process.env.API}/get-all-messages`);

        if (result.data) {
          dispath(chatAction.setMessages(result.data));
        }
      } catch (e) {
        console.log(e);
      }
    })();

    setLoading(false);
  }, []);
  return (
    <View style={{ gap: 20 }}>
      <BackButton />
      {/* <Text>Доброе пожаловать {userInfo?.name}!</Text> */}
      <Text>Пользователей онлайн: {users.length}</Text>
      {loading ? <ActivityIndicator /> : <ChatSpace />}
      <Input sendMessage={sendMessage} />
    </View>
  );
};

export default ChatRoom;
