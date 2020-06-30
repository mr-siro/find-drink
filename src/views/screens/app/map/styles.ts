import {StyleSheet} from 'react-native';
import {Colors,Metrics} from '@share';
import styled from 'styled-components';

const styles = StyleSheet.create({
  centerItem:{
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 3
  },
});

const Container = styled.View`
  backgroundColor: ${Colors.Background.AppBackground};
  zIndex: 1;
  opacity: 0.58;
  flex: 1;
`;

export {styles, Container};
