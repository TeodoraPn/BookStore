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
    width: '45%',
    padding: 15,
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 8,
    marginVertical: -10,
    marginHorizontal: 2,
  },
  text: {
    fontWeight: 'bold',
    color: '#D5E3E8',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default CustomButton;

//TODO:
/*

Use props instead of brute style
Use flex

*/
