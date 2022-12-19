import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, BackHandler, Dimensions,SafeAreaView, ScrollView,View ,Image, TouchableOpacity } from 'react-native';
import hh from '../assets/hh.png';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signOut } from "firebase/auth";


import {auth} from "../firebase";


const Signout = props => {

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

  //backHandler
  const screen = 0;
  const backAction = () =>{
    if (screen === 1){
      Alert.alert("warning", "Are you sure you want to exit?", [
        {
          text: "Cancel", 
          onPress:()=> null, 
          style: "cancel"
        }, {
          text:"Yes",
          onPress:()=>BackHandler.exitApp()
        }
      ]);
      return true;
    }
    else{
     
    }
    }
    useEffect(()=>{
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      )
    })

   
    //signout


    const logOut = async () => {


      signOut(auth).then(() => {
        // Sign-out successful.
        AsyncStorage.removeItem('UserData')
        props.navigation.navigate('Start');
        alert("signed out");
        
      }).catch((error) => {
        // An error happened.
        alert(error);
      });
      
      }
   return (
    <SafeAreaView style={styles.container}>
      <Image source={hh} style={styles.img} /> 
      <ScrollView showsVerticalScrollIndicator={false}>  
     <TouchableOpacity style={{
      backgroundColor: "white",
      borderRadius: 10,
      marginBottom: 20,
      height: (deviceHeight/4.5),
      width: deviceWidth -30
  }}>

        
     <Text style={styles.txt}>
     Sign out of application?
        </Text>
     <View style={{ flexDirection:"row" }}>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={logOut}>        
      <Text style={styles.text} >
          Yes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} 
      onPress={()=> NavigateToDetails(props)}>
      <Text style={styles.text} >
          No
        </Text>
      </TouchableOpacity>
</View>
     </TouchableOpacity>
      
      
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkmagenta',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img : {
      width: 305,
      height: 200,
      marginTop: 100,
      marginBottom: 15
    },
    text: {
      color: 'white',
      textAlign: 'center',
      paddingBottom: 20
    }, 
    txt : {
      padding: 8,
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 20, 
      }, 
    card: {
        backgroundColor: "white",
        padding: 18, 
        borderRadius: 10,
        marginBottom: 50,
        width: 400,
        height:200,
        marginTop: 50
    }, 
    buttonStyle: {
      padding: 8,
      textAlign: 'center',
      borderRadius: 40,
      backgroundColor: 'fuchsia',
      width: 100,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "auto",
      marginRight: "auto", 
      marginBottom: 20, 
      marginTop: 20, 
    },
    text: {
      fontWeight: 'bold',
    color: 'white',
    fontSize: 16
    }
});

export default Signout