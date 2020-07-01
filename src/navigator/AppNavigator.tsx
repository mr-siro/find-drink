import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {
  BookingCart,
  BookingMenu,
  MapScreen,
  ReddemScreen,
  SignInScreen,
} from '@screens';

import {AppRoute} from './AppRoute';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={AppRoute.SIGNIN} component={SignInScreen} />
    </AuthStack.Navigator>
  );
};

const AppMainNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName={AppRoute.MAPSCREEN} headerMode="none">
      <Stack.Screen name={AppRoute.MAPSCREEN} component={MapScreen} />
      <AppStack.Screen name={AppRoute.BOOKINGMENU} component={BookingMenu} />
      <AppStack.Screen name={AppRoute.BOOKINGCART} component={BookingCart} />
      <AppStack.Screen name={AppRoute.REDEEM} component={ReddemScreen} />
    </AppStack.Navigator>
  );
};
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AppRoute.AUTH} headerMode="none">
        <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
        <Stack.Screen name={AppRoute.APP} component={AppMainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
