import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import {MainHeader} from '@components';
import {Colors, Metrics} from '@share';
import {Images} from '@assets';
import {styles, DateContainer, Bill, Message, Cost, Footer} from './styles';
import {Icon} from 'react-native-elements';
import {ReddemProps} from '@navigator';
import moment from 'moment';

export const ReddemScreen: React.FC<ReddemProps> = (props) => {
  const {route} = props;
  const {message, totalPrice, totalAmout} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: Colors.WhiteAcient}}>
      <MainHeader
        title={'Redeem A Drink'}
        leftComponent={<Image source={Images.ICmenu} />}
      />
      <View style={styles.container}>
        <View style={styles.topContent}>
          <View style={styles.topImage}>
            <Image source={Images.Qr} />
          </View>
        </View>
        <View style={styles.centerView}>
          <View style={styles.dotted} />
          <View style={styles.borderLeft} />
          <View style={styles.borderRight} />
        </View>
        <View style={styles.bottomContent}>
          <Footer>
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
                <Text style={styles.Text}>
                  {moment(new Date()).format('DD MMM,YYYY')}
                </Text>
              </View>
              <View>
                <Text style={styles.Title}>{'FROM'}</Text>
                <Text style={styles.Text}>{'Curtis Guzman'}</Text>
              </View>
            </DateContainer>

            <Cost>
              <View>
                <Text style={styles.Title}>{'AMOUNT'}</Text>
                <Text style={styles.Text}>
                  {totalAmout < 10 ? `0${totalAmout}` : totalAmout}
                </Text>
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
                  <Text style={styles.Text}>${totalPrice}</Text>
                </View>
              </View>
            </Cost>
            <View style={styles.messageContainer}>
              <Message>{'MESSAGE'}</Message>
              <Text style={[styles.Text, {textAlign: 'left'}]}>{message}</Text>
            </View>
          </Footer>
        </View>
      </View>
    </View>
  );
};
