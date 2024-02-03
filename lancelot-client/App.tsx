import { useEffect, useRef } from "react";
import { PaperProvider } from "react-native-paper";
import { Socket, io } from "socket.io-client";
import NavigatorMenu from "./src/navigation/Navigator";
import SafeProvider from "./src/shared/layout/SafeProvider";
import { darkTheme } from "./src/shared/theme/darkTheme";
import { Provider } from "react-redux";
import { setupStore } from "./src/store/store";

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={darkTheme}>
        <SafeProvider>
          <NavigatorMenu />
        </SafeProvider>
      </PaperProvider>
    </Provider>
  );
}
