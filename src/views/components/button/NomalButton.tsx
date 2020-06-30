import React from 'react';
import {View, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {Colors, Metrics} from '@share';
import {Button, Icon} from 'react-native-elements';

export interface ButtonProps {
  title: string;
  titleStyle?: TextStyle;
  icon?: string;
  iconType?: string;
  iconStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  style?: ViewStyle;
  onPress?: () => void;
}

export const NomalButton = (props: ButtonProps) => {
  const {
    title,
    titleStyle,
    icon,
    iconType,
    iconStyle,
    buttonStyle,
    onPress,
    style,
  } = props;

  return (
    <Button
      style={style}
      onPress={onPress}
      buttonStyle={[
        {
          width: 286,
          height: 50,
          borderRadius: 25,
          marginTop: Metrics.spacing.large,
        },
        buttonStyle,
      ]}
      title={title}
      titleStyle={[titleStyle, {fontSize: Metrics.FontSize.h6}]}
      icon={
        <Icon
          name={icon}
          type={iconType}
          color={Colors.White}
          iconStyle={iconStyle}
        />
      }
    />
  );
};
