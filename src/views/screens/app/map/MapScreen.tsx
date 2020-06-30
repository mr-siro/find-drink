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
import {styles, Bottom, BorderBottom} from './styles';
import {MainHeader,ToggleServices} from '@components';

export const MapScreen = () => {

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
        <ToggleServices/>
        <View style={styles.centerItem}>
          <Image source={Images.Group} />
        </View>
        <TouchableOpacity style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image source={Images.Bar} />
            <Bottom>
              <View style={styles.bottomRight}>
                <Text style={{fontSize: Metrics.FontSize.h6}}>{'Faroe Bar'}</Text>
                <Image source={Images.IClike} />
              </View>
              <Text
                style={{color: '#737373', fontSize: Metrics.FontSize.large}}
                numberOfLines={2}>
                {`${'New York 59, Hillburn,'}\n${'NY, USA'}`}
              </Text>
            </Bottom>
          </View>
          <BorderBottom />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
