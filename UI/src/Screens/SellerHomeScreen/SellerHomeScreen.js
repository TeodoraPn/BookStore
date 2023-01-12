import React, {useState, useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import CustomButton6 from '../../components/CustomButton/CustomButton6.js';
import {COLOURS, Items} from '../../components/database/Database.js';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const SellerHomeScreen = () => {

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let wishlistList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'wishlist') {
        wishlistList.push(Items[index]);
      }
    }

    setProducts(productList);
    setWishlist(wishlistList);
  };

  //create an product reusable card

  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={{
          width: '48%',
          marginVertical: 14,
        }}>
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          {data.isOff ? (
            <View
              style={{
                position: 'absolute',
                width: '20%',
                height: '24%',
                backgroundColor: COLOURS.green,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{
              width: '40%',
              height: '100%',
              resizeMode: 'stretch',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {data.productName}
        </Text>
        
        <Text>&#8377; {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  const navigation = useNavigation();

  const onLogOutPressed = () => {
    console.warn('LogOut');
    navigation.navigate('SignIn');
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
    
    <TouchableOpacity>
      <MaterialCommunityIcons
              name="view-headline"
              style={{
                fontSize: 35,
                color: '#B4C2C8',
                marginHorizontal: 15,
                backgroundColor: COLOURS.backgroundDark,
              }}
    /> 
    </TouchableOpacity>

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

      <TextInput
        placeholder="        Search orders"
        placeholderTextColor="#B4C2C8"
        style={styles.placeholder}
      /> 

      <TouchableOpacity>
      <MaterialCommunityIcons
              name="magnify"
              style={{
                fontSize: 35,
                color: '#B4C2C8',
                alignSelf: 'flex-end',
                marginTop: -47,
                marginEnd: 365,
                backgroundColor: '#303F45',
              }}
      />
      </TouchableOpacity>

      <ImageBackground source={require('/Users/teodorapinzariu/BookStore/Bookstore/UI/assets/images/books.png')} style={styles.image} resizeMode='repeat'>
      
      <View style={styles.header}>
        <MaterialCommunityIcons
              name="plus-circle-outline"
              style={{
                fontSize: 40,
                alignSelf: 'flex-end',
                color: '#222D31',
                padding: 0,
                marginHorizontal: 3,
                marginTop: 50,
              }}
        />

        <CustomButton6 
        text="Add Book" 
        onPress={onAddBookPressed}
        />
      </View>

      </ImageBackground>
      
      <SafeAreaView style={styles.container}>
        
      </SafeAreaView>
      <SafeAreaView style={styles.container2}>
        

      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="logout"
              onPress={onLogOutPressed}
              style={{
                fontSize: 20,
                color: COLOURS.backgroundDark,
                padding: 0,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          
        </View>
        
        <Text style={styles.textorder}>Orders</Text>
      
        <View
        style={{
        marginTop: 10,
        borderBottomColor: '#222D31',
        borderBottomWidth: 2,
        }}
        />

      </ScrollView>
    
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
  textorder: {
    textAlign: 'left',
    alignSelf: 'left',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginTop: 10,
    marginHorizontal: 10,
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



export default SellerHomeScreen;