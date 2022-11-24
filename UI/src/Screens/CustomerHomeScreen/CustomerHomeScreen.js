import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import CustomButton1 from '../../components/CustomButton/CustomButton1.js';

import axios from 'axios';
import {useNavigation} from '@react-navigation/native';


const CustomerHomeScreen = () => {

  const navigation = useNavigation();

  const onPromoPressed = () => {
    console.warn('Promo');
    navigation.navigate('PromoScreen');
  };

  const onMyProfilePressed = () => {
    console.warn('My Profile');
    navigation.navigate('MyProfileScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      
    

    <ImageBackground source={require('/Users/teodorapinzariu/BookStore/Bookstore/UI/assets/images/books.png')} style={styles.image} resizeMode='repeat'>
    
      <CustomButton1 
      text="Promo" 
      />

      <Text style={styles.text1}>Buy One</Text>
      <Text style={styles.text2}>Get One FREE</Text>

    </ImageBackground>
    
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
    <SafeAreaView style={styles.container2}>
      
    </SafeAreaView>
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222D31',
  },
  container2: {
    flex: 10,
    backgroundColor: '#CBB199',
  },
  image: {
    flex: 2,
    padding: 30,
    justifyContent: "center",
    alignSelf: 'center',
    width: 400, 
    height: 400,
    borderRadius: 30, 
    overflow: 'hidden',
    marginTop: 20,
  },
  text1: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 34,
    color: 'white',
    marginTop: -35,
    marginHorizontal: -10,
    backgroundColor: '#021D59',
  },
  text2: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 34,
    marginHorizontal: -10,
    color: 'white',
    backgroundColor: '#021D59'
  },
});



export default CustomerHomeScreen;