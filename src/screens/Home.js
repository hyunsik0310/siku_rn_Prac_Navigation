import React from 'react';
import { Button, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  background-color: #ffffff;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

// android 화면에서 상태바에 텍스트가 나올경우 <StatusBar />를 추가해 상태바를 나누기
const Home = ({ navigation }) => {
  return (
    <Container>
      <StatusBar />
      <StyledText>Home</StyledText>
      <Button
        title='go to the list screen'
        onPress={() => {
          navigation.navigate('List');
        }}
      />
    </Container>
  );
};

export default Home;
