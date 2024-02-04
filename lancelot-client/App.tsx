import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import NavigatorMenu from "./src/navigation/Navigator";
import SafeProvider from "./src/shared/layout/SafeProvider";
import { darkTheme } from "./src/shared/theme/darkTheme";
import { setupStore } from "./src/store/store";
import { StatusBar, View } from "react-native";

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={darkTheme}>
        <StatusBar />
        <SafeProvider>
          <NavigatorMenu />
        </SafeProvider>
      </PaperProvider>
    </Provider>
  );
}
