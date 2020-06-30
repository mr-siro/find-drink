/*
 *nhatnv@abcsoft.vn
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  SignInScreen,
  MapScreen,
  BookingMenu,
  BookingCart,
  ReddemScreen,
} from '@screens';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ReddemScreen />
    </SafeAreaProvider>
  );
}

export default App;
