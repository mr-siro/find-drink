import React from 'react';
import {View, Text, Image, ImageSourcePropType, ViewStyle} from 'react-native';
import {Colors, Metrics} from '@share';

export interface CartItemProps {
  image: ImageSourcePropType;
  amount: string;
  price: string | number;
  diveStyle?:ViewStyle;
}

export const CartItem = (props: CartItemProps) => {
  const {image, amount, price,diveStyle} = props;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Image
          source={image}
          style={{width: 57, height: 58, borderRadius: 5}}
        />
        <Text style={{fontSize: Metrics.FontSize.large}}>{amount}</Text>
        <Text style={{fontSize: Metrics.FontSize.large, textAlign: 'center'}}>
          ${price}
        </Text>
      </View>
      <View
        style={[{
          backgroundColor: '#D8D8D8',
          height: 0.5,
          marginHorizontal: Metrics.spacing.extraHuge,
          marginVertical: Metrics.spacing.huge,
        },diveStyle]}
      />
    </View>
  );
};
