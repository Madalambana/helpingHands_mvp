import { StatusBar } from 'expo-status-bar';
import { StyleSheet, BackHandler,Text,KeyboardAvoidingView,SafeAreaView,Image, TextInput, 
  View, ScrollView , TouchableOpacity} from 'react-native';
import hh from '../assets/hh.png';
import { useState, useEffect } from 'react';
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from "firebase/auth";


import {auth} from "../firebase";


const NavigateToLogin = props =>{
    props.navigation.navigate('login');
}
const NavigateToPopi = props =>{
  props.navigation.navigate('Popi');
}


const Signup = props  =>{

  const [name1, setName1] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [stdNr, setStdNr] = useState('');
  const [res, setRes] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

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

  //valiadation 
  const signUser = () => {
    if (name1 === "" || email === "" || lastName === "" || contact ===""
    || stdNr === "" || res === "" || password2 === "" || password === ""){
      alert("Enter details!"); 
    }
    else{
          if (password !== password2){
          alert("Passwords do not match!");
      }
          else{
                if(stdNr.length != 9){
                 alert("Incorrect student number!");
         }
         else{
        if (email.endsWith("@mywsu.ac.za") ||email.endsWith("@gmail.com") ){
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            addUser();
            props.navigation.navigate('login');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
          });
       }else {
        alert("Incorrect email");
      }
    }}
  }
    
  }

  //captureUser
  const addUser = () => {
    setDoc(doc(db, "users", auth.currentUser.email), {
      name: name1,
      last_name: lastName,
      student_no: stdNr,
      Email: email,
      Residence_name: res,
      contact_no: contact,
      uid: auth.currentUser.uid,
      
    }).then(()=>{
      alert("Successfully registered");
        })
        .catch((error)=>{
      alert(error);
        })  
  }


  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <SafeAreaView style={styles.container2}>
        <Image source={hh} style={styles.img} />
        </SafeAreaView>
      
      

      <Text style={styles.text}>
      All client information is secured and can only be accessed
by the adminstrative team, counselors and assistants.
<TouchableOpacity
onPress={() => NavigateToPopi(props)}>
  <Text  style={styles.text_r}> read more ...</Text>
</TouchableOpacity>
      </Text>
      <Text style={styles.text2}> Sign Up
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TextInput style={styles.textInput}  placeholder={'Enter your name'}
      value={name1}  onChangeText={(name1) => setName1(name1)}        />
      <TextInput style={styles.textInput}  placeholder={'Enter your last name'}
      value={lastName}  onChangeText={(lastName) => setLastName(lastName)}        />
      <TextInput style={styles.textInput}  placeholder={'Enter your cellphone number'}
      value={contact}  onChangeText={(contact) => setContact(contact)} keyboardType="numeric"
      />
       <TextInput style={styles.textInput}  placeholder={'Enter student email'}
      value={email}  onChangeText={(email) => setEmail(email)}        
      />
      <TextInput style={styles.textInput}  placeholder={'Enter your student number'}
      value={stdNr}  onChangeText={(stdNr) => setStdNr(stdNr)}  keyboardType="numeric"
      />
      <TextInput style={styles.textInput}  placeholder={'Enter institution residence name'}
      value={res}  onChangeText={(res) => setRes(res)}        
      />

      <TextInput style={styles.textInput}  placeholder={'Enter password'} keyboardType="numeric"  
      value={password}  onChangeText={(password) => setPassword(password)}  secureTextEntry={true}      
      />
       <TextInput style={styles.textInput}  placeholder={'Confirm password'} keyboardType="numeric"  
      value={password2}  onChangeText={(password2) => setPassword2(password2)} secureTextEntry={true}
      />

      <TouchableOpacity style={styles.signup} 
      onPress={signUser}>
        <Text style={{color: 'purple', fontSize: 16}} >
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text style={styles.text3}>
      If you have an existing account then
      </Text>
    <TouchableOpacity  onPress={() => NavigateToLogin(props)}>
    <Text style={styles.text4} >login</Text>
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
      paddingBottom: 150,
      paddingTop: 120
    },
    img : {

      width: 305,
      height: 200,
      marginTop: 45,
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'stretch', padding: 20
    },
    text: {
      color: 'white',
      textAlign: 'center',
      paddingBottom: 20
    }, 
    text_r: {
      marginTop:8,
      color: 'navy',
      textAlign: 'center',
      
      fontWeight:'bold',
    }, 
    
    text2: {
      color: 'white',
     fontWeight: 'bold',
     fontSize: 24,
     paddingBottom: 30
    }, 
    text3: {
      textAlign: 'center',
      color: 'white',
     fontWeight: 'bold',
     fontSize: 17
    },
    text4: {
      textAlign: 'center',
      color: 'navy',
     fontWeight: 'bold',
     fontSize: 17
    }, 
    textInput: {     
      backgroundColor: 'white',
      borderRadius: 40,
      padding: 5,
      textAlign: 'center',
      marginBottom: 20
    },
    textInput2: {     
      backgroundColor: 'white',
      borderRadius: 40,
      padding: 5,
      textAlign: 'center',
      marginBottom: 45
    }, 
    signup : {
      padding: 8,
      textAlign: 'center',
      borderRadius: 40,
      backgroundColor: 'white',
      width: 110,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "auto",
      marginRight: "auto", 
      marginBottom: 20
    }
});

 export default Signup