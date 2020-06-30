import {StyleSheet, Dimensions} from 'react-native';
import {Colors,Metrics} from '@share';
import styled from 'styled-components';

const styles = StyleSheet.create({
  topContent:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').width / 2,
    flexGrow: 1,
  },
  centerContent:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:Dimensions.get('window').width /4,
    flexGrow: 3,
    flex:1,
  }
});

const Container = styled.View`
    flex: 1;
    paddingHorizontal: ${Metrics.spacing.extraLarge}px;
`;

const Title = styled.Text`
    color: ${Colors.White};
    fontSize: 35px;
`;

const Note = styled.Text`
    fontSize: ${Metrics.FontSize.h6}px;
    color: ${Colors.White}
    textAlign: center;
    padding: ${Metrics.spacing.giant}px;
    lineHeight: 24px;
    fontWeight: 500;
`;

const Bottom = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    flexGrow: 1;
`;

const Already = styled.Text`
    color: ${Colors.White};
    opacity: 0.45;
    fontSize: ${Metrics.FontSize.large}px;
`;

const SignInText = styled.Text`
textDecorationLine: underline;
color: ${Colors.White};
marginLeft: ${Metrics.spacing.medium}px;
fontSize: ${Metrics.FontSize.h6}px;
`;

export {styles, Container,Title, Note,Bottom,Already,SignInText};
