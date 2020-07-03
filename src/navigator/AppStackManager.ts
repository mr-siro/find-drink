import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {AppRoute} from './AppRoute';
import {AppNavigatorParams, AuthNavigatorParams} from './AppParamList';

// Auth
export interface SignInScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGNIN>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGNIN>;
}

//App
export interface MapScreenProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.MAPSCREEN>;
  route: RouteProp<AppNavigatorParams, AppRoute.MAPSCREEN>;
}

export interface BookingMenuProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.BOOKINGMENU>;
  route: RouteProp<AppNavigatorParams, AppRoute.BOOKINGMENU>;
}

export interface BookingcartProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.BOOKINGCART>;
  route: RouteProp<AppNavigatorParams, AppRoute.BOOKINGCART>;
}

export interface ReddemProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.REDEEM>;
  route: RouteProp<AppNavigatorParams, AppRoute.REDEEM>;
}
