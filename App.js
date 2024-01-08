import { StatusBar } from "expo-status-bar";
import { Provider as StoreProvider } from 'react-redux';
import { store } from "./src/redux/store";
import Navigator from "./src/navigator/Navigator";

export default function App() {

  return (
    <StoreProvider store={store}>
      <StatusBar style="light"/>
      <Navigator />
    </StoreProvider>
  );
}

