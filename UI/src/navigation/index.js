import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IntroScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/IntroScreen/IntroScreen.js';
import SignInScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/SignUpScreen/SignUpScreen.js';
import CustomerHomeScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/CustomerHomeScreen/CustomerHomeScreen.js';
import SellerHomeScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/SellerHomeScreen/SellerHomeScreen.js';
import PromoScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/PromoScreen/PromoScreen.js'
import MyCartScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/MyCartScreen/MyCartScreen.js'
import AddBookScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/AddBookScreen/AddBookScreen.js'
import MyProfileScreen from '/Users/teodorapinzariu/BookStore/Bookstore/UI/src/Screens/MyProfileScreen/MyProfileScreen.js'

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
        <Stack.Screen name="PromoScreen" component={PromoScreen} />
        <Stack.Screen name="MyCartScreen" component={MyCartScreen} />
        <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
        <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
