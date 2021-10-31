import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FooterMenu from '../components/FooterMenu';
import { Box, Center, HStack, NativeBaseProvider, Text } from 'native-base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const TABS = {
	PACIENTES: 'PACIENTES',
	FICHAS: 'FICHAS',
	RESERVAS: 'RESERVAS',
}

const HomeScreen = () => {
	const navigation = useNavigation();

	const [activeTab, setActiveTab] = useState();

	return (
		<>
			<View style={styles.container}>	
					<View>
						<Text style={{textAlign:'left'}}>Hola probando</Text>
					</View>
				
			</View>
			<FooterMenu />
		</>
	);
};

export default HomeScreen;
