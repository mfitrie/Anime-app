import { NavigationContainer } from '@react-navigation/native';
// import { NativeBaseProvider, Text } from "native-base";

import AppContainer from './src/components/app-container';
import Navigator from './src/index';

export default function App() {
  return (
    <AppContainer>
      <Navigator/>
    </AppContainer>
  );
}
