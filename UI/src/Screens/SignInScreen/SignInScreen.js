import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet,  Image, ImageBackground } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import CustomButton2 from '../../components/CustomButton/CustomButton2.js';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const url = 'http://localhost:8080';

const SignInScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign in');
    navigation.navigate('CustomerHomeScreen');
    axios
      .post(`http://10.0.2.2:8080/signin`, {email, password})
      .then(res => console.log(JSON.stringify(res.data)))
      .catch(err => console.log('err: ' + err));
  };

  const onCreateAccount = () => {
    console.warn('Create account');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
    
    <Text>Back</Text>
    
    <Image source={require('/Users/teodorapinzariu/BookStore/Bookstore/UI/assets/images/Cover.jpg')} style={styles.image}></Image>
    
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

      <CustomButton 
      text="Sign In" 
      onPress={onSignInPressed} 
      />

      <CustomButton2 
      text1="Don’t have an account?  " 
      text2=" Sign up now" 
      onPress={onCreateAccount} 
      />

    </View>
  );

}

const styles = StyleSheet.create({
  root: { 
    flex: 1,
    alignItems: 'center', 
    padding: 2, 
    backgroundColor: '#222D31',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.3,
    width: 470, 
    height: 470,
  },
  placeholder: {
    alignItems: 'center', 
    padding: 2, 
    backgroundColor: '#222D31',
    marginTop: 0,
    color: 'white',
    borderBottomColor: 'white',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderTopWidth:0,
    placeholdertextcolor: 'white',
    width: 380,
    height: 60,
  },
  });

export default SignInScreen