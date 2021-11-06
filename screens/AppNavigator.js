import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NuevaFichaScreen from './fichas/NuevaFichaScreen';
import NuevaReservaScreen from './reservas/NuevaReservaScreen';
import NuevoPacienteScreen from './pacientes/NuevoPacienteScreen';
import { LoginContext } from '../providers/LoginContext';
import LoginScreen from './LoginScreen';

const AppStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
    const {state} = useContext(LoginContext);
    return (
        <NavigationContainer>
            <AppStackNavigator.Navigator>

                {!state.loggedIn && <AppStackNavigator.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />}
                {state.loggedIn && <><AppStackNavigator.Screen
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
                <AppStackNavigator.Screen
                    name="NuevaReservaScreen"
                    component={NuevaReservaScreen}
                    options={{
                        title: 'Nueva reserva',
                    }}
                />
                <AppStackNavigator.Screen
                    name="NuevoPacienteScreen"
                    component={NuevoPacienteScreen}
                    options={{
                        title: 'Nuevo paciente',
                    }}
                /></>}
            </AppStackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
