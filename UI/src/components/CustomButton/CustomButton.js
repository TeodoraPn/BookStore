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
    backgroundColor: '#FFFEFE',
    width: '90%',
    padding: 15,
    marginVertical: 15,
    marginTop: 40,
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CustomButton;

//TODO:
/*

Use props instead of brute style
Use flex

*/
