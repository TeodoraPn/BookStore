import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import CustomButton2 from "../../components/CustomButton/CustomButton2.js";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import SelectDropdown from "react-native-select-dropdown";

const url = "http://localhost:8080";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigation = useNavigation();

  const onSignInPressed = () => {
    // console.warn("Sign in");
    // axios
    //   .post(`http://localhost:8080/signin`, { email, password })
    //   .then((res) => {
    //     console.log(JSON.stringify(res.data));
    //   })
    //   .catch((err) => {
    //     console.log(JSON.stringify(err));
    //   });
    fetch("http://localhost:8080/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    if (role === "Customer") {
      navigation.navigate("CustomerHomeScreen");
    } else navigation.navigate("SellerHomeScreen");
  };

  const onCreateAccount = () => {
    console.warn("Create account");
    navigation.navigate("SignUp");
  };

  const roles = ["Customer", "Seller"];

  return (
    <View style={styles.root}>
      <Image
        source={require("../../../assets/images/Cover.jpg")}
        style={styles.image}
      ></Image>

      <SelectDropdown
        buttonStyle={styles.dropdown}
        buttonTextStyle={styles.text}
        defaultButtonText="Select Role"
        data={roles}
        itemTextStyle={{ backgroundColor: "#222D31", textColor: "white" }}
        onSelect={(selectedItem, index) => {
          setRole(selectedItem);
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />

      <TextInput
        placeholder="Gmail or Username"
        style={styles.placeholder}
        onChangeText={setEmail}
        value={email}
        placeholderTextColor="#FFFF"
      />

      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.placeholder}
        placeholderTextColor="#FFFF"
      />

      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton2
        text1="Don’t have an account?  "
        text2=" Sign up now"
        onPress={onCreateAccount}
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
  dropdown: {
    backgroundColor: "#222D31",
    height: 50,
    borderColor: "#222D31",
    borderBottomColor: "white",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 10,
    width: 380,
    height: 60,
  },
  text: {
    color: "white",
    fontSize: 14,
    alignContent: "flex-end",
    paddingRight: 270,
  },
  placeholderStyle: {
    backgroundColor: "#222D31",
    searchPlaceHolderColor: "#222D31",
    dropdownOverlayColor: "#222D31",
    dropdownBackgroundColor: "#222D31",
    dropdownIconPosition: "left",
    fontSize: 6,
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
  },
});

export default SignInScreen;
