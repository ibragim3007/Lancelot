import React from "react";
import { Card, Text, useTheme } from "react-native-paper";
import { IMessage } from "../../../../interface/interfaces";

interface SideInfoProps {
  message: IMessage;
}

const SideInfo: React.FC<SideInfoProps> = ({ message }) => {
  const { colors } = useTheme();
  return (
    <Card
      style={{
        padding: 6.25,
        marginTop: 20,
        paddingHorizontal: 30,
        alignSelf: "center",
        borderRadius: 100,
        backgroundColor: colors.background,
      }}
    >
      {message.type === "new-user" && (
        <Text variant="bodySmall" style={{ textAlign: "center" }}>
          Пользователь {message.user.name} присоединился к чату
        </Text>
      )}
      {message.type === "exit-user" && (
        <Text variant="bodySmall" style={{ textAlign: "center" }}>
          Пользователь {message.user.name} покинул чат
        </Text>
      )}
    </Card>
  );
};

export default SideInfo;
