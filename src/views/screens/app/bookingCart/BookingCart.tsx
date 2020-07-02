import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ImageSourcePropType,
  TextInput,
} from 'react-native';
import {MainHeader, HeaderCard, NomalButton, CartItem} from '@components';
import {Colors, Metrics} from '@share';
import {Icon} from 'react-native-elements';
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
  price: number;
  count: number;
}

export const BookingCart: React.FunctionComponent = (props: CartProps) => {
  const [message, setMessage] = useState('');

  const {navigation, route} = props;
  const {prouctSelected} = route.params;

  const toTal = () => {
    let sum = 0;
    for (let i = 0; i < prouctSelected.length; ++i) {
      sum += prouctSelected[i].price * prouctSelected[i].count;
    }
    console.log(prouctSelected);
    return sum;
  };

  const renderItem = (item: Carts, index: number) => {
    return (
      <CartItem
        image={item.image}
        amount={item.count.toString()}
        price={item.price * item.count}
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
          style={{fontWeight: '500', fontSize: Metrics.FontSize.h6}}
          placeholder={'Take a message'}
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
        data={prouctSelected}
        renderItem={({item, index}) => renderItem(item, index)}
      />
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#676767'}}>{'Total:'}</Text>
          <Text style={{fontSize: 22}}>${toTal()}</Text>
        </View>
        <NomalButton
          title={'Payment'}
          buttonStyle={styles.payBtn}
          onPress={() =>
            navigation.navigate(AppRoute.REDEEM, {message: message})
          }
        />
      </View>
    </View>
  );
};
