import React, {useState} from 'react';
import {View, Text, FlatList, Image, ImageSourcePropType} from 'react-native';
import {MainHeader, HeaderCard, NomalButton, CartItem} from '@components';
import {Colors, Metrics} from '@share';
import {Icon} from 'react-native-elements';
import {listDrink} from '@services';
import {styles, Title, ListContainer} from './styles';

import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack/types';
import {AppRoute} from '@navigator';

export interface CartProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: RouteProp;
}

export interface Carts {
  id: string;
  image: ImageSourcePropType;
  price: string;
  count: number;
}

export const BookingCart: React.FunctionComponent = (props: CartProps) => {
  const {navigation, route} = props;
  const {prouctSelected} = route.params;
const Price =() => {
  prouctSelected
}
  const renderItem = (item: Carts, index: number) => {
    return (
      <CartItem
        image={item.image}
        amount={item.count.toString()}
        price={parseInt(item.price) * item.count}
      />
    );
  };

  const totalPrice = () => {
   return <Text style={{fontSize: 22}}>${''}</Text>
  };

  return (
    <View style={{flex: 1}}>
      <MainHeader
        title={'Choose your Friend'}
        leftComponent={
          <Icon
            name={'arrow-back'}
            color={Colors.White}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <HeaderCard
        userName={'Anne Peters'}
        message={'Hello this is my gift for you Neque porro quisquam est qui'}
        onPress={() => {}}
      />
      <ListContainer>
        <Title>{'Drink order'}</Title>
        <Title>{'Amount'}</Title>
        <Title>{'Price'}</Title>
      </ListContainer>
      <FlatList
        data={prouctSelected}
        renderItem={({item, index}) => renderItem(item, index)}
      />
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#676767'}}>{'Total:'}</Text>
          {totalPrice()}
        </View>
        <NomalButton
          title={'Payment'}
          buttonStyle={styles.payBtn}
          onPress={() => navigation.navigate(AppRoute.REDEEM)}
        />
      </View>
    </View>
  );
};
