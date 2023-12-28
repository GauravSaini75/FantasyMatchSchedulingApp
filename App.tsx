import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Root from './src/route';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <>
      <Root />
    </>
  );
}

export default App;