import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerCont } from './src/DrawerCont';
import { StackNav } from './src/DrawerCont';
import Home from "./components/Home";
import Help from './components/Help';
import ReportGBV from './components/ReportGBV';
import ReportSA from './components/ReportSA';
import GBVtxt from './components/GBVtxt';
import SAtxt from './components/SAtxt'
import Start from './components/Start';
import Signup from './components/Signup';
import login from './components/login';
import Reset from './components/Reset';
import Popi from './components/Popi';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator   screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Start"
        component={Start}
      />                                                                                       
      <Stack.Screen
        name="login"
        component={login}
      />
    <Stack.Screen
        name="Signup"
        component={Signup}
      />
       <Stack.Screen
        name="Popi"
        component={Popi}
      />
     <Stack.Screen
        name="DrawerCont"
        component={DrawerCont}
      /> 
      <Stack.Screen
        name="Help"
        component={Help}
      />
      <Stack.Screen
        name="Reset"
        component={Reset}
      />
      <Stack.Screen
        name="ReportGBV"
        component={ReportGBV}
      />
      <Stack.Screen
        name="ReportSA"
        component={ReportSA}
      />
      <Stack.Screen
        name="GBVtxt"
        component={GBVtxt}
      />
      <Stack.Screen
        name="SAtxt"
        component={SAtxt}
      />
      
    </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
