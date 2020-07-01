import React from 'react';
import {View, ImageBackground} from 'react-native';
import {
  styles,
  Container,
  Title,
  Note,
  Bottom,
  Already,
  SignInText,
} from './styles';
import {Images} from '@assets';
import {Colors, Metrics} from '@share';
import {NomalButton} from '@components';

import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack/types';
import { AppRoute } from '@navigator';

export interface SignInProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export const SignInScreen: React.FunctionComponent = (props: SignInProps) => {
  const {navigation} = props;

  return (
    <View style={{backgroundColor:Colors.Background.AppBackground,flex:1}}>
    <ImageBackground
      source={Images.ImgBackground}
      style={{width: '100%', height: '100%'}}
      resizeMode={'stretch'}>
      <Container>
        <View style={styles.topContent}>
          <Title>{'WELCOME'}</Title>
          <Note>
            {
              'The Venue Sign Up needs to validate their location by social media profiles'
            }
          </Note>
        </View>
        <View style={styles.centerContent}>
          <NomalButton
            title={'Sign up with Facebook'}
            buttonStyle={{backgroundColor:Colors.Background.FBBackgroundBtn}}
            icon={'logo-facebook'}
            iconType={'ionicon'}
            iconStyle={{marginRight:Metrics.spacing.medium}}
            onPress={() => navigation.navigate(AppRoute.APP)}
          />
          <NomalButton
          title={'Sign up with Untappd'}
          buttonStyle={{backgroundColor:Colors.Background.UntabBackgroundBtn}}
          icon={'ios-beer'}
          iconType={'ionicon'}
          iconStyle={{marginRight:Metrics.spacing.medium}}
          onPress={() => navigation.navigate(AppRoute.APP)}
          />
        </View>
        <Bottom>
          <Already>{'Already have an account?'}</Already>
          <SignInText>{'Sign in'}</SignInText>
        </Bottom>
      </Container>
    </ImageBackground>
    </View>
  );
};
