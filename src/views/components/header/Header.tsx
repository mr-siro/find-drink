import React from 'react';
import {View, ViewStyle} from 'react-native';
import {Header} from 'react-native-elements';
import {Colors} from '@share';

export interface HeaderProps {
  title: string;
  leftComponent?: React.ReactElement;
  containerStyle?: ViewStyle;
}
export const MainHeader = (props: HeaderProps) => {
  const {leftComponent, title, containerStyle} = props;

  return (
    <View
      style={[
        {
          height: 128,
          backgroundColor: Colors.Background.AppBackground,
        },
        containerStyle,
      ]}>
      <Header
        leftComponent={leftComponent}
        centerComponent={{
          text: title,
          style: {fontSize: 22, color: Colors.White, fontWeight: '500'},
        }}
        containerStyle={{
          backgroundColor: Colors.Background.AppBackground,
          borderBottomWidth: 0,
        }}
      />
    </View>
  );
};
