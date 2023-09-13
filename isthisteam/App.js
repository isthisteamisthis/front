/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import VoiceRange from './src/screens/voice-range';
import Main from './src/screens/main';

const Stack = createStackNavigator();

function App({navigation}) {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="VoiceRange" component={VoiceRange} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
