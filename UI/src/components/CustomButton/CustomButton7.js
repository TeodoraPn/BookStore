import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303F45',
    width: '30%',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginVertical: -10,
    marginHorizontal: 2,
    marginBottom: 0,
  },
  text: {
    fontWeight: 'bold',
    color: '#D5E3E8',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CustomButton;

//TODO:
/*

Use props instead of brute style
Use flex

*/
