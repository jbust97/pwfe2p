import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NuevaFichaScreen from './fichas/NuevaFichaScreen';

const AppStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppStackNavigator.Navigator
                initialRouteName="HomeScreen"
            >
                <AppStackNavigator.Screen 
                    name="HomeScreen" 
                    component={HomeScreen} 
                    options={{ 
                        headerShown: false, 
                    }} 
                />
                <AppStackNavigator.Screen 
                    name="NuevaFichaScreen" 
                    component={NuevaFichaScreen} 
                    options={{ 
                        title: 'Nueva ficha',
                    }}    
                />
            </AppStackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
