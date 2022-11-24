import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton2 = ({onPress, text1, text2}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{text1}
      <Text style={{color: '#4285EA'}}>
      {text2}
      </Text>
    </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222D31',
    width: '100%',
    padding: 25,
    marginVertical: 5,
    marginTop: 0,
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});

export default CustomButton2;

//TODO:
/*

Use props instead of brute style

*/
