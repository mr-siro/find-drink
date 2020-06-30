import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {Colors, Metrics} from '@share';
import {Images} from '@assets';

export interface MapCardProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
}

export const MapCard = (props: MapCardProps) => {
  const {image, title, description} = props;

  return (
    <View>
      <View
        style={{
          borderRadius: 10,
          flexDirection: 'row',
          marginHorizontal: Metrics.spacing.large,
          backgroundColor: Colors.White,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        }}>
        <Image source={image} style={{width: 126, height: 132}} />
        <View
          style={{
            flex: 1,
            marginHorizontal: Metrics.spacing.medium,
          }}>
          <Text style={{fontSize: 20, paddingBottom: Metrics.spacing.medium}}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#737373',
              marginRight: 20,
            }}>
            {description}
          </Text>
        </View>
        <Image
          source={Images.IClike}
          style={{
            position: 'relative',
            right: Metrics.spacing.small,
            bottom: '8%',
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: Colors.White,
          opacity: 0.45,
          height: 6,
          width: '88%',
          alignSelf: 'center',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      />
    </View>
  );
};
