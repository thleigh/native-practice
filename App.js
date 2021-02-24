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

export default function App() {
  
  const handlePress = () => console.log("text clicked");

  return (
    <NavigationContainer>
      <DrawerLayout.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />

        <Drawer.Screen name="Details" component={DetailsStackScreen}/>
      </DrawerLayout.Navigator>
    </NavigationContainer>
  );
}

const containerStyle = {backgroundColor: "orange"}

const styles = StyleSheet.create(
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
