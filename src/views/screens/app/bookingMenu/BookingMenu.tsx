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

import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack/types';
import {AppRoute} from '@navigator';

export interface MenuProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export interface Products {
  id: string;
  title: string;
  price: string;
  image: ImageSourcePropType;
  count: number;
}

export const BookingMenu: React.FunctionComponent = (props: MenuProps) => {
  const {navigation} = props;
  const [listMenu, setListMenu] = useState(listDrink);
  const [count, setCount] = useState(0);

  const handleAddItem = (id: string) => {
    const filteredData = listMenu.find((item: Products) => item.id == id);
    if (filteredData) {
      setCount((filteredData.count = filteredData.count + 1));
    }
    // console.log(filteredData);
  };

  const renderItem = (item: Products, index: number) => {
    return (
      <Card
        title={item.title}
        price={item.price}
        image={item.image}
        buttonTitle={item.count}
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
          onPress={() => navigation.navigate(AppRoute.BOOKINGCART)}
          title={'Choose your friend'}
          buttonStyle={{backgroundColor: Colors.Background.ButtonBackground}}
        />
      </View>
    </View>
  );
};
