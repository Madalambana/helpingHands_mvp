import React from "react";
import { Button, View, Text , StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../components/Home";

import Profile from "../components/Profile";
import Signout from '../components/Signout';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerCont = () => {
  return (
    <Drawer.Navigator  screenOptions={{ headerShown: false }}
    style={styles.container}>
      <Drawer.Screen
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
      />
       <Drawer.Screen
        name="Signout"
        component={Signout}
      />
      
    </Drawer.Navigator>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkmagenta', 
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export {DrawerCont} ;