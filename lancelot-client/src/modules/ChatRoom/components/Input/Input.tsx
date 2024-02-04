import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { IMessage } from "../../../../interface/interfaces";
import Animated, {
  FadeInDown,
  FadeOutDown,
  FadeOutLeft,
  Layout,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";

interface InputProps {
  sendMessage: (message: Omit<IMessage, "user">) => void;
}

const Input: React.FC<InputProps> = ({ sendMessage }) => {
  const [textInput, setTextInput] = useState("");

  const [showButton, setShowButton] = useState(false);

  const pressButton = () => {
    sendMessage({
      text: textInput,
      createAt: new Date(),
      id: "",
    });
    setTextInput("");
    setShowButton(false);
  };

  const changeInput = (newValue: string) => {
    setTextInput(newValue);
    if (newValue) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <Animated.View
        layout={Layout.duration(150)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 0,
        }}
      >
        <TextInput
          style={{ flex: 1, marginHorizontal: 20, paddingHorizontal: 25 }}
          mode="outlined"
          outlineStyle={{ borderRadius: 50 }}
          value={textInput}
          placeholder="Ваше сообщение"
          onChangeText={changeInput}
        />
        {showButton && (
          <Animated.View
            layout={Layout.duration(150)}
            entering={FadeInDown}
            exiting={FadeOutDown}
          >
            <Button
              onPress={pressButton}
              icon={({ size, color }) => (
                <Icon name="send" color={color} size={size + 10} />
              )}
              children={undefined}
            />
          </Animated.View>
        )}
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default Input;
