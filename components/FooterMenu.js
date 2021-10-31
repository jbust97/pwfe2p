import React from 'react';
import { HStack, Center, Text, Icon } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

const FooterMenu = ({ navigation }) => {
    return (
        <HStack style={styles.footer} bg="indigo.600" alignItems="center" safeAreaBottom shadow={6} >
            <TouchableOpacity onPress={() => navigation.navigate("Pacientes")}>
                <Center px={3}>
                    <Feather name="users" size={22} color="white" />
                    <Text style={{color: '#fff', fontSize: 12}}>Pacientes</Text>
                </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Fichas")}>
                <Center px={3}>
                    <Feather name="file" size={22} color="white" />
                    <Text style={{color: '#fff', fontSize: 12}}>Fichas</Text>
                </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Reservas")}>
                <Center px={3}>
                    <Feather name="calendar" size={22} color="white" />
                    <Text style={{color: '#fff', fontSize: 12}}>Reservas</Text>
                </Center>
            </TouchableOpacity>
            <TouchableOpacity>
                <Center px={3}>
                <Feather name="more-horizontal" size={22} color="white" />
                </Center>
            </TouchableOpacity>
        </HStack>
    );
}

export default FooterMenu;