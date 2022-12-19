import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from "react";
import { StyleSheet, Text,SafeAreaView,Image, ScrollView , TouchableOpacity,Dimensions,  Alert, BackHandler } from 'react-native';
import hh1 from '../assets/hh1.png';
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


const NavigateToHelp = props =>{
  props.navigation.navigate('Help');
}

const NavigateToReportGBV = props =>{
  props.navigation.navigate('ReportGBV');
}

const NavigateToReportSA = props =>{
  props.navigation.navigate('ReportSA');
}

const NavigateToGBVtxt = props =>{
  props.navigation.navigate('GBVtxt');
}

const NavigateToSAtxt = props =>{
  props.navigation.navigate('SAtxt');
}


const Home = props  =>{  

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

  const user = auth.currentUser;

 

  //back handler
  const screen = 1;
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

const [readEmail, setReadEmail] = useState();
const [readPassword, setReadPassword] = useState();
const read = () => {
  try {
    AsyncStorage.getItem('UserData').then(value=>{
      if (value != null){
        let client = JSON.parse(value)
        setReadEmail(client.Email)
        setReadPassword(client.Password)
        //check auth && login
        autoLogin();

     }
     else {
      props.navigation.navigate('login'); 
     }
    })
  } catch (error) {
    alert(error);
  }
}

useEffect(()=>{
  read();
})


const autoLogin = () => {
  if (user === null){
    signInWithEmailAndPassword(auth, readEmail, readPassword)
    .then((userCredential) => {
      console.log("SIGNED IN")
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
    });
  }
}

  return(
    <SafeAreaView style={styles.container}>
      <Image source={hh1} style={styles.img} /> 
       <Text style={styles.text1}>{readEmail}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={{
      backgroundColor: "white",
      borderRadius: 10,
      marginBottom: 20,
      height: (deviceHeight/4.5),
      width: deviceWidth -30
  }}>
        <Text style={styles.emrg}>
          Emergency helpline: XXX-XXX-XXXX 
        </Text>
        <Text style={styles.emrg}>
          For counceling: XXX-XXX-XXXX
          </Text>
          <TouchableOpacity style={styles.help}
          onPress={() => NavigateToHelp(props)}
          >
        <Text style={styles.text2}>
          HELP NOW!!!
        </Text>
      </TouchableOpacity>
      </TouchableOpacity>

       {/*Sexual assualt */}
     <Text style={styles.text3}> Sexual Assault</Text>
      <TouchableOpacity style={{
      backgroundColor: "white",
      borderRadius: 10,
      marginBottom: 20,
      height: (deviceHeight/4.5),
      width: deviceWidth -30
  }}
      
      >        
      <Text style={styles.aid}>
          For more information on sexual assault click the button below
        </Text>
        <TouchableOpacity style={styles.btn}
        onPress={() => NavigateToSAtxt(props)}>
          <Text style={styles.btnText}>More...</Text>
        </TouchableOpacity>
        <Text style={styles.aid}>
          To report any sexual assault click the button below,  do not fear we are here for you. 
        </Text>
        <TouchableOpacity style={styles.btn}
        onPress={() => NavigateToReportSA(props)}
        >
          <Text style={styles.btnText}>Report</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/*gbv */}
      <Text style={styles.text3}>Gender Based Violence</Text>
      <TouchableOpacity style={{
      backgroundColor: "white",
      borderRadius: 10,
      marginBottom: 20,
      height: (deviceHeight/4.5),
      width: deviceWidth -30
  }}>
      <Text style={styles.aid}>
          For more information on gender based violence click the button below
        </Text>
        <TouchableOpacity style={styles.btn}
        onPress={() => NavigateToGBVtxt(props)}>
          <Text style={styles.btnText}>More...</Text>
        </TouchableOpacity>
        <Text style={styles.aid}>
          To report any gender based violence do not fret we are here for you, click the button below {"\n"}
        </Text>
        <TouchableOpacity style={styles.btn}
         onPress={() => NavigateToReportGBV(props)}
        >
          <Text style={styles.btnText}>Report</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <Text style={styles.copyright}>© Copyright 2022</Text>
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
      width: 130,
      height:130,
      marginTop: 45,
      marginBottom:10
    },
    text1: {
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center'
      
    }, 
    emrg: {
      paddingLeft: 10,
      paddingTop: 10
    }, 
    copyright: {
      fontWeight: 'bold',
      marginBottom: 18,
      textAlign: 'center',
      color: 'white',
    }, 
    card: {
      backgroundColor: "white",
      borderRadius: 10,
      marginBottom: 20,
      height: 180,
      width: 380
  }, 
  help: {
    padding: 10,
    backgroundColor: "#9E205D",  
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    
    width: 120,

  },
  text2: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text3: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  aid: {
    textAlign: 'center',
      paddingTop: 10,
    fontSize: 13
  },
  btn : {
    backgroundColor: 'fuchsia',
    borderRadius: 10,
    
    width: 80,
    
    marginLeft: "auto",
    marginRight: "auto",
       
  },
  btnText : {
    textAlign: 'center',
    padding: 4,
    fontWeight: 'bold'
  }, 
  
});

 export default Home