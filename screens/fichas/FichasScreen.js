import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button, Text, Spinner, Icon, List } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import { get as getFichas } from '../../api/fichas';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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

const FichasScreen = () => {
  const navigation = useNavigation();
  const [isFetching, setIsFetching] = useState(true);
  const [tableData, setTableData] = useState([
    {
      motivoConsulta: 'dolor en la rodilla',
      diagnostico: 'lesion leve',
      observacion: 'nada grave',
      idEmpleado: { idPersona: 1 },
      idCliente: { idPersona: 1 },
      idTipoProducto: { idTipoProducto: 3 },
    },
  ]);

  //useEffect(() => {
  //getFichas().then((data) => {
  //console.log(data)
  //setTableData(data);
  /*setIsFetching(false);
    });
  }, []);*/
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            marginTop: 22,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Fichas Clinicas
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('NuevaFichaScreen')}
            style={{ paddingLeft: 10, paddingVertical: 10 }}
          >
            <Icon as={Ionicons} name="add" />
          </TouchableOpacity>
        </View>

        <ScrollView>
          {!isFetching && <Spinner style={{ marginVertical: 32 }} />}
          {tableData.map((e) => (
            <ListItem item={e} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default FichasScreen;

const ListItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgrey',
      }}
    >
      <TouchableOpacity
        onPress={toggle}
        style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}
      >
        <Text style={[styles.itemTitle, { flex: 1 }]}>Nombre Paciente</Text>
        <Icon
          as={Entypo}
          size={5}
          name={isOpen ? 'chevron-up' : 'chevron-down'}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.itemTitle}>Empleado</Text>
              <Text style={styles.itemText}>{item.idCliente.idPersona}</Text>
            </View>
            <View
              style={{ flex: 1, flexDirection: 'column', paddingVertical: 4 }}
            >
              <Text style={styles.itemTitle}>Tipo Producto</Text>
              <Text style={styles.itemText}>{item.idCliente.idPersona}</Text>
            </View>
          </View>
          <View style={{ flex: 1, paddingVertical: 4 }}>
            <Text style={styles.itemTitle}>Motivo de Consulta</Text>
            <Text style={styles.itemText}>Empleado</Text>
          </View>
          <View style={{ flex: 1, paddingVertical: 4 }}>
            <Text style={styles.itemTitle}>Diagnostico</Text>
            <Text style={styles.itemText}>Empleado</Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 4,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.itemTitle}>Observaciones</Text>
              <Text style={styles.itemText}>Empleado</Text>
            </View>
            <TouchableOpacity>
              <Icon as={MaterialCommunityIcons} size={6} name="pencil" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
