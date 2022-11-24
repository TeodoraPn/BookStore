import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IntroScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/IntroScreen/IntroScreen.js';
import SignInScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/SignUpScreen/SignUpScreen.js';
import CustomerHomeScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/CustomerHomeScreen/CustomerHomeScreen.js';
import SellerHomeScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/SellerHomeScreen/SellerHomeScreen.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="CustomerHomeScreen" component={CustomerHomeScreen} />
        <Stack.Screen name="SellerHomeScreen" component={SellerHomeScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
