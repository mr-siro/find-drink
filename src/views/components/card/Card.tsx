import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Colors, Metrics} from '@share';

export interface CardProps {
  image: ImageSourcePropType;
  title: string;
  price: string;
  onPress?: () => void;
  buttonTitle?: number | string;
  buttonStyle?: ViewStyle;
}

export const Card = (props: CardProps) => {
  const {image, title, price, onPress, buttonTitle, buttonStyle} = props;

  return (
    <View
      style={{
        borderRadius: 5,
        height: 120,
        flexDirection: 'row',
        marginRight: Metrics.spacing.medium,
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
        marginVertical: Metrics.spacing.medium,
      }}>
      <Image
        source={image}
        style={{
          width: 117,
          height: 120,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: Metrics.spacing.medium,
        }}>
        <Text style={{fontSize: 20, paddingBottom: Metrics.spacing.medium}}>
          {title}
        </Text>
        <Text style={{fontSize: 20, color: Colors.Background.ButtonBackground}}>
          ${price}
        </Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            position: 'relative',
            width: 39,
            height: 37,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            left: 12,
          },
          buttonStyle,
        ]}>
        <Text style={{fontSize: 20, color: Colors.White}}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
