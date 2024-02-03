import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useAppSelector } from "../../../hooks/storeHooks";
import BackButton from "./BackButton/BackButton";
import ChatSpace from "./ChatSpace/ChatSpace";
import Input from "./Input/Input";

const ChatRoom = () => {
  const { userInfo } = useAppSelector((state) => state.userReducer);
  return (
    <View style={{ gap: 20 }}>
      <BackButton />
      <Text>Доброе пожаловать {userInfo?.name}!</Text>
      <ChatSpace />
      <Input />
    </View>
  );
};

export default ChatRoom;
