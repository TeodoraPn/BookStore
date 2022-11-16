import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import SignInScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/SignUpScreen/SignUpScreen.js';
import CustomerHomeScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/CustomerHomeScreen/CustomerHomeScreen.js';
import Navigation from './src/navigation';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222D31',
  },
});



export default App;