import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute} from './AppRoute';
import {SignInScreen} from '@screens';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={AppRoute.SIGNIN} component={SignInScreen} />
    </Stack.Navigator>
  );
};
