import React from "react";
import { View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import Animated, { FadeInDown, Layout } from "react-native-reanimated";
import { useAppSelector } from "../../../../hooks/storeHooks";
import { IMessage } from "../../../../interface/interfaces";
import { getTimeHourse } from "../../../../shared/helpers/getTime";
import SideInfo from "./SideInfo";

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
    <Card
      style={{
        backgroundColor: isMe ? colors.backdrop : colors.secondaryContainer,
        padding: 10,
        marginTop: 10,
        paddingBottom: 15,
        paddingRight: 30,
        width: "auto",
        // flex: 0,
        alignSelf: isMe ? "flex-end" : "flex-start",
        flexDirection: "row",
        maxWidth: "80%",
        borderRadius: 15,
      }}
    >
      <Text
        variant="bodyMedium"
        style={{ marginBottom: 0, color: colors.primary }}
      >
        {message.user.name || "no_user_name"}
      </Text>

      <Text variant="bodyMedium">{message.text}</Text>
      <Text
        variant="bodySmall"
        style={{
          fontSize: 9,
          color: colors.primary,
          fontStyle: "italic",
          textAlign: "right",
          position: "absolute",
          right: -23,
          bottom: -13,
        }}
      >
        {getTimeHourse(message.createAt) || ""}
      </Text>
    </Card>
  );
};

export default Message;
