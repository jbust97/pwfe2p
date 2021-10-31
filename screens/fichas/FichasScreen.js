import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Box, Center, HStack, Button, NativeBaseProvider, Text } from 'native-base';
import FooterMenu from '../../components/FooterMenu';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const FichasScreen = () => {
	const navigation = useNavigation();

	return (
        <>
			<View style={styles.container}>	
					<View>
						<Text style={{textAlign:'left'}}>Pantalla de Fichas</Text>
                        <Button
                            onPress={() => navigation.navigate('NuevaFichaScreen')}
                        >
                            <Text>Nueva Ficha</Text>
                        </Button>
					</View>
			</View>
        </>
	);
};

export default FichasScreen;

