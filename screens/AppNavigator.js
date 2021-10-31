import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PacientesScreen from './pacientes/PacientesScreen';
import FichasScreen from './fichas/FichasScreen';
import ReservasScreen from './reservas/ReservasScreen';
import FooterMenu from '../components/FooterMenu';

const AppStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppStackNavigator.Navigator
                initialRouteName="Pacientes"
            >
                <AppStackNavigator.Screen name="Pacientes" component={PacientesScreen} />
                <AppStackNavigator.Screen name="Reservas" component={ReservasScreen} />
                <AppStackNavigator.Screen name="Fichas" component={FichasScreen} />
            </AppStackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
