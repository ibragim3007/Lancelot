import React from "react";
import { LayoutAnimation, View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { useAppSelector } from "../../../../hooks/storeHooks";
import { IMessage } from "../../../../interface/interfaces";
import { getTimeHourse } from "../../../../shared/helpers/getTime";
import SideInfo from "./SideInfo";
import Animated, { Layout, SlideInDown } from "react-native-reanimated";

interface MessageProps {
  message: IMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { colors } = useTheme();
  const userID = useAppSelector((state) => state.userReducer.userInfo?.id);
  const isMe = message.user.id === userID;

  if (message.type === "new-user" || message.type === "exit-user")
    return <SideInfo message={message} />;

  return (
    <Animated.View entering={SlideInDown}>
      <Card
        style={{
          backgroundColor: isMe
            ? colors.inverseOnSurface
            : colors.tertiaryContainer,
          padding: 10,
          marginTop: 10,

          width: "auto",
          flex: 0,
          alignSelf: isMe ? "flex-end" : "flex-start",
          flexDirection: "row",
          maxWidth: "80%",
        }}
      >
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Text
            variant="bodySmall"
            style={{ marginBottom: 5, color: colors.primary }}
          >
            {message.user.name || "no_user_name"}
          </Text>
          <Text
            variant="bodySmall"
            style={{ fontSize: 10, color: colors.primary, fontStyle: "italic" }}
          >
            {getTimeHourse(message.createAt) || ""}
          </Text>
        </View>
        <Text>{message.text}</Text>
      </Card>
    </Animated.View>
  );
};

export default Message;
