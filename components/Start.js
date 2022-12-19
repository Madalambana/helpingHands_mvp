import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, BackHandler, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import hh from '../assets/hh.png';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NavigateToDetails = props =>{
  props.navigation.navigate('Signup');
}

const Start = props => {
  
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

    //async storage
    const read = () => {
      try {
        AsyncStorage.getItem('UserData').then(value=>{
          if (value != null){
            props.navigation.navigate('DrawerCont'); 
         }
         else {
         }
        })
      } catch (error) {
        alert(error);
      }
    }
    
    useEffect(()=>{
      read();
    })
   return (
    <SafeAreaView style={styles.container}>
      <Image source={hh} style={styles.img} /> 
      <Text 
    style={styles.text2}
    >Welcome aboard!</Text>
    <ScrollView showsVerticalScrollIndicator={false}>
    
    <TouchableOpacity style={styles.touch1}
    >
      <Text style={styles.baseText}>Help create a safer environment for fellow students and citizens.
      {"\n"}We serve to protect and raise awareness and that we are stictly against gender based violence.
      </Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={styles.getStarted}        
        onPress={() => NavigateToDetails(props)}
      >
        <Text style = {styles.text1}>Get started</Text>
      </TouchableOpacity>
    </ScrollView>
    <StatusBar style="auto" />
  </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  img : {
    width: 305,
    height: 200,
    marginTop: 50,
    marginBottom: 30
  },
  getStarted:{
    alignItems: 'center',
    justifyContent: 'center',
    padding :10,
    paddingLeft: 110,
    paddingRight: 110,
    backgroundColor: '#F5F5F5',    
    marginTop: 180, 
    borderRadius: 40,
  },
  text1 : {
    fontSize: 18,
    color: "purple"
  },
  text2 : {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  baseText : {
    fontSize: 18,
    color: 'white',
    textAlign: "center",
    marginBottom: 20,
    paddingTop: 20,
  },
  touch1 : {
    padding: 35,
  },
}
);


export default Start