import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Metrics} from '@share';
import {Icon} from 'react-native-elements';

export interface HeaderCardProps {
  userName: string;

  onPress?: () => void;
  children?: React.ReactNode;
}

export const HeaderCard = (props: HeaderCardProps) => {
  const {userName, onPress, children} = props;

  return (
    <View style={styles.containerStyle}>
      <View style={styles.row}>
        <Text style={{fontSize: Metrics.FontSize.h6, color: '#676767'}}>
          {'To:'}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.userText}>{userName}</Text>
          <Icon
            name={'ios-add-circle-outline'}
            type={'ionicon'}
            color={'#FF3901'}
            onPress={onPress}
          />
        </View>
      </View>
      <Text style={{fontSize: Metrics.FontSize.h6, color: '#676767'}}>
        {'Your Message:'}
      </Text>

      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    backgroundColor: Colors.White,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: Metrics.spacing.large,
    paddingVertical: Metrics.spacing.huge,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Metrics.spacing.huge,
  },
  userText: {
    marginRight: Metrics.spacing.medium,
    fontSize: Metrics.FontSize.h6,
  },
});
