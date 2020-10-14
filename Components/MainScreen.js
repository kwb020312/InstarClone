import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'native-base';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';


const Tab = createMaterialBottomTabNavigator();

function MainScreen ({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon name="camera" style={{ paddingLeft: 10 }} />
      ),
      title: 'Instargram',
      headerRight: () => (
        <Icon name="send" style={{ paddingRight: 10 }} />
      )      
    });
  }, [navigation]);  

  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'white'}}
      activeColor="#000"
      inactiveColor="#d1cece"
    >
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="SearchTab" component={SearchTab} />
      <Tab.Screen name="AddMediaTab" component={AddMediaTab} />
      <Tab.Screen name="LikesTab" component={LikesTab} />
      <Tab.Screen name="ProfileTab" component={ProfileTab} />
    </Tab.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});