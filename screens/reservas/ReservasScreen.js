import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Text, Icon } from 'native-base';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import ReservaAPI from '../../api/reservas';

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

const ReservasScreen = () => {
	const navigation = useNavigation();
	const [tableData, setTableData] = useState([]);
	const [loading, setLoading] = useState(false);

	  useEffect(() => {
		  (async () => {
				setLoading(true);
			let reservas = await ReservaAPI.getReservas();

			let newTableData = reservas.map(reserva => ({
				fecha: reserva.fecha,
				horaInicio: reserva.horaInicio,
				horaFin: reserva.horaFin,
				empleado: reserva.idEmpleado,
				cliente: reserva.idCliente,
			}));

			setTableData(newTableData);
			setLoading(false);
		  })();
	  }, []);

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
						Reservas
					</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate('NuevaReservaScreen')}
						style={{ paddingLeft: 10, paddingVertical: 10 }}
					>
						<Icon as={Ionicons} name="add" />
					</TouchableOpacity>
				</View>

				<ScrollView>
					{tableData.map((e) => (
						<ListItem item={e} />
					))}
				</ScrollView>
			</View>
        </>
	);
};

const ListItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);
    return (
        <View
            style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'lightgrey',
				marginBottom: 10,
            }}
        >
            <TouchableOpacity
                onPress={toggle}
                style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}
            >
                <Text style={[styles.itemTitle, { flex: 1 }]}>{ item.cliente.nombre }</Text>
                <Icon
                    as={Entypo}
                    size={5}
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                />
            </TouchableOpacity>
            {isOpen && (
                <View style={{ paddingHorizontal: 16 }}>
					<View style={{ flex: 1, paddingVertical: 4 }}>
                        <Text style={styles.itemTitle}>Fecha</Text>
                        <Text style={styles.itemText}>{item.fecha}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.itemTitle}>Hora inicio</Text>
                            <Text style={styles.itemText}>{item.horaInicio}</Text>
                        </View>
                        <View
                            style={{ flex: 1, flexDirection: 'column', paddingVertical: 4 }}
                        >
                            <Text style={styles.itemTitle}>Hora Fin</Text>
                            <Text style={styles.itemText}>{item.horaFin}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingVertical: 4 }}>
                        <Text style={styles.itemTitle}>Empleado</Text>
                        <Text style={styles.itemText}>{ item.empleado.nombre }</Text>
                    </View>
                
                </View>
            )}
        </View>
    );
};

export default ReservasScreen;
