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
        padding: 6,
        marginTop: 20,
        paddingHorizontal: 30,
        alignSelf: "center",
        borderRadius: 100,
      }}
    >
      <Text variant="bodySmall" style={{ textAlign: "center" }}>
        Пользователь {message.user.name} присоеденился к чату
      </Text>
    </Card>
  );
};

export default SideInfo;
