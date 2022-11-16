import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';
import GetStarted from '../../components/GetStarted/GetStarted.js';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';


const IntroScreen = () => {
  
  const navigation = useNavigation();

  const onGetStartedPressed = () => {
    console.warn('Getting Started');
    navigation.navigate('SignIn');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.text}>
          Books are a uniquely portable magic.
      </Text>

      <GetStarted text="Get Started" onPress={onGetStartedPressed} />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    padding: 0, 
    flex: 1,
    backgroundColor: '#222D31',
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 650,
    color: 'white',
  },
});



export default IntroScreen;