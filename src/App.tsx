import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes'

import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  )
}

export default App;