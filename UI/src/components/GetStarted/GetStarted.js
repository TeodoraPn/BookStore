import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const GetStarted = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222D31',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default GetStarted;
