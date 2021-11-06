import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput as Input,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 8,
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  itemText: { fontSize: 16 },
  itemTitle: {
    fontWeight: 'bold',
    color: 'grey',
  },
});
export const TextInput = ({ title, value, setValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Input style={{ fontSize: 20, height: 40 }} onChangeText={setValue} />
    </View>
  );
};

export const SelectInput = ({ title, value, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={{ fontSize: 20, height: 40 }}>{value}</Text>
    </TouchableOpacity>
  );
};
