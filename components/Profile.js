import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View,SafeAreaView,Image, ScrollView , TouchableOpacity, BackHandler} from 'react-native';
import hh from '../assets/hh.png';
import { useEffect } from 'react';


const Profile = props  =>{
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
        <View style={styles.container2}>
        <Image source={hh} style={styles.img} /> 
        <Text style={styles.text}>
      NOT AVAILABLE AS OF YET!!
      </Text>
        </View>
      
      <ScrollView>
      
      
      <Text style={styles.text2}> Sign Up
      </Text>
      <Text>Testing 123...!</Text>
      
    
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
        flex: 3,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',

      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50
      },
    img : {
      width: 135,
      height: 135,
      marginTop: 45,
      marginBottom: 15,
      borderRadius: 67.5,
      borderColor: "white", 
      borderWidth: 2, 
      marginLeft: 150,
      marginRight: 150
     
    },
    text: {
      color: 'white',
      textAlign: 'center',
      paddingBottom: 20,
      fontWeight: 'bold',
      fontSize: 20,
    }
});

 export default Profile