import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageSourcePropType,
  TextInput,
} from 'react-native';
import {MainHeader, HeaderCard, NomalButton, CartItem} from '@components';
import {Colors, Metrics} from '@share';
import {Icon} from 'react-native-elements';
import {styles, Title, ListContainer} from './styles';

import {AppRoute, BookingcartProps} from '@navigator';

export interface Carts {
  id: string;
  image: ImageSourcePropType;
  price: number;
  amount: number;
}

export const BookingCart: React.FC<BookingcartProps> = (props) => {
  const [message, setMessage] = useState('');

  const {navigation, route} = props;
  const {productSelected} = route.params;

  // const toTal = () => {
  //   let sum = 0;
  //   for (let i = 0; i < prouctSelected.length; ++i) {
  //     sum += prouctSelected[i].price * prouctSelected[i].count;
  //   }
  //   console.log(prouctSelected);
  //   return sum;
  // };

  const sumPrice = () => {
    let sum = 0;
    for (let item of productSelected) {
      sum += item.price * item.amount;
    }
    return sum;
  };

  const sumAmount = () => {
    let sum = 0;
    for (let item of productSelected) {
      sum += item.amount;
    }
    return sum;
  };

  const renderItem = (item: Carts, index: number) => {
    return (
      <CartItem
        image={item.image}
        amount={item.amount < 10 ? `0${item.amount}` : item.amount}
        price={item.price * item.amount}
      />
    );
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
      <HeaderCard userName={'Anne Peters'} onPress={() => {}}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={'Enter your message'}
          value={message}
          onChangeText={(message) => setMessage(message)}
        />
      </HeaderCard>
      <ListContainer>
        <Title>{'Drink order'}</Title>
        <Title>{'Amount'}</Title>
        <Title>{'Price'}</Title>
      </ListContainer>
      <FlatList
        data={productSelected}
        renderItem={({item, index}) => renderItem(item, index)}
      />
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#676767'}}>{'Total:'}</Text>
          <Text style={{fontSize: 22}}>${sumPrice()}</Text>
        </View>
        <NomalButton
          title={'Payment'}
          buttonStyle={styles.payBtn}
          onPress={() =>
            navigation.navigate(AppRoute.REDEEM, {
              message: message,
              totalPrice: sumPrice(),
              totalAmout: sumAmount(),
            })
          }
        />
      </View>
    </View>
  );
};
