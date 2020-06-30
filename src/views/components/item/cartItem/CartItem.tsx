import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {Colors, Metrics} from '@share';

export interface CartItemProps {
  image: ImageSourcePropType;
  amount: string;
  price: string;
}

export const CartItem = (props: CartItemProps) => {
  const {image, amount, price} = props;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View>
          <Text
            style={{
              fontSize: Metrics.FontSize.h6,
              color: '#676767',
              paddingBottom: Metrics.spacing.huge,
            }}>
            {'Drink order'}
          </Text>
          <Image
            source={image}
            style={{width: 57, height: 58, borderRadius: 5}}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: Metrics.FontSize.h6,
              color: '#676767',
              paddingBottom: Metrics.spacing.huge,
            }}>
            {'Amount'}
          </Text>
          <Text style={{fontSize: Metrics.FontSize.large}}>{amount}</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: Metrics.FontSize.h6,
              color: '#676767',
              paddingBottom: Metrics.spacing.huge,
            }}>
            {'Price'}
          </Text>
          <Text style={{fontSize: Metrics.FontSize.large, textAlign: 'center'}}>
            ${price}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#D8D8D8',
          height: 0.5,
          marginHorizontal: Metrics.spacing.extraHuge,
          marginVertical: Metrics.spacing.huge,
        }}
      />
    </View>
  );
};
