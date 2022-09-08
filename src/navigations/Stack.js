import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    //initialRouteName로 초기화면을 제어
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name='List' component={List}></Stack.Screen>
      <Stack.Screen name='Item' component={Item}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigation;
