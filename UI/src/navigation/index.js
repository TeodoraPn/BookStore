import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroScreen from "../Screens/IntroScreen/IntroScreen.js";
import SignInScreen from "../Screens/SignInScreen/SignInScreen.js";
import SignUpScreen from "../Screens/SignUpScreen/SignUpScreen.js";
import CustomerHomeScreen from "../Screens/CustomerHomeScreen/CustomerHomeScreen.js";
import SellerHomeScreen from "../Screens/SellerHomeScreen/SellerHomeScreen.js";
import PromoScreen from "../Screens/PromoScreen/PromoScreen.js";
import MyCartScreen from "../Screens/MyCartScreen/MyCartScreen.js";
import AddBookScreen from "../Screens/AddBookScreen/AddBookScreen.js";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="CustomerHomeScreen"
          component={CustomerHomeScreen}
        />
        <Stack.Screen name="SellerHomeScreen" component={SellerHomeScreen} />
        <Stack.Screen name="PromoScreen" component={PromoScreen} />
        <Stack.Screen name="MyCartScreen" component={MyCartScreen} />
        <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
