import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import Store from './src/Store';

export default function App() {
  return (

    <Provider store={Store}>
      <Navigator />
    </Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
