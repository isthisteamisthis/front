import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from 'react-native-onboarding-swiper';
import Swiper from 'react-native-swiper';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import Splash from './src/screens/Enter/splash';
import Select from './src/screens/Enter/select';
import VoiceRange from './src/screens/Enter/voiceRange';
import mainpage from './src/screens/Main/mainpage';
import Middle from './src/screens/Enter/middle';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="Middle" component={Middle} />
          <Stack.Screen name="VoiceRange" component={VoiceRange} />
          <Stack.Screen name="Mainpage" component={mainpage} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
