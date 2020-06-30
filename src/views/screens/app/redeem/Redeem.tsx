import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import {MainHeader} from '@components';
import {Colors, Metrics} from '@share';
import {Images} from '@assets';
import {
  styles,
  DateContainer,
  Bill,
  QrImage,
  Message,
  Cost,
  Line,
} from './styles';
import {Icon} from 'react-native-elements';

export const ReddemScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MainHeader
        title={'Redeem A Drink'}
        leftComponent={<Image source={Images.ICmenu} />}
      />
      <ImageBackground
        source={Images.Oval}
        style={styles.imageBackGround}
        resizeMode={'contain'}>
        <ScrollView>
          <QrImage>
            <Image source={Images.Qr} />
          </QrImage>
          <Line source={Images.Line} />
          <Bill>
            <Text style={{fontSize: 23}}>{'Budweiser Beer , Cocktail'}</Text>
            <Text style={styles.address}>{'Faroe Bar'}</Text>
            <Text style={styles.address}>
              {'New York 59, Hillburn, NY, USA'}
            </Text>
          </Bill>

          <DateContainer>
            <View>
              <Text style={styles.Title}>{'DATE'}</Text>
              <Text style={styles.Text}>{'02 Jul, 2018'}</Text>
            </View>
            <View>
              <Text style={styles.Title}>{'FROM'}</Text>
              <Text style={styles.Text}>{'Curtis Guzman'}</Text>
            </View>
          </DateContainer>

          <Cost>
            <View>
              <Text style={styles.Title}>{'AMOUNT'}</Text>
              <Text style={styles.Text}>{'03'}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'ios-checkmark-circle'}
                type={'ionicon'}
                style={{marginRight: Metrics.spacing.medium}}
                color={'#26D277'}
              />
              <View>
                <Text style={styles.Title}>{'PAID'}</Text>
                <Text style={styles.Text}>${'148'}</Text>
              </View>
            </View>
          </Cost>
          <View style={styles.messageContainer}>
            <Message>{'MESSAGE'}</Message>
            <Text style={{fontSize: Metrics.FontSize.large}}>
              {'Hello this is my gift for you Neque porro quisquam est qui '}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
