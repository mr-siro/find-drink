import {StyleSheet, Dimensions} from 'react-native';
import {Colors,Metrics} from '@share';
import styled from 'styled-components';

const styles = StyleSheet.create({
bottomContainer:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
   paddingVertical:Metrics.spacing.extraLarge
  }
});

const Container = styled.View`
    marginHorizontal: ${Metrics.spacing.medium}px;
`;
export {styles,Container};