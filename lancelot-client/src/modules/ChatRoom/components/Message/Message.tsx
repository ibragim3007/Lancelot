import React from "react";
import { Card, Text, useTheme } from "react-native-paper";
import { IMessage } from "../../../../interface/interfaces";
import { useAppSelector } from "../../../../hooks/storeHooks";
import {
  getFullTime,
  getTime,
  getTimeHourse,
} from "../../../../shared/helpers/getTime";
import { View } from "react-native";
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
  );
};

export default Message;
