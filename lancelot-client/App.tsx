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
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = (socketRef.current = io(process.env.API || ""));
    socket.emit("message", JSON.stringify(new Date()));
  }, []);

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
