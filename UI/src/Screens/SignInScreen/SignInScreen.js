import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
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
      <CustomInput placeholder="Gmail or Username" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomButton text="Don’t have an account? Sign up now" onPress={onCreateAccount} />
    </View>
  );

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center', 
    padding: 50, 
    backgroundColor: '#222D31',
  },
});

export default SignInScreen