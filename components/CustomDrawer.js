import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return (
    <View style={{paddingTop: 150, }}>
      <Text>
        ks
      </Text>
    </View>
   
  );
}

export default CustomDrawer;