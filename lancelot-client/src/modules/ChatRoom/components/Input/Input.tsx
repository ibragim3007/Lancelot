import React from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const Input = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextInput
        style={{ flex: 1, marginLeft: 20 }}
        mode="outlined"
        placeholder="Ваше сообщение"
      />
      <Button
        icon={({ size, color }) => (
          <Icon name="send" color={color} size={size + 10} />
        )}
        children={undefined}
      />
    </View>
  );
};

export default Input;
