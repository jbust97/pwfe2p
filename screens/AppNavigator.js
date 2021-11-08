import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NuevaFichaScreen from './fichas/NuevaFichaScreen';
import NuevaReservaScreen from './reservas/NuevaReservaScreen';
import NuevoPacienteScreen from './pacientes/NuevoPacienteScreen';
import SelectScreen from './SelectScreen';
import FiltrosPacienteScreen from './pacientes/FIltrosPacienteScreen';

const AppStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator.Navigator initialRouteName="HomeScreen">
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
        />
        <AppStackNavigator.Screen
          name="FiltrosPacienteScreen"
          component={FiltrosPacienteScreen}
          options={{
            title: 'Nuevo paciente',
          }}
        />

        <AppStackNavigator.Screen
          name="SelectScreen"
          component={SelectScreen}
        />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
