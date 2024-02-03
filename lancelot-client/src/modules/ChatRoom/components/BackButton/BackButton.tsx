import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigate } from "../../../../hooks/useNavigate";

interface BackButtonProps {
  leaveFromChat: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ leaveFromChat }) => {
  const { navigateToStartPage } = useNavigate();

  const onPressButton = () => {
    leaveFromChat();
    navigateToStartPage();
  };

  return (
    <View style={{ alignItems: "flex-start" }}>
      <Button
        onPress={onPressButton}
        icon={({ size, color }) => (
          <Icon name="arrow-back-ios" color={color} size={size} />
        )}
        // icon={<Icon name="arrow-back-ios  " />}
      >
        Изменить имя
      </Button>
    </View>
  );
};

export default BackButton;
