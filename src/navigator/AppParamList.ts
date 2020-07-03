import {MainNavigatorParams} from './AppNavigator';
import {AppRoute} from './AppRoute';

export type AuthNavigatorParams = MainNavigatorParams & {
  [AppRoute.SIGNIN]: undefined;
};

export type AppNavigatorParams = {
  [AppRoute.MAPSCREEN]: undefined;
  [AppRoute.BOOKINGMENU]: undefined;
  [AppRoute.BOOKINGCART]: {
    productSelected: Array<any>;
  };
  [AppRoute.REDEEM]: {
    message: string;
    totalPrice: number;
    totalAmout: number;
  };
};
