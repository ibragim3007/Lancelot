import React, { PropsWithChildren } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Card, useTheme } from "react-native-paper";
// import messages from "../../../../mock/messages.json";
import Animated, { Layout } from "react-native-reanimated";
import { useAppSelector } from "../../../../hooks/storeHooks";
import { IMessage } from "../../../../interface/interfaces";
import Message from "../Message/Message";

const renderItem = ({ item }: { item: IMessage }) => {
  return <Message message={item} />;
};

interface ChatSpaceProps extends PropsWithChildren {}

const ChatSpace: React.FC<ChatSpaceProps> = ({ children }) => {
  const { colors } = useTheme();
  const messages = [
    ...useAppSelector((state) => state.chatReducer.messages),
  ].reverse();

  return (
    <FlatList
      style={{
        maxHeight: "75%",
        height: "75%",
        backgroundColor: colors.scrim,
        paddingVertical: 20,
      }}
      data={messages}
      renderItem={renderItem}
      snapToEnd
      inverted={true}
      keyExtractor={(item) => item.createAt as unknown as string}
    />
  );

  return (
    <ScrollView style={{ height: 500 }}>
      <Card>{children}</Card>
    </ScrollView>
  );
};

export default ChatSpace;
