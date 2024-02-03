import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { connectUser } from "../../../store/reducers/userInfo/actions/connectUser";
import { useNavigate } from "../../../hooks/useNavigate";

const StartModule = () => {
  const [name, setName] = useState("");
  const [isAvailableToEnter, setIsAvailableToEnter] = useState(false);

  const onChangeInput = (newValue: string) => {
    setName(newValue);
    if (newValue.length > 2) setIsAvailableToEnter(true);
    else setIsAvailableToEnter(false);
  };

  const { navigateToChatRoom } = useNavigate();
  const dispath = useAppDispatch();
  const onPressButton = () => {
    dispath(connectUser(name));

    navigateToChatRoom();
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        height: "60%",
      }}
    >
      <View style={{ gap: 50 }}>
        <View style={{ gap: 10 }}>
          <Text variant="titleLarge">Добро пожаловать в чат!</Text>
          <Text
            variant="labelMedium"
            style={{ textAlign: "left", maxWidth: "70%" }}
          >
            Здесь полная анонимность ваши сообщения нигде не будут сохраняться
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "height"}
        >
          <View style={{ gap: 20 }}>
            <TextInput
              onChangeText={(newValue) => onChangeInput(newValue)}
              value={name}
              style={{ width: "100%", textAlign: "center" }}
              placeholder="Придумайте ник"
            />
            <Button
              onPress={onPressButton}
              disabled={!isAvailableToEnter}
              mode="contained"
            >
              Начать
            </Button>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default StartModule;
