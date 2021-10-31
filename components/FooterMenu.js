import React from 'react';
import { HStack, Center, Text, Icon } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TABS } from '../constants/tabs';

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

const FooterMenu = ({ changeTab }) => {
    return (
        <HStack style={styles.footer} bg="indigo.600" alignItems="center" safeAreaBottom shadow={6} >
            <TouchableOpacity onPress={() => changeTab(TABS.PACIENTES)}>
                <Center px={3}>
                    <Feather name="users" size={22} color="white" />
                    <Text style={{color: '#fff', fontSize: 12}}>Pacientes</Text>
                </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeTab(TABS.FICHAS)}>
                <Center px={3}>
                    <Feather name="file" size={22} color="white" />
                    <Text style={{color: '#fff', fontSize: 12}}>Fichas</Text>
                </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeTab(TABS.RESERVAS)}>
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