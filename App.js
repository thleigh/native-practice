import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  SafeAreaView, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create (
//   {
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     image: {
//       width: 200,
//       height: 200,
//     },  
//   }
// );

export default HomeScreen