import { StatusBar } from 'expo-status-bar';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/redux/store';
import Navigator from './src/navigator/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';import { MenuProvider } from 'react-native-popup-menu';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StoreProvider store={store}>
        {/* <StatusBar style="light" /> */}
        <Navigator />
      </StoreProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
