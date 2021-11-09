import React from 'react';
import { Button, View, Text, ScrollView } from 'native-base';
import { DateInput, SelectInput, TextInput } from '../../components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';

const FiltrosFichaScreen = ({
  route: {
    params: { filtros, updateFiltro },
  },
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        padding: 16,
      }}
    >
      <ScrollView keyboardDismissMode="on-drag" style={{ flex: 1 }}>
        <SelectInput title={'Fisioterapeuta'} />
        <SelectInput title={'Cliente'} />
        <DateInput title={'Fecha Desde'} />
        <DateInput title={'Fecha Hasta'} />
        <SelectInput title={'Categoria'} />
        <SelectInput title={'Tipo Producto'} />
      </ScrollView>
      <Button borderRadius={30} padding={4} onPress={() => navigation.goBack()}>
        <Text>Buscar</Text>
      </Button>
    </SafeAreaView>
  );
};

export default FiltrosFichaScreen;
