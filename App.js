import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import Store from './src/Store';
import { initSQLiteDB } from './src/persistence';
import { err } from 'react-native-svg';

(async () => {
  try {
      const response = await initSQLiteDB()

  }catch (error) {
    console.log(error);
  }
})()



export default function App() {
  return (

    <Provider store={Store} >
      <Navigator />
    </Provider>


  );
}
const styles = StyleSheet.create({
});
