import React, { PropsWithChildren } from "react";
import { FlatList, ScrollView } from "react-native";
import { Card, useTheme } from "react-native-paper";
// import messages from "../../../../mock/messages.json";
import { useAppSelector } from "../../../../hooks/storeHooks";
import { IMessage } from "../../../../interface/interfaces";
import Message from "../Message/Message";
import Animated, { FadeInDown, Layout } from "react-native-reanimated";

const renderItem = ({ item }: { item: IMessage }) => {
  return (
    <Animated.View
      entering={FadeInDown}
      layout={Layout.duration(10).springify().mass(0.35)}
    >
      <Message message={item} />
    </Animated.View>
  );
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
        backgroundColor: colors.scrim,
        paddingVertical: 20,
      }}
      data={messages}
      renderItem={renderItem}
      snapToEnd
      contentContainerStyle={{
        padding: 10,
      }}
      inverted={true}
      keyExtractor={(item) => item.createAt as unknown as string}
      indicatorStyle="black"
    />
  );

  return (
    <ScrollView style={{ height: 500 }}>
      <Card>{children}</Card>
    </ScrollView>
  );
};

export default ChatSpace;
