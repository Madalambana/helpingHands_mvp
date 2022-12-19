import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,KeyboardAvoidingView,SafeAreaView,Image, Dimensions,TextInput, ScrollView ,View,
  BackHandler, TouchableOpacity} from 'react-native';
import hh from '../assets/hh.png';
import { useState, useEffect } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../firebase";

const Reset = props  =>{

  const [email, setEmail] = useState('');
  
  
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
  

//reset password
const resetPassword = () => {
  sendPasswordResetEmail(auth, email)
  .then(() => {
  alert("Password reset sent to " + email);
  props.navigation.navigate('login');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error)
  });
}

  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
      <SafeAreaView style={styles.container2}>
        <Image source={hh} style={styles.img} />
        </SafeAreaView>
      <ScrollView>
      
      <Text style={styles.text}>
      All your information is highly secured and can only be accessed 
by the adminstrative team, counselors and assistants
      </Text>
      <Text style={styles.text2}> Reset Password
      </Text>
     <TouchableOpacity style={styles.card}>
     <Text style={styles.text3}>
        Email
      </Text>
      <TextInput style={styles.textInput}
      value={email}  onChangeText={(email) => setEmail(email)} 
      />
      

     
     </TouchableOpacity>
    

      <TouchableOpacity style={styles.login} 
      onPress={resetPassword}>
        <Text style={{color: 'purple', fontSize: 16}} >
          Reset 
        </Text>
      </TouchableOpacity>
     
     
      </ScrollView>
      <StatusBar style="auto" />

      </KeyboardAvoidingView>
     
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 80,
      paddingTop: 100
    },
    img : {
      width: 305,
      height: 200,
      marginTop: 45,
      marginBottom: 15
    },
    text: {
      color: 'white',
      textAlign: 'center',
      paddingBottom: 20
    }, 
    text2: {
      color: 'white',
     fontWeight: 'bold',
     fontSize: 24,
     paddingBottom: 30
    }, 
    text3: {
      paddingLeft: 15,
     fontSize: 17,
     marginBottom: 15
    }, 
    textInput: {     
      backgroundColor: 'silver',
      borderRadius: 40,
      padding: 5,
      textAlign: 'center',
      marginBottom: 20
    },
    textInput2: {     
      backgroundColor: 'silver',
      borderRadius: 40,
      padding: 5,
      textAlign: 'center',
      marginBottom: 45
    }, 
    login : {
      padding: 8,
      textAlign: 'center',
      borderRadius: 40,
      backgroundColor: 'white',
      width: 110,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "auto",
      marginRight: "auto", 
      marginBottom: 20, 
      
    }, 
    card: {
        backgroundColor: "white",
        padding: 18, 
        borderRadius: 10,
        marginBottom: 50
    }
});

 export default Reset