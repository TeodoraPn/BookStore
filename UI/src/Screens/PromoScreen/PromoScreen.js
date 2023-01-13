import React, {useState, useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import CustomButton3 from '../../components/CustomButton/CustomButton3.js';
import {COLOURS, Items} from '../../components/database/Database.js';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';
import {useNavigation} from '@react-navigation/native';


const CustomerHomeScreen = () => {

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [promo, setpromo] = useState([]);

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
    let promoList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'wishlist') {
        wishlistList.push(Items[index]);
      } else if (Items[index].category == 'promo') {
        promoList.push(Items[index]);
      }
    }

    setProducts(productList);
    setWishlist(wishlistList);
    setpromo(promoList);
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

      <Text style={styles.textpromo}>Promotions of the week</Text>
      </View>

      <SafeAreaView style={styles.container2}>
      <Text style={styles.text}></Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}></Text>
      
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View
          style={{
            padding: 10,
          }}>
          

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>


        </View>

        <View
          style={{
            padding: 10,
          }}>
          

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {wishlist.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>


        </View>
        

        <View
          style={{
            padding: 10,
          }}>
          

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {promo.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>


        </View>

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
  header: {
    flexDirection: 'row',
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
  textpromo: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#D5E3E8',
    marginHorizontal: 30,
    padding: 0,
    backgroundColor: '#222D31',
  },
});



export default CustomerHomeScreen;