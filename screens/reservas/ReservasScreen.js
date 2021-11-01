import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Text, Button } from 'native-base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const ReservasScreen = () => {
	const navigation = useNavigation();

	return (
        <>
			<View style={styles.container}>	
					<View>
						<Text style={{textAlign:'left'}}>Pantalla de reservas</Text>
                        <Button
                            onPress={() => navigation.navigate('NuevaReservaScreen')}
                        >
                            <Text>Nueva Reserva</Text>
                        </Button>
					</View>
			</View>
        </>
	);
};

export default ReservasScreen;
