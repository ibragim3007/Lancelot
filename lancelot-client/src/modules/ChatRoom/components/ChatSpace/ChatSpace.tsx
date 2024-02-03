import React, { PropsWithChildren } from "react";
import { FlatList, ScrollView } from "react-native";
import { Card, useTheme } from "react-native-paper";
import messages from "../../../../mock/messages.json";
import Message from "../Message/Message";
import { IMessage } from "../../../../interface/interfaces";

const renderItem = ({ item }: { item: IMessage }) => {
  return <Message message={item} />;
};

interface ChatSpaceProps extends PropsWithChildren {}

const ChatSpace: React.FC<ChatSpaceProps> = ({ children }) => {
  const { colors } = useTheme();
  return (
    <FlatList
      style={{
        maxHeight: "75%",
        backgroundColor: colors.scrim,
        paddingVertical: 20,
      }}
      data={messages as unknown as IMessage[]}
      renderItem={renderItem}
      snapToEnd
      inverted
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
