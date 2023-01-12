import React, {useState, useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import CustomButton1 from '../../components/CustomButton/CustomButton1.js';
import {COLOURS, Items} from '../../components/database/Database.js';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const MyProfileScreen = () => {

  const navigation = useNavigation();

  const onBackPressed = () => {
    console.warn('Back');
    navigation.navigate('CustomerHomeScreen');
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>

    <SafeAreaView style={styles.container}>
    
    
    <TouchableOpacity>
    <MaterialCommunityIcons
              name="account-circle-outline"
              style={{
                fontSize: 35,
                color: '#B4C2C8',
                alignSelf: 'flex-end',
                marginTop: -35,
                marginEnd: 15,
                backgroundColor: COLOURS.backgroundDark,
              }}
      />
      </TouchableOpacity>
      <View style={styles.header}>
    
    <MaterialCommunityIcons
          name="chevron-left"
          onPress={onBackPressed}
          style={{
            fontSize: 40,
            color: '#D5E3E8',
            padding: 8,
            borderRadius: 10,
          }}
        />

    <Text style={styles.textpromo}></Text>
</View>

      <SafeAreaView style={styles.container}>
        
      </SafeAreaView>

      <SafeAreaView style={styles.container2}>
        
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
  },
  text1: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginTop: -35,
    marginHorizontal: -10,
    backgroundColor: '#021D59',
  },
  text2: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: -10,
    color: 'white',
    backgroundColor: '#021D59'
  },
  placeholder: {
    alignItems: 'center', 
    fontWeight: 'bold',
    fontSize: 22,
    padding: 20, 
    backgroundColor: '#303F45',
    marginTop: 15,
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#303F45',
    width: 399,
    height: 60,
    color: '#B4C2C8',
  },
});



export default MyProfileScreen;