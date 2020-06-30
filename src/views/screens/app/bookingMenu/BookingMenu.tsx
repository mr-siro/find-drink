import React from 'react';
import {
  View,
  Image,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import {Colors, Metrics} from '@share';
import {Images} from '@assets';
import {styles, Container} from './styles';
import {MainHeader, ToggleServices, Card, NomalButton} from '@components';
import {listDrink} from '@services';

export interface Products {
  id:string;
  title: string;
  price: string;
  image: ImageSourcePropType;
}

export const BookingMenu = () => {
  const renderItem = (item: Products, index: number) => {
    return (
      <Card
        title={item.title}
        price={item.price}
        image={item.image}
        buttonTitle={'x2'}
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
      <Container>
        <FlatList
          data={listDrink}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </Container>
      <View
        style={styles.bottomContainer}>
        <NomalButton
          title={'Choose your friend'}
          buttonStyle={{backgroundColor: Colors.Background.ButtonBackground}}
        />
      </View>
    </View>
  );
};
