import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,SafeAreaView,Image,  ScrollView , TouchableOpacity, BackHandler} from 'react-native';
import hh from '../assets/hh.png';
import pp from '../assets/pp.png'
import { useEffect } from 'react';


const SAtxt = props  =>{
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
      <Text style={styles.text2}> Sexual Assualt
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      
     <TouchableOpacity style={styles.card}>
        <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis.
        Lorem ipsum dolor sit amet, consectetur eadipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        </Text>
        <Image source={pp} style={styles.img2} /> 
        <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        </Text>
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
    },
    img : {
      width: 305,
      height: 200,
      marginTop: 45,
      marginBottom: 15
    },
    img2 : {
        width: 150,
        height: 100,
        marginTop: 25,
        borderRadius: 10,
        marginBottom: 15
      },
    text: {
      
      paddingTop: 15,
      fontSize: 18
    }, 
    text2: {
      color: 'white',
     fontWeight: 'bold',
     fontSize: 24,
     paddingBottom: 30,
     marginLeft: 200
    }, 
    card: {
        backgroundColor: "white",
        padding: 18, 
        borderRadius: 10,
        marginBottom: 50,
        width: 400,
        height:850,
        
    }
});

 export default SAtxt