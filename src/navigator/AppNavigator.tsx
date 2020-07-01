import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './AuthNavigator';
import {BookingCart, BookingMenu, MapScreen, ReddemScreen} from '@screens';

import {AppRoute} from './AppRoute';

const Stack = createStackNavigator();
const AppStack = createStackNavigator();
const AppMainNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName={AppRoute.MAPSCREEN} headerMode="none">
      <Stack.Screen name={AppRoute.MAPSCREEN} component={MapScreen} />
          <AppStack.Screen name={AppRoute.BOOKINGMENU} component={BookingMenu} />
          <AppStack.Screen name={AppRoute.BOOKINGCART} component={BookingCart} />
          <AppStack.Screen name={AppRoute.REDEEM} component={ReddemScreen} />
    </AppStack.Navigator>
  )
}
export const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={AppRoute.AUTH} headerMode="none">
          <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
          <Stack.Screen name={AppRoute.APP} component ={AppMainNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  