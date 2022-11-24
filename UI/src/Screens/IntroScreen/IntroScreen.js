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
      
      <Image source={require('/Users/teodorapinzariu/BookStore/Bookstore/UI/assets/images/Cover.jpg')} style={{ width: 470, height: 470 }} />

      <Text style={styles.text}>
          Books are a uniquely portable magic.
      </Text>

      <Text style={styles.text2}>
          The best place to buy and sell a book.
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
    marginTop: 130,
    color: 'white',
  },
  text2: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 25,
    color: 'white',
  },
});



export default IntroScreen;