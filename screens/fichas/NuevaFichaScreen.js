import { useNavigation } from '@react-navigation/core';
import { Button } from 'native-base';
import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { useState, useEffect } from 'react/cjs/react.development';
import { TextInput, SelectInput } from '../../components/Input';
import { getAll as getClientes } from '../../api/pacientes';
import { TIPO_PERSONA } from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  itemText: { fontSize: 16 },
  itemTitle: {
    fontWeight: 'bold',
  },
});
const NuevaFichaScreen = () => {
  const navigation = useNavigation();
  const [ficha, setFicha] = useState({});

  const updateField = (field, value) =>
    setFicha((prev) => ({ ...prev, [field]: value }));
  useEffect(() => {}, [ficha]);
  const canSave = ficha.diagnostico && ficha.motivoConsulta;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        keyboardDismissMode="on-drag"
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: 'white',
        }}
      >
        <SelectInput
          title={'Cliente*'}
          onPress={() =>
            navigation.navigate('SelectScreen', {
              fetchOptions: async () => {
                const options = await getClientes();
                return options.map((persona) => ({
                  id: persona.idPersona,
                  label: persona.nombreCompleto,
                  subLabel:
                    persona.tipoPersona === TIPO_PERSONA.FISICA
                      ? `CI: ${persona.cedula}`
                      : `RUC: ${persona.ruc}`,
                }));
              },
            })
          }
        />
        <TextInput
          title={'Motivo de Consulta*'}
          value={ficha.motivoConsulta || ''}
          setValue={(value) => updateField('motivoConsulta', value)}
        />
        <TextInput
          title={'Diagnostico*'}
          value={ficha.diagnostico || ''}
          setValue={(value) => updateField('diagnostico', value)}
        />
        <TextInput
          title={'Observacion'}
          value={ficha.observacion || ''}
          setValue={(value) => updateField('observacion', value)}
        />
      </ScrollView>
      <View style={{ margin: 16 }}>
        <Button
          disabled={!canSave}
          borderRadius={30}
          padding={4}
          onPress={() => console.log(ficha)}
        >
          <Text style={{ fontWeight: 'bold' }}>Guardar</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default NuevaFichaScreen;
