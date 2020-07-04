import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Metrics} from '@share';
import styled from 'styled-components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },

  address: {fontSize: Metrics.FontSize.large, color: Colors.title.titleGray, lineHeight: 24},

  Text:{fontSize: Metrics.FontSize.large, lineHeight: 24, textAlign:'center'},

  Title:{
    fontSize: Metrics.FontSize.medium,
    color: Colors.title.titleGray,
    lineHeight: 24,
    textAlign:'center'
  },

  imageBackGround:{
    width: '100%',
    height: '100%',
    flex: 1,
    marginVertical: Metrics.spacing.medium,
  },

  messageContainer:{
    paddingHorizontal: Metrics.spacing.extraHuge,
    paddingBottom:Metrics.spacing.huge
  },

  topImage:{
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
    marginTop:Metrics.spacing.large
  },

  topContent: {
    height: 250,
    width: '100%',
    backgroundColor: Colors.WhitePrimary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  bottomContent:{
    flex: 1,
    backgroundColor: Colors.WhitePrimary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  dotted:{
    width: '100%',
    height: 1,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    borderColor:Colors.Gray,
  },

  borderLeft:{
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.WhiteAcient,
    position: 'absolute',
    left: -25,
  },

  borderRight:{
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.WhiteAcient,
    position: 'absolute',
    right: -25,
  },

  centerView:{
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WhitePrimary,
  }
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

const Footer = styled.View`

`;

export {styles,DateContainer,Bill, Message, Cost,Footer};
