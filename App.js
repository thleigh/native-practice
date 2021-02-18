import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  SafeAreaView, Image } from 'react-native';

export default function App() {
  
  const handlePress = () => console.log("text clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello World</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => console.log("Image Touched")}>
        <View>
          <Image source={require('./assets/tanner2.png')}/>
        </View>
      </TouchableOpacity>

      <Button color="orange" title="Click Me" onPress={() => alert('button tapped')}/>

        {/* <Image source={{ 
          width: 200, 
          height: 300,
          uri: "https://picsum.photos/200/300"}}/> */}
    </SafeAreaView>
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
``