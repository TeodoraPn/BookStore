import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton1 = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BE2020',
    width: '37%',
    height: '55%',
    padding: 10,
    marginVertical: 45,
    marginTop: 0,
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 222,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
});

export default CustomButton1;

//TODO:
/*

Use props instead of brute style

*/
