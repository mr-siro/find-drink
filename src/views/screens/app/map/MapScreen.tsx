import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Colors, Metrics} from '@share';
import {Images} from '@assets';
import {styles} from './styles';
import {MainHeader, ToggleServices, MapCard} from '@components';

import {AppRoute, AppNavigatorParams} from '@navigator';
import {StackNavigationProp} from '@react-navigation/stack';

export interface MapProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.MAPSCREEN>;
}

export const MapScreen = (props: MapProps) => {
  const {navigation} = props;

  return (
    <View style={{backgroundColor: Colors.Background.AppBackground, flex: 1}}>
      <ImageBackground
        source={Images.MapBackground}
        style={{width: '100%', height: '100%'}}
        resizeMode={'stretch'}>
        <MainHeader
          title={'Faroe Bar'}
          leftComponent={<Image source={Images.ICmenu} />}
        />
        <ToggleServices />
        <View style={styles.centerItem}>
          <Image source={Images.Group} />
        </View>
        <TouchableOpacity
          style={{paddingBottom: Metrics.spacing.large}}
          onPress={() => navigation.navigate(AppRoute.BOOKINGMENU)}>
          <MapCard
            title={'Faroe Bar'}
            image={Images.Bar}
            description={'New York 59, Hillburn, NY, USA'}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
