import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,View,SafeAreaView,Image, BackHandler,Dimensions, ScrollView , TouchableOpacity} from 'react-native';
import hh from '../assets/hh.png';
import * as Location from 'expo-location';
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";


const NavigateToHome = props =>{
    props.navigation.navigate('Home');
}

const Help = props  =>{

  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const captureEmerg = () => {
    setDoc(doc(db, "EMERGENCY", auth.currentUser.email), {
     Email: auth.currentUser.email,
    Location: location,
    issued_on: serverTimestamp(),
     uid: auth.currentUser.uid,
      
    }).then(()=>{
      props.navigation.navigate('DrawerCont');
        })
        .catch((error)=>{
      alert(error);
        })  
  }

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
  return(
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
        This will notify consultants of your dire situation, along with your current location for 
        assistance. {"\n"}
        {"\n"}
      Do you still want to continue?</Text>
     <View style={{ flexDirection:"row" }}>
      <TouchableOpacity style={styles.buttonStyle}>        
      <Text style={styles.text} >
          Yes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} 
      onPress={captureEmerg}>
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
        height:250,
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

 export default Help