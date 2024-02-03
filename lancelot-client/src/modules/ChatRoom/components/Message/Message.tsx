import React from "react";
import { Card, Text, useTheme } from "react-native-paper";
import { IMessage } from "../../../../interface/interfaces";

interface MessageProps {
  message: IMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { colors } = useTheme();
  return (
    <Card
      style={{
        backgroundColor: colors.tertiaryContainer,
        padding: 10,
        marginTop: 10,

        width: "auto",
        flex: 0,
        alignSelf: "flex-start",
        flexDirection: "row",
        maxWidth: "80%",
      }}
    >
      <Text
        variant="bodySmall"
        style={{ marginBottom: 5, color: colors.primary }}
      >
        {message.user.name || "no_user_name"}
      </Text>
      <Text>{message.text}</Text>
    </Card>
  );
};

export default Message;
