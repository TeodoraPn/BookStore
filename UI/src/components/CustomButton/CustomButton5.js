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
    backgroundColor: '#FFDFBF',
    width: '25%',
    padding: 13,
    marginHorizontal: 8,
    marginVertical: 0,
    marginTop: 10,
    alignItems: 'left',
    borderRadius: 15,
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
