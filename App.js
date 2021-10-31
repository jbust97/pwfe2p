import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import AppNavigator from './screens/AppNavigator';

const StackNavigation = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      {/* {<NavigationContainer>
        <StackNavigation.Navigator initialRouteName="homeScreen">
          <StackNavigation.Screen name="homeScreen" component={HomeScreen} />
        </StackNavigation.Navigator>
      </NavigationContainer>} */}
      <AppNavigator />
    </NativeBaseProvider>
  );
}
