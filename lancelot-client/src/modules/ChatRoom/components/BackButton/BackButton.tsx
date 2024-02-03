import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigate } from "../../../../hooks/useNavigate";

const BackButton = () => {
  const { navigateToStartPage } = useNavigate();

  const onPressButton = () => {
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
