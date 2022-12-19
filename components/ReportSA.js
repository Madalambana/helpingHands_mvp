  import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View,SafeAreaView,Image, BackHandler,Dimensions, ScrollView , TouchableOpacity} from 'react-native';
import hh from '../assets/hh.png';
import { doc, setDoc } from "firebase/firestore"; 
import { serverTimestamp} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from 'react';
import {auth} from "../firebase";

const NavigateToHome = props =>{
  props.navigation.navigate('DrawerCont');
}

const ReportSA = props  =>{


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


  const reportSA = () => {
    setDoc(doc(db, "SA", auth.currentUser.email), {
      Email: auth.currentUser.email,
      uid: auth.currentUser.uid,
      issued_on: serverTimestamp()
    }).then(()=>{
      alert("Your request for help has been captured. You will be contacted soon by a consultant");
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
     Please note this action will issue a report. You will be contacted regarding the report and counceling will be provided.  {"\n"}
        {"\n"}
      Do you still want to continue?</Text>
     <View style={{ flexDirection:"row" }}>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={reportSA}>        
      <Text style={styles.text} >
          Yes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} 
      onPress={()=> NavigateToHome(props)}>
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
        height:300,
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

 export default ReportSA