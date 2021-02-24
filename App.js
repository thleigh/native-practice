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

export default function App() {
  
  const handlePress = () => console.log("text clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello World</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => console.log("Image Touched")}>
        <View>
          <Image source={require('./assets/tanner2.png')} style={styles.image}/>
        </View>
      </TouchableOpacity>

      <Button color="orange" title="Click Me" 

        // onPress={() => Alert.alert('MyTitle', 'My Message', [
        //   { text: 'Yes', onPress: ()=> console.log('Yes') },
        //   { text: 'No', onPress: () => console.log('No') }
        // ])}/>

        onPress={() =>
        
          Alert.prompt("My Title", "My Message", text => console.log(text))}
      />

        {/* <Image source={{ 
          width: 200, 
          height: 300,
          uri: "https://picsum.photos/200/300"}}/> */}
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "orange"}

// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeScreen,
//     Explore: ExploreScreen,
//   },
//   {
//     initialRouteName: 'Home'
//   }
// );

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
