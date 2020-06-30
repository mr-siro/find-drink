import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Metrics} from '@share';
import styled from 'styled-components';

const styles = StyleSheet.create({
  container: {
    marginVertical: Metrics.spacing.large,
    marginHorizontal: Metrics.spacing.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  address: {fontSize: Metrics.FontSize.large, color: '#848484', lineHeight: 24},

  Text:{fontSize: Metrics.FontSize.large, lineHeight: 24},

  Title:{
    fontSize: Metrics.FontSize.medium,
    color: '#848484',
    lineHeight: 24,
  },

  imageBackGround:{
    width: '100%',
    height: '100%',
    flex: 1,
    marginVertical: Metrics.spacing.medium,
  },

  messageContainer:{paddingHorizontal: Metrics.spacing.extraHuge}
});

const DateContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    paddingHorizontal: ${Metrics.spacing.extraHuge}px;
`;

const Bill = styled.View`
    alignItems: center;
    paddingVertical: 10%;
`;

const QrImage = styled.View`
    justifyContent: center;
    alignItems: center;
    paddingVertical: 12%;
`;

const Message = styled.Text`
fontSize: ${Metrics.FontSize.medium}px;
color: #848484;
marginBottom: ${Metrics.spacing.medium}px;
`;

const Cost = styled.View`
flexDirection: row;
justifyContent: space-between;
paddingHorizontal: ${Metrics.spacing.extraHuge}px;
paddingVertical: 10%;
`;

const Line = styled.Image`
    alignSelf: center;
    width: 85%;
`;
export {styles,DateContainer,Bill,QrImage, Message, Cost,Line};
