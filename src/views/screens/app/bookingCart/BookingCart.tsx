import React from 'react';
import {View, Text, FlatList, Image, ImageSourcePropType} from 'react-native';
import {MainHeader, HeaderCard, NomalButton, CartItem} from '@components';
import {Colors, Metrics} from '@share';
import {Icon} from 'react-native-elements';
import {listDrink} from '@services';
import {styles} from './styles';

export interface Carts {
  id:string;
  image: ImageSourcePropType;
  price: string;
}

export const BookingCart = () => {
  const renderItem = (item: Carts, index: number) => {
    return <CartItem image={item.image} amount={'01'} price={item.price} />;
  };
  return (
    <View style={{flex: 1}}>
      <MainHeader
        title={'Choose your Friend'}
        leftComponent={
          <Icon name={'arrow-back'} color={Colors.White} onPress={() => {}} />
        }
      />
      <HeaderCard
        userName={'Anne Peters'}
        message={'Hello this is my gift for you Neque porro quisquam est qui'}
        onPress={() => {}}
      />
      <FlatList
        data={listDrink}
        style={{paddingVertical: Metrics.spacing.huge}}
        renderItem={({item, index}) => renderItem(item, index)}
      />
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#676767'}}>{'Total:'}</Text>
          <Text style={{fontSize: 22}}>${'148'}</Text>
        </View>
        <NomalButton title={'Payment'} buttonStyle={styles.payBtn} />
      </View>
    </View>
  );
};
