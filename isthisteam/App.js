/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VoiceRange from './src/screens/voice-range';
import KakaoLogin from './src/screens/kakao-login';
import KakaoLogout from './src/screens/kakao-logout';
import Main from './src/screens/main';
import MyPage from './src/screens/my-page';

const Stack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="VoiceRange" component={VoiceRange} />
        <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
        <Stack.Screen name="KakaoLogout" component={KakaoLogout} />
        <Stack.Screen name="MyPage" component={MyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
