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
    backgroundColor: '#222D31',
    width: '90%',
    padding: 20,
    marginVertical: -10,
    marginTop: 0,
    alignItems: 'left',
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    color: '#D5E3E8',
  },
});

export default CustomButton;

//TODO:
/*

Use props instead of brute style
Use flex

*/
