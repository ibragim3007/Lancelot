import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "../pages/StartPage";
import ChatPage from "../pages/ChatPage";
import { darkTheme } from "../shared/theme/darkTheme";

export type RootStackParamList = {
  StartPage: undefined;
  ChatPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigatorMenu: React.FC = () => {
  return (
    <NavigationContainer
      independent
      theme={{
        dark: true,
        colors: {
          background: "",
          primary: "",
          card: "",
          text: "",
          border: "",
          notification: "",
        },
      }}
    >
      <Stack.Navigator
        initialRouteName="StartPage"
        screenOptions={{
          gestureEnabled: false,
          gestureDirection: "horizontal",

          headerShown: false,
        }}
      >
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorMenu;
