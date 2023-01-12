import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import SignInScreen from "./src/Screens/SignInScreen/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen/SignUpScreen";
import CustomerHomeScreen from "./src/Screens/CustomerHomeScreen/CustomerHomeScreen";
import PromoScreen from "./src/Screens/PromoScreen/PromoScreen";

import Navigation from "./src/navigation";

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
    backgroundColor: "#222D31",
  },
});

export default App;
