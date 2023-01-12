import React, {useState, useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import CustomButton5 from '../../components/CustomButton/CustomButton5.js';
import CustomButton4 from '../../components/CustomButton/CustomButton4.js';
import {COLOURS, Items} from '../../components/database/Database.js';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const MyCartScreen = () => {

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

  const onPromoPressed = () => {
    console.warn('Promo');
    navigation.navigate('PromoScreen');
  };


  const onBackPressed = () => {
    console.warn('Back');
    navigation.navigate('CustomerHomeScreen');
  };

  const onMyProfilePressed = () => {
    console.warn('My Profile');
    navigation.navigate('MyProfileScreen');
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

        <Text style={styles.textpromo}>Order</Text>
    </View>

      <SafeAreaView style={styles.containerr}>
       
      <Image source={require('../../../assets/images/Bag.jpeg')} style={styles.image}>

      </Image>

      </SafeAreaView>


      <SafeAreaView style={styles.container2}>
        
      <Text style={styles.text1}>Delivery Adress:</Text>
      <Text style={styles.text}>Giroc, Strada Sperantei, nr. 18</Text>

      <View style={styles.header}>
    
      <CustomButton5
        text="Edit Adress" 
        onPress={onBackPressed} 
        />

      <CustomButton5
        text="Add Note" 
        onPress={onBackPressed} 
        />

      </View>

      <View
        style={{
        marginTop: 10,
        borderBottomColor: '#222D31',
        borderBottomWidth: 1.3,
        }}
      />

      <View 
            style={{
              marginTop: 0,
              marginHorizontal: 10,
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {wishlist.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
      </View>

      <View
        style={{
        marginTop: 10,
        borderBottomColor: '#222D31',
        borderBottomWidth: 1,
        }}
      />

      <Text style={styles.text1}>Payment Summary                                           10$</Text>
      <Text style={styles.text}>Price</Text>
      <Text style={styles.text}>Delivery Fee</Text>

      <View
        style={{
        marginTop: 10,
        borderBottomColor: '#222D31',
        borderBottomWidth: 1,
        }}
      />

      <Text style={styles.text1}>Total Payment</Text>
      
      <CustomButton4
        text="Place Order" 
        onPress={onBackPressed} 
        />

      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        
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
  containerr: {
    flex: 1,
    backgroundColor: '#CBB199',
  },
  container2: {
    flex: 11,
    backgroundColor: '#CBB199',
  },
  image: {
    flex: 2,
    padding: 28,
    justifyContent: "center",
    alignSelf: 'center',
    width: 270, 
    height: 220,
    borderRadius: 16, 
    overflow: 'hidden',
    marginTop: 7,
  },
  text1: {
    textAlign: 'left',
    alignSelf: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'left',
    alignSelf: 'left',
    fontSize: 20,
    color: 'black',
    marginTop: 0,
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
  textpromo: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#D5E3E8',
    marginHorizontal: 112,
    backgroundColor: '#222D31',
    padding: 15,
  },
});



export default MyCartScreen;