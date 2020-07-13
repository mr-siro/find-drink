import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageSourcePropType,
  TextInput,
  Alert,
} from 'react-native';
import {MainHeader, HeaderCard, NomalButton, CartItem} from '@components';
import {Colors, Metrics} from '@share';
import {Icon, Button} from 'react-native-elements';
import {styles, Title, ListContainer} from './styles';

import {AppRoute, BookingcartProps} from '@navigator';

export interface Carts {
  id: string;
  title: string;
  image: ImageSourcePropType;
  price: number;
  amount: number;
}

export const BookingCart: React.FC<BookingcartProps> = (props) => {
  const [message, setMessage] = useState('');
  const [downActive, setDownActive] = useState(false);
  const [upActive, setUpActive] = useState(false);

  const {navigation, route} = props;
  const {productSelected} = route.params;

  const [listCart, setListCart] = useState(productSelected);
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
  // sap xep tang dan
  const sortUp = () => {
    let listSorted = [...listCart];

    // const length = listSorted.length;
    // for(let i = length -1 ; i >= 0; i--) {
    //   for (let j = 1; j <= i; j++) {
    //     if (listSorted[j-1].amount > listSorted[j].amount) {
    //       let haSagi = listSorted[j-1].amount;
    //       listSorted[j-1].amount = listSorted[j].amount;
    //       listSorted[j].amount = haSagi;
    //     }
    //   }
    // }

    listSorted.sort(
      (a: Carts, b: Carts) => a.amount * a.price - b.amount * b.price,
    );
    setUpActive(true);
    setDownActive(false);
    setListCart(listSorted);
  };

  // sap xep giam dan
  const sortDown = () => {
    let listSorted = [...listCart];

    // const length = listSorted.length;
    // for(let i = length -1 ; i >= 0; i--) {
    //   for (let j = 1; j <= i; j++) {
    //     if (listSorted[j-1].amount < listSorted[j].amount) {
    //       let haSagi = listSorted[j-1].amount;
    //       listSorted[j-1].amount = listSorted[j].amount;
    //       listSorted[j].amount = haSagi;
    //     }
    //   }
    // }
    listSorted.sort(
      (a: Carts, b: Carts) => b.amount * b.price - a.amount * a.price,
    );
    setDownActive(true);
    setUpActive(false);
    setListCart(listSorted);
  };

  const renderItem = (item: Carts, index: number) => {
    console.log('item', item);
    return (
      <CartItem
        image={item.image}
        amount={item.amount < 10 ? `0${item.amount}` : item.amount}
        price={item.price * item.amount}
      />
    );
  };

  const findMax = () => {
    if (listCart.length > 0) {
      let max = listCart[0] as Carts;
      for (let i = 1; i < listCart.length - 1; i++) {
        if (max.price < max.price * listCart[i].amount) {
          max.price = listCart[i].price * listCart[i].amount;
        }
      }
      return max.title;
    }
    return '';
  };

  const showMax = () => {
    Alert.alert(
      'Sản phẩm có giá cao nhất',
      `${findMax()}`,
      [{text: 'OK', onPress: () => {}}],
      {cancelable: false},
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
        <View style={{flexDirection: 'row'}}>
          <Title>{'Amount'}</Title>
          <Icon
            name={'ios-arrow-down'}
            type={'ionicon'}
            style={{
              marginHorizontal: Metrics.spacing.tiny,
              backgroundColor: downActive
                ? Colors.Background.ButtonBackground
                : '#ffffff',
            }}
            onPress={() => {
              sortDown();
            }}
          />
          <Icon
            name={'ios-arrow-up'}
            type={'ionicon'}
            onPress={() => sortUp()}
            style={{
              backgroundColor: upActive
                ? Colors.Background.ButtonBackground
                : '#ffffff',
            }}
          />
        </View>
        <Title>{'Price'}</Title>
      </ListContainer>
      <FlatList
        data={listCart}
        renderItem={({item, index}) => renderItem(item, index)}
        ListFooterComponent={
          <Button
            buttonStyle={{marginHorizontal: Metrics.spacing.giant}}
            title={'Sản phẩm giá cao nhất'}
            onPress={() => {
              showMax();
            }}
          />
        }
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
