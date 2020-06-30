import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Metrics} from '@share';
import {Images} from '@assets';

export const ToggleServices = () => {
  const [map, setMap] = useState(true);

  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={{
          width: map ? '55%' : '45%',
          backgroundColor: map
            ? Colors.Background.ButtonBackground
            : Colors.White,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          flexDirection: 'row',
        }}
        onPress={() => setMap(true)}>
        <Image
          source={Images.ICmap}
          style={{tintColor: map ? Colors.White : '#737373'}}
        />
        <Text
          style={{
            color: map ? Colors.White : '#737373',
            fontSize: Metrics.FontSize.h6,
            marginLeft: Metrics.spacing.small,
          }}>
          Map
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: map ? '45%' : '55%',
          backgroundColor: map
            ? Colors.White
            : Colors.Background.ButtonBackground,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          flexDirection: 'row',
        }}
        onPress={() => setMap(false)}>
        <Image
          source={Images.ICglass}
          style={{tintColor: map ? '#737373' : Colors.White}}
        />
        <Text
          style={{
            color: map ? '#737373' : Colors.White,
            fontSize: Metrics.FontSize.h6,
            marginLeft: Metrics.spacing.small,
          }}>
          Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 225,
    height: 41,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    bottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
  },
});
