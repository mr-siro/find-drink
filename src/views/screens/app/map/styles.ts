import {StyleSheet, Dimensions} from 'react-native';
import {Colors,Metrics} from '@share';
import styled from 'styled-components';

const styles = StyleSheet.create({
  bottomRight:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerItem:{
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 3
  }
});

const Container = styled.View`
  backgroundColor: ${Colors.Background.AppBackground};
  zIndex: 1;
  opacity: 0.58;
  flex: 1;
`;

const BorderBottom = styled.View`
  backgroundColor: ${Colors.White};
  opacity: 0.45;
  height: 6px;
  width: 88%;
  alignSelf: center;
  borderBottomLeftRadius: 5px;
  borderBottomRightRadius: 5px;
`;

const Bottom = styled.View`
  backgroundColor: ${Colors.White};
  padding: ${Metrics.spacing.medium}px;
  borderTopRightRadius: 5px;
  borderBottomRightRadius: 5px;
  width: 60%;
`;
export {styles, Container,BorderBottom,Bottom};
