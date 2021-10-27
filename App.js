import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';

const StackNavigation = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator initialRouteName="homeScreen">
        <StackNavigation.Screen name="homeScreen" component={HomeScreen} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}
