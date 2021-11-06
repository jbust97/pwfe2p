import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button, Text } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const PacientesScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={{ textAlign: 'left' }}>Pantalla de pacientes</Text>
          <Button onPress={() => navigation.navigate('NuevoPacienteScreen')}>
            <Text>Nuevo Paciente</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

export default PacientesScreen;
