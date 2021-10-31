import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Box, Center, HStack, NativeBaseProvider, Text } from 'native-base';
import FooterMenu from '../../components/FooterMenu';

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
					</View>
			</View>
        </>
	);
};

export default ReservasScreen;