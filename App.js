import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  SafeAreaView, Image } from 'react-native';

import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function App() {
  
  const handlePress = () => console.log("text clicked");

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create (
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },  
  }
);
