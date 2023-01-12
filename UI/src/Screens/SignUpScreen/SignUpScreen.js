import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import CustomButton2 from "../../components/CustomButton/CustomButton2.js";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const url = "http://localhost:8080";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onSignUpPressed = () => {
    console.warn("Sign up");
    navigation.navigate("SignIn");
    axios
      .post(`http://10.0.2.2:8080/signup`, { email, password })
      .then((res) => {
        // if()
        console.log(JSON.stringify(res.data));
      })
      .catch((err) => console.log("err: " + err));
  };

  const onSignUpIntoAccount = () => {
    console.warn("Sign up into your account");
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Image
        source={require("../../../assets/images/Cover.jpg")}
        style={styles.image}
      ></Image>

      <TextInput
        placeholder="Role"
        onChangeText={setEmail}
        style={styles.placeholder}
        placeholderTextColor="#FFFF"
      />

      <TextInput
        placeholder="Username"
        onChangeText={setEmail}
        style={styles.placeholder}
        placeholderTextColor="#FFFF"
      />

      <TextInput
        placeholder="Gmail"
        onChangeText={setEmail}
        style={styles.placeholder}
        placeholderTextColor="#FFFF"
      />

      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.placeholder}
        placeholderTextColor="#FFFF"
      />

      <TextInput
        placeholder="Confirm Password"
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.placeholder}
        placeholderTextColor="#FFFF"
      />

      <CustomButton text="Sign Up" onPress={onSignUpPressed} />

      <CustomButton2
        text1="Back to  "
        text2="Sign in"
        onPress={onSignUpIntoAccount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 2,
    backgroundColor: "#222D31",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.3,
    width: 470,
    height: 470,
  },
  placeholder: {
    alignItems: "center",
    padding: 2,
    backgroundColor: "#222D31",
    marginTop: 0,
    color: "white",
    borderBottomColor: "white",
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    placeholdertextcolor: "white",
    width: 380,
    height: 60,
    opacity: 1,
  },
});

export default SignUpScreen;
