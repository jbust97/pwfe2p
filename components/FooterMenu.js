import React from 'react';
import { HStack, Center, Text } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { menus } from '../constants/menus';

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
    label: {
        color: '#fff',
        fontSize: 12,
    }

});

const FooterMenu = ({ changeTab }) => {

    return (
        <HStack style={styles.footer} bg="indigo.600" alignItems="center" safeAreaBottom shadow={6} >
            {
                menus.map(item => (
                    <TouchableOpacity onPress={() => changeTab(item.redirect)}>
                        <Center px={3}>
                            <Feather name={item.icon} size={22} color="white" />
                            <Text style={styles.label}>{item.title}</Text>
                        </Center>
                    </TouchableOpacity>
                ))
            }
            <TouchableOpacity>
                <Center px={3}>
                <Feather name="more-horizontal" size={22} color="white" />
                </Center>
            </TouchableOpacity>
        </HStack>
    );
}

export default FooterMenu;