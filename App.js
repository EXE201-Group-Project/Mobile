import { StatusBar } from 'expo-status-bar';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/redux/store';
import Navigator from './src/navigator/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Asyncstorage: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StoreProvider store={store}>
        <ToastProvider>
          <Navigator />
        </ToastProvider>
      </StoreProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
