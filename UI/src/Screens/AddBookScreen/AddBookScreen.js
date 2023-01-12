import React, {useState, useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import CustomButton4 from '../../components/CustomButton/CustomButton4.js';
import {COLOURS, Items} from '../../components/database/Database.js';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const AddBookScreen = () => {

  const navigation = useNavigation();

  const onBackPressed = () => {
    console.warn('Back');
    navigation.navigate('SellerHomeScreen');
  };

  const onMyProfilePressed = () => {
    console.warn('My Profile');
    navigation.navigate('MyProfileScreen');
  };

  const onAddBookPressed = () => {
    console.warn('Add Book');
    navigation.navigate('AddBookScreen');
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>

    <SafeAreaView style={styles.container}>
    
    <View style={styles.header}>
       
        <MaterialCommunityIcons
              name="chevron-left"
              onPress={onBackPressed}
              style={{
                fontSize: 40,
                color: '#D5E3E8',
                padding: 15,
                marginEnd: 280,
                borderRadius: 10,
              }}
        />

        <MaterialCommunityIcons
              name="plus-circle-outline"
              style={{
                fontSize: 40,
                alignSelf: 'flex-end',
                color: 'white',
                padding: 15,
                marginHorizontal: 10,
              }}
        />
    </View>

      <SafeAreaView style={styles.container2}>
        
      <TextInput
        placeholder="Book name"
        placeholderTextColor="black"
        style={styles.placeholder}
      /> 

      <TextInput
        placeholder="Book author"
        placeholderTextColor="black"
        style={styles.placeholder}
      /> 

      <TextInput
        placeholder="Book description"
        placeholderTextColor="black"
        style={styles.placeholder}
      /> 

      <TextInput
        placeholder="Book price"
        placeholderTextColor="black"
        style={styles.placeholder}
      /> 

      <TextInput
        placeholder="Book Off Percentage"
        placeholderTextColor="black"
        style={styles.placeholder}
      /> 

      <CustomButton4 
      text="Upload photo" 
      />

      </SafeAreaView>
     
    </SafeAreaView>
    
    </View> 
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222D31',
  },
  container2: {
    flex: 11,
    backgroundColor: '#CBB199',
  },
  placeholder: {
    alignItems: 'center', 
    fontWeight: 'bold',
    fontSize: 22,
    padding: 2, 
    backgroundColor: '#CBB199',
    marginTop: 0,
    color: 'black',
    borderBottomColor: 'black',
    marginHorizontal: 10,
    borderWidth: 1,
    borderBottomWidth: 3,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderTopWidth:0,
    width: 380,
    height: 60,
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
  header: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
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



export default AddBookScreen;