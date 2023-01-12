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
    backgroundColor: '#D36324',
    width: '40%',
    padding: 20,
    marginTop: 35 ,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: '20',
    color: '#D5E3E8',
  },
});

export default CustomButton;

//TODO:
/*

Use props instead of brute style
Use flex

*/
