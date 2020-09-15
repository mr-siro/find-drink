import React, {useState} from 'react';
import {
  View,
  Image,
  FlatList,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import {Colors, Metrics} from '@share';
import {Images} from '@assets';
import {styles, Container} from './styles';
import {MainHeader, ToggleServices, Card, NomalButton} from '@components';
import {listDrink} from '@services';

import {AppRoute, AppNavigatorParams} from '@navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import { set } from 'react-native-reanimated';

export interface MenuProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.BOOKINGMENU>;
}

export interface Products {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
  amount: number;
}

export const BookingMenu = (props: MenuProps) => {
  const {navigation} = props;
  const [listMenu, setListMenu] = useState(listDrink);
  const [amount, setAmount] = useState(0);

  const handleAddItem = (id: number) => {
    let newList = [...listMenu];
    // const filteredData = newList.find((item: Products) => item.id == id);
    // if (filteredData) {
    //   setAmount((filteredData.amount += 1));
    //   setListMenu(newList);
    // }
    // return filteredData;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id == id) {
        setAmount((newList[i].amount += 1));
        setListMenu(newList);
        return i;
      }
    }
    return -1;
  };

  const filterProduct = () => {
    const filteredData = listMenu.filter((item: Products) => item.amount > 0);
    console.log('filteredData======', filteredData);
    return filteredData;
  };

  const renderItem = (item: Products, index: number) => {
    return (
      <Card
        title={item.title}
        price={item.price.toString()}
        image={item.image}
        buttonTitle={item.amount == 0 ? '+' : `x${item.amount}`}
        buttonStyle={{
          backgroundColor: item.amount == 0 ? '#121F39' : '#72C729',
        }}
        onPress={() => handleAddItem(item.id)}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <MainHeader
        title={'Faroe Bar'}
        leftComponent={<Image source={Images.ICmenu} />}
      />
      <ToggleServices />
      <ScrollView>
        <Container>
          <FlatList
            data={listMenu}
            renderItem={({item, index}) => renderItem(item, index)}
            style={{marginTop: 16}}
          />
        </Container>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <NomalButton
          onPress={() =>
            navigation.navigate(AppRoute.BOOKINGCART, {
              productSelected: filterProduct(),
            })
          }
          title={'Choose your friend'}
          buttonStyle={{backgroundColor: Colors.Background.ButtonBackground}}
        />
      </View>
    </View>
  );
};
