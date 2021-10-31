import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FooterMenu from '../components/FooterMenu';
import { Box, Center, HStack, NativeBaseProvider, Text } from 'native-base';
import PacientesScreen from './pacientes/PacientesScreen';
import ReservasScreen from './reservas/ReservasScreen';
import FichasScreen from './fichas/FichasScreen';
import { TABS } from '../constants/tabs';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const HomeScreen = () => {
	const navigation = useNavigation();

	const [activeTab, setActiveTab] = useState(TABS.PACIENTES);


	return (
		<>
			{
				activeTab === TABS.PACIENTES &&
				<PacientesScreen />
			}

			{
				activeTab === TABS.RESERVAS &&
				<ReservasScreen />
			}

			{
				activeTab === TABS.FICHAS &&
				<FichasScreen />
			}
			<FooterMenu changeTab={setActiveTab} />
		</>
	);
};

export default HomeScreen;
